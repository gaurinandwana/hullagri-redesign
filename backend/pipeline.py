import os
from langchain_community.tools.tavily_search import TavilySearchResults
from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from database import schemes_collection

# Ensure you have TAVILY_API_KEY in your .env file
tavily_tool = TavilySearchResults(max_results=5)

def run_weekly_scheme_crawler():
    print("🤖 Starting automated weekly scheme discovery crawler...")
    
    # 1. Search the web for latest agricultural grants or updates
    search_query = "latest Indian government agricultural schemes subsidies 2026 farmer welfare"
    search_results = tavily_tool.invoke({"query": search_query})
    
    if not search_results:
        print("No new results found from web search.")
        return

    # 2. Use LLM to structure unstructured search data into your precise Compass schema
    llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)
    
    prompt = ChatPromptTemplate.from_messages([
        ("system", "You are an expert data ingestion agent for an agricultural portal. Extract scheme details from the raw web snippets and output a JSON array containing objects with these exact keys: `_id`, `schemeName`, `schemeType`, `eligibleStates`, `eligibleFarmerCategories`, `eligibleCrops`, `applicationDeadline`, `benefits`."),
        ("human", "Raw Web Search Data: {data}")
    ])
    
    chain = prompt | llm
    ai_response = chain.invoke({"data": search_results})
    
    # 3. Clean and insert into MongoDB Compass
    try:
        import json
        # Basic parsing of AI output to insert into database
        content = ai_response.content.strip()
        if content.startswith("```json"):
            content = content[7:-3].strip()
            
        new_schemes = json.loads(content)
        
        for scheme in new_schemes:
            # Upsert based on schemeName so we don't create duplicate entries
            schemes_collection.update_one(
                {"schemeName": scheme.get("schemeName")},
                {"$set": scheme},
                upsert=True
            )
        print(f"Successfully processed and synced {len(new_schemes)} schemes into MongoDB!")
    except Exception as e:
        print(f"Error parsing/saving scraped schemes: {e}")