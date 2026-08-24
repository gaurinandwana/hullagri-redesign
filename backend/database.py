import os
from pymongo import MongoClient

MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017/")
client = MongoClient(MONGO_URI)

# Connect directly to your specific database name from MongoDB Compass
db = client["hullagri-redesign-core"]

# Collections
farmers_collection = db["farmers"]
farmer_segments_collection = db["farmersegments"]
schemes_collection = db["schemes"]