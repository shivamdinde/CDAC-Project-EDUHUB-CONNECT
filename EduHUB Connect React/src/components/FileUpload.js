import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [subject, setSubject] = useState('');
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await axios.get('http://localhost:9090/admin/subjects');
        setSubjects(response.data);
      } catch (error) {
        console.error('Error fetching subjects:', error.message);
      }
    };

    fetchSubjects();
  }, []);

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('subject', subject);

      await axios.post('http://localhost:9090/admin/studymaterial', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('File uploaded successfully!');
    } catch (error) {
      console.error('Error uploading file:', error.message);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="card" style={{ height: '300px', width: '300px' }}>
        <div className="card-body" style={{ height: '300px', width: '300px' }}>
          <h2 className="card-title">File Upload</h2>
          <div className="mb-3">
            <select className="form-control" value={subject} onChange={handleSubjectChange}>
              <option value="">Select a subject</option>
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <input className="form-control" type="file" onChange={handleFileChange} />
          </div>
          <button className="btn btn-primary" onClick={handleUpload}>
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;