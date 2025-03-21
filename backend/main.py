# backend/main.py
from fastapi import FastAPI
import openai
from fastapi.responses import JSONResponse
from fastapi import UploadFile, File
from pypdf import PdfReader
from sentence_transformers import SentenceTransformer
import faiss
import os
import numpy as np

app = FastAPI()

# Initialize model and FAISS index
model = SentenceTransformer('all-MiniLM-L6-v2')
dim = 384  # Embedding dimension for the model
index = faiss.IndexFlatL2(dim)  # Use FAISS for vector search

@app.post("/upload")
async def upload_pdf(file: UploadFile = File(...)):
    # Save PDF
    file_path = f"temp/{file.filename}"
    with open(file_path, "wb") as buffer:
        buffer.write(await file.read())
    
    # Extract text from the PDF
    reader = PdfReader(file_path)
    text = ""
    for page in reader.pages:
        text += page.extract_text()

    # Generate embeddings for the text
    embeddings = model.encode([text])
    
    # Store embeddings in FAISS
    np_embeddings = np.array(embeddings).astype("float32")
    index.add(np_embeddings)
    
    # Remove temp file after processing
    os.remove(file_path)

    return {"message": "File uploaded and embeddings stored successfully."}

@app.post("/chat")
async def chat(query: str):
    # Generate embedding for the query
    query_embedding = model.encode([query])
    np_query_embedding = np.array(query_embedding).astype("float32")

    # Search for the most relevant text chunk
    D, I = index.search(np_query_embedding, k=1)
    response = "Here's the answer based on your query..."  # Replace with real answer

    return JSONResponse(content={"response": response})
