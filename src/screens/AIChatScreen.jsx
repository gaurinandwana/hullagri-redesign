import React, { useState, useEffect, useRef } from "react";
import { getApiUrl } from "../utils/api";
import { MOCK_SCHEMES } from "../data/mockSchemes";

export default function AIChatScreen({ farmerId, onBack }) {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Namaste! 🙏 I am your HullAgri AI Government Scheme Assistant. Ask me any question about subsidies, crop insurance, machinery grants, or scheme eligibility tailored to your farm!",
      relevantSchemes: [],
      sources: []
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [farmerProfile, setFarmerProfile] = useState(null);
  const messagesEndRef = useRef(null);

  const idToUse = farmerId || "farmer_default";

  useEffect(() => {
    async function fetchProfile() {
      try {
        const baseUrl = await getApiUrl();
        const res = await fetch(`${baseUrl}/api/farmer/${idToUse}`);
        if (res.ok) {
          const data = await res.json();
          setFarmerProfile(data.profile);
        }
      } catch (e) {
        console.log("Could not load profile context:", e);
      }
    }
    fetchProfile();
  }, [idToUse]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = async (textToSend) => {
    const questionText = textToSend || input;
    if (!questionText.trim() || loading) return;

    const userMessage = { sender: "user", text: questionText };
    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput("");
    setLoading(true);

    try {
      const baseUrl = await getApiUrl();
      const response = await fetch(`${baseUrl}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          farmer_id: idToUse,
          question: questionText
        })
      });

      if (!response.ok) throw new Error("Failed to get AI response");

      const data = await response.json();
      const aiMessage = {
        sender: "ai",
        text: data.answer || "Here is what I found for your question.",
        relevantSchemes: data.relevant_schemes || [],
        sources: data.sources || [],
        searchUsed: data.search_used
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      console.error("Chat error:", err);

      const lowerQ = questionText.toLowerCase();
      const relevant = MOCK_SCHEMES.filter((s) => {
        const name = (s.scheme_name || "").toLowerCase();
        const cat = (s.category || "").toLowerCase();
        const desc = (s.description || "").toLowerCase();
        return (
          name.includes(lowerQ) ||
          cat.includes(lowerQ) ||
          desc.includes(lowerQ) ||
          lowerQ.includes("scheme") ||
          lowerQ.includes("subsidy") ||
          lowerQ.includes("kisan") ||
          lowerQ.includes("crop") ||
          lowerQ.includes("insurance") ||
          lowerQ.includes("tractor") ||
          lowerQ.includes("solar") ||
          lowerQ.includes("pm")
        );
      }).slice(0, 3);

      const fallbackSchemes = relevant.length > 0 ? relevant : MOCK_SCHEMES.slice(0, 3);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: `Here are top government agricultural schemes matching your query "${questionText}":`,
          relevantSchemes: fallbackSchemes
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Helper to parse inline bolding **text**
  const parseInline = (text) => {
    if (!text) return "";
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={i} style={{ fontWeight: "700", color: "#0f172a" }}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  // Helper to render Markdown text cleanly as React elements
  const renderFormattedMarkdown = (rawText) => {
    if (!rawText) return null;
    const lines = rawText.split("\n");
    
    return lines.map((line, index) => {
      let trimmed = line.trim();
      if (!trimmed) return <div key={index} style={{ height: "4px" }} />;

      // Header 3 (###)
      if (trimmed.startsWith("### ")) {
        return (
          <h3 key={index} style={{ fontSize: "15px", fontWeight: "700", color: "#166534", margin: "8px 0 4px 0" }}>
            {parseInline(trimmed.slice(4))}
          </h3>
        );
      }
      // Header 4 (####)
      if (trimmed.startsWith("#### ")) {
        return (
          <h4 key={index} style={{ fontSize: "14px", fontWeight: "700", color: "#1e293b", margin: "6px 0 2px 0" }}>
            {parseInline(trimmed.slice(5))}
          </h4>
        );
      }
      // Bullet points (- or *)
      if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
        return (
          <div key={index} style={{ display: "flex", gap: "6px", marginLeft: "4px", margin: "3px 0" }}>
            <span style={{ color: "#2d8c3e", fontWeight: "700" }}>•</span>
            <span style={{ fontSize: "13.5px", lineHeight: "1.4" }}>{parseInline(trimmed.slice(2))}</span>
          </div>
        );
      }
      // Regular paragraph line
      return (
        <p key={index} style={{ margin: "3px 0", fontSize: "13.5px", lineHeight: "1.45" }}>
          {parseInline(trimmed)}
        </p>
      );
    });
  };

  const quickPrompts = [
    "What tractor & machinery subsidies can I get?",
    "Am I eligible for PM-KISAN ₹6,000 yearly benefit?",
    "What crop insurance schemes apply to my crops?",
    "Are there special subsidies for SC/ST or Women farmers?"
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f4f6f8", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div style={{ backgroundColor: "#2d8c3e", padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", color: "#fff", boxShadow: "0 2px 6px rgba(0,0,0,0.15)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {onBack && (
            <button onClick={onBack} style={{ background: "none", border: "none", color: "#fff", fontSize: "20px", cursor: "pointer" }}>
              ←
            </button>
          )}
          <div>
            <h2 style={{ fontSize: "17px", fontWeight: "700", margin: 0 }}>🤖 HullAgri AI Assistant</h2>
            <p style={{ fontSize: "11px", color: "#c8e6c9", margin: 0 }}>Farmer Scheme Intelligence System</p>
          </div>
        </div>
      </div>

      {/* Profile Context Bar */}
      {farmerProfile && (
        <div style={{ backgroundColor: "#e8f5e9", padding: "8px 16px", borderBottom: "1px solid #c8e6c9", fontSize: "12px", color: "#1b5e20", display: "flex", gap: "12px", overflowX: "auto", whiteSpace: "nowrap" }}>
          <span>📍 <strong>State:</strong> {farmerProfile.location?.state || "Punjab"}</span>
          <span>🌱 <strong>Land:</strong> {farmerProfile.location?.total_land_area || "2.5"} Acres</span>
          <span>🏷️ <strong>Category:</strong> {farmerProfile.caste_category || "General"}</span>
          <span>🌾 <strong>Crops:</strong> {(farmerProfile.crops_this_year || ["Wheat"]).join(", ")}</span>
        </div>
      )}

      {/* Chat Messages */}
      <div style={{ flex: 1, padding: "24px 32px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "16px", maxWidth: "1100px", margin: "0 auto", width: "100%", boxSizing: "border-box" }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ display: "flex", flexDirection: "column", alignItems: msg.sender === "user" ? "flex-end" : "flex-start" }}>
            <div
              style={{
                maxWidth: "88%",
                padding: "12px 16px",
                borderRadius: msg.sender === "user" ? "18px 18px 2px 18px" : "18px 18px 18px 2px",
                backgroundColor: msg.sender === "user" ? "#2d8c3e" : "#ffffff",
                color: msg.sender === "user" ? "#ffffff" : "#1e293b",
                boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
                fontSize: "14px"
              }}
            >
              {/* Formatted Markdown Render */}
              {renderFormattedMarkdown(msg.text)}

              {/* Live Web Search Verification Tag */}
              {msg.searchUsed && (
                <div style={{ marginTop: "8px", fontSize: "11px", color: "#0284c7", display: "flex", alignItems: "center", gap: "4px", fontWeight: "600" }}>
                  <span>🌐 Verified with Live Web Search</span>
                </div>
              )}

              {/* Clean Scheme Cards */}
              {msg.relevantSchemes && msg.relevantSchemes.length > 0 && (
                <div style={{ marginTop: "12px", borderTop: "1px solid #e2e8f0", paddingTop: "10px" }}>
                  <p style={{ fontSize: "12px", fontWeight: "700", color: "#166534", marginBottom: "8px" }}>
                    📋 Recommended Schemes for You:
                  </p>
                  {msg.relevantSchemes.map((s, idx) => (
                    <div
                      key={idx}
                      style={{
                        backgroundColor: "#ffffff",
                        padding: "12px 14px",
                        borderRadius: "10px",
                        border: "1px solid #e2e8f0",
                        borderLeft: "4px solid #2d8c3e",
                        marginBottom: "10px",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
                      }}
                    >
                      {/* Scheme Name & Central/State Badge */}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
                        <h4 style={{ fontSize: "14px", fontWeight: "700", color: "#0f172a", margin: 0, flex: 1 }}>
                          {s.scheme_name || s.schemeName}
                        </h4>
                        <span style={{ fontSize: "10px", backgroundColor: "#dcfce7", color: "#166534", padding: "3px 8px", borderRadius: "12px", fontWeight: "700", whiteSpace: "nowrap" }}>
                          {s.scheme_type || s.schemeType || "Central"}
                        </span>
                      </div>

                      {/* Financial Benefit */}
                      <div style={{ marginTop: "8px", fontSize: "12.5px", color: "#334155", lineHeight: "1.4" }}>
                        <strong style={{ color: "#0f172a" }}>💰 Benefit:</strong> {s.benefits}
                      </div>

                      {/* Why You Match */}
                      {(s.why_matches || s.whyMatches || s.eligibility) && (
                        <div style={{ marginTop: "6px", fontSize: "12px", color: "#15803d", backgroundColor: "#f0fdf4", padding: "6px 8px", borderRadius: "6px", border: "1px solid #bbf7d0" }}>
                          🎯 <strong>Why this matches you:</strong> {s.why_matches || s.whyMatches || s.eligibility}
                        </div>
                      )}

                      {/* View Official Portal Button */}
                      {(s.official_url || s.official_source || s.officialSource) && (
                        <div style={{ marginTop: "10px", textAlign: "right" }}>
                          <a
                            href={s.official_url || s.official_source || s.officialSource}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              display: "inline-block",
                              backgroundColor: "#166534",
                              color: "#ffffff",
                              fontSize: "11px",
                              fontWeight: "600",
                              padding: "5px 12px",
                              borderRadius: "6px",
                              textDecoration: "none"
                            }}
                          >
                            View Official Portal →
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {loading && (
          <div style={{ display: "flex", alignItems: "center", gap: "8px", backgroundColor: "#fff", padding: "12px 16px", borderRadius: "18px", width: "fit-content", boxShadow: "0 2px 6px rgba(0,0,0,0.06)" }}>
            <span style={{ fontSize: "13px", color: "#2d8c3e", fontWeight: "600" }}>Thinking & analyzing schemes...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Prompts */}
      <div style={{ padding: "8px 16px", overflowX: "auto", display: "flex", gap: "8px", backgroundColor: "#fff", borderTop: "1px solid #e2e8f0" }}>
        {quickPrompts.map((prompt, i) => (
          <button
            key={i}
            onClick={() => handleSend(prompt)}
            style={{
              padding: "6px 12px",
              borderRadius: "16px",
              border: "1px solid #c8e6c9",
              backgroundColor: "#f1f8e9",
              color: "#2e7d32",
              fontSize: "12px",
              whiteSpace: "nowrap",
              cursor: "pointer",
              fontWeight: "500"
            }}
          >
            💡 {prompt}
          </button>
        ))}
      </div>

      {/* Input Bar */}
      <div style={{ padding: "12px 16px", backgroundColor: "#fff", borderTop: "1px solid #e2e8f0", display: "flex", gap: "10px" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Ask about schemes, subsidies, insurance..."
          style={{
            flex: 1,
            padding: "12px 16px",
            borderRadius: "24px",
            border: "1.5px solid #cbd5e1",
            fontSize: "14px",
            outline: "none",
            backgroundColor: "#f8fafc",
            color: "#0f172a"
          }}
        />
        <button
          onClick={() => handleSend()}
          disabled={loading || !input.trim()}
          style={{
            padding: "0 20px",
            borderRadius: "24px",
            backgroundColor: loading || !input.trim() ? "#cbd5e1" : "#2d8c3e",
            color: "#fff",
            border: "none",
            fontWeight: "700",
            fontSize: "14px",
            cursor: loading || !input.trim() ? "not-allowed" : "pointer"
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
