// frontend/components/FileUpload.tsx
import { useState, ChangeEvent } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);

  // TypeScript type for file input change event
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://127.0.0.1:8000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('File uploaded successfully!');
    } catch (error) {
      alert('Error uploading file.');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload PDF</button>
    </div>
  );
};

export default FileUpload;
