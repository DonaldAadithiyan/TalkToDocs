from fastapi import APIRouter, File, UploadFile
from ..services import pdf_processing, embedding, vector_store
import os

router = APIRouter()

@router.post("/")
async def upload_pdf(file: UploadFile = File(...)):
    # Save file
    file_path = f"temp/{file.filename}"
    with open(file_path, "wb") as buffer:
        buffer.write(await file.read())

    # Extract text from PDF
    text = pdf_processing.extract_text(file_path)

    # Generate embeddings
    text_embedding = embedding.generate_embedding(text)

    # Store in MongoDB
    vector_store.store_embedding(file.filename, text, text_embedding)

    # Remove temp file
    os.remove(file_path)

    return {"message": "File uploaded and indexed successfully"}
