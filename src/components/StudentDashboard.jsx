import React from 'react';
import Marks from './Marks';

function StudentDashboard({ user }) {
    return (
        <div>
            <h2>Welcome, Student {user.username}</h2>
            <Marks userId={user.id} userRole="student" />
        </div>
    );
}
export default StudentDashboard;