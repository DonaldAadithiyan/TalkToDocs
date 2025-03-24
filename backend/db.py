from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")
DB_NAME = os.getenv("DB_NAME")
COLLECTION_NAME = os.getenv("COLLECTION_NAME")

client = None
db = None

def connect_to_mongo():
    global client, db
    client = MongoClient(MONGO_URI)
    db = client[DB_NAME]
