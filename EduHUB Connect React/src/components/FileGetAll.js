import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FileGetAll = () => {
  const [files, setFiles] = useState([]);
  const [subject, setSubject] = useState('');
  const [subjects, setSubjects] = useState([]);

  const handleSubjectChange = async (event) => {
    setSubject(event.target.value);
  };

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await axios.get('http://localhost:9090/student/subjects');
        setSubjects(response.data);
      } catch (error) {
        console.error('Error fetching subjects:', error.message);
      }
    };
    fetchSubjects();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:9090/student/studymaterial?subject=${subject}`);
        setFiles(response.data);
      } catch (error) {
        console.error('Error fetching files:', error.message);
      }
    };

    if (subject) {
      fetchData();
    }
  }, [subject]);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="card" style={{ height: '900px', width: '900px' }}>
        <div className="card-body" style={{ height: '900px', width: '900px' }}>
          <div>
            <h2>File List</h2>
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
            <ul>
              {files.map((file) => (
                <li key={file.id}>
                  {file.filename}
                  <a href={`http://localhost:9090/admin/studymaterial/${file.id}`} download>
                    Download
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileGetAll;
