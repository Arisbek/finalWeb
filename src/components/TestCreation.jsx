import React, { useState } from 'react';

function TestCreation({ teacherId }) {
    const [test, setTest] = useState({ subject: '', marks: [] });

    const handleCreateTest = async () => {
        await fetch(`/api/tests`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...test, teacherId }),
        });
        alert('Test created successfully!');
    };

    return (
        <div>
            <h2>Create Test</h2>
            <input type="text" placeholder="Subject" onChange={(e) => setTest({ ...test, subject: e.target.value })} />
            <input type="number" placeholder="Marks" onChange={(e) => setTest({ ...test, marks: [...test.marks, e.target.value] })} />
            <button onClick={handleCreateTest}>Create Test</button>
        </div>
    );
}
export default TestCreation;