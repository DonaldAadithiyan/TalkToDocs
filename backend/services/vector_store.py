from ..db import db, COLLECTION_NAME

def store_embedding(filename: str, text: str, embedding: list):
    document = {
        "filename": filename,
        "text": text,
        "vector": embedding
    }
    db[COLLECTION_NAME].insert_one(document)

def search_similar(query_embedding: list, top_k: int = 3):
    results = db[COLLECTION_NAME].aggregate([
        {
            "$vectorSearch": {
                "index": "vector_index",
                "path": "vector",
                "queryVector": query_embedding,
                "numCandidates": top_k
            }
        }
    ])
    return list(results)
