import React, { useEffect, useState } from 'react';

function Marks({ userId, userRole }) {
    const [marks, setMarks] = useState([]);

    useEffect(() => {
        const fetchMarks = async () => {
            const response = await fetch(`/api/marks/${userRole}/${userId}`);
            const data = await response.json();
            setMarks(data);
        };
        fetchMarks();
    }, [userRole, userId]);

    return (
        <div>
            <h2>Your Marks</h2>
            <ul>
                {marks.map(mark => (
                    <li key={mark.id}>{mark.subject}: {mark.score}</li>
                ))}
            </ul>
        </div>
    );
}
export default Marks;