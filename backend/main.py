# from fastapi import FastAPI
# from openai import OpenAI
# from fastapi.responses import JSONResponse
# from fastapi import UploadFile, File
# from pypdf import PdfReader
# from sentence_transformers import SentenceTransformer
# import faiss
# import os
# import numpy as np

# app = FastAPI()

# client = OpenAI()

# response = client.embeddings.create(
#     input="Your text string goes here",
#     model="text-embedding-3-small"
# )

# print(response.data[0].embedding)

# @app.post("/upload")
# async def upload_pdf(file: UploadFile = File(...)):
#     # Save PDF
#     file_path = f"temp/{file.filename}" 
#     with open(file_path, "wb") as buffer:
#         buffer.write(await file.read())
    
#     # Extract text from the PDF
#     reader = PdfReader(file_path)
#     text = ""
#     for page in reader.pages:
#         text += page.extract_text()

#     # Generate embeddings for the text
#     embeddings = model.encode([text])
    
#     # Store embeddings in FAISS
#     np_embeddings = np.array(embeddings).astype("float32")
#     index.add(np_embeddings)
    
#     # Remove temp file after processing
#     os.remove(file_path)

#     return {"message": "File uploaded and embeddings stored successfully."}

# @app.post("/chat")
# async def chat(query: str):
#     # Generate embedding for the query
#     query_embedding = model.encode([query])
#     np_query_embedding = np.array(query_embedding).astype("float32")

#     # Search for the most relevant text chunk
#     D, I = index.search(np_query_embedding, k=1)
#     response = "Here's the answer based on your query..."  # Replace with real answer

#     return JSONResponse(content={"response": response})

from fastapi import FastAPI
from .api import upload, chat
from .db import connect_to_mongo

app = FastAPI()

# Connect to MongoDB
connect_to_mongo()

# Register API routes
app.include_router(upload.router, prefix="/upload", tags=["Upload"])
app.include_router(chat.router, prefix="/chat", tags=["Chat"])
