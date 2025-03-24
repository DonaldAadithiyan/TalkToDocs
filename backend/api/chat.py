from fastapi import APIRouter
from ..services import embedding, vector_store

router = APIRouter()

@router.post("/")
async def chat(query: str):
    # Generate embedding for query
    query_embedding = embedding.generate_embedding(query)

    # Search for relevant document
    results = vector_store.search_similar(query_embedding)

    if results:
        response_text = results[0]["text"]
    else:
        response_text = "No relevant documents found."

    return {"response": response_text}
