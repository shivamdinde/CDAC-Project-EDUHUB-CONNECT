import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function SubjectForm() {
    const [name, setName] = useState("");
    const [subjectCode, setSubjectCode] = useState("");
    const [duration, setDuration] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const subject = { name, subjectCode, duration };

        try {
            await axios.post('http://localhost:8765/eduhubsubject/admin/subject', subject);
            alert('Subject added successfully!');
            // Clear form fields after successful submission
            setName("");
            setSubjectCode("");
            setDuration("");
        } catch (error) {
            console.error('Error adding subject:', error.message);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card" style={{ width: '25rem' }}>
                <div className="card-body">
                    <h2 className="card-title">Add Subjects</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Name:</label>
                            <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Subject Code:</label>
                            <input type="text" className="form-control" value={subjectCode} onChange={e => setSubjectCode(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Duration:</label>
                            <input type="number" className="form-control" value={duration} onChange={e => setDuration(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SubjectForm;
