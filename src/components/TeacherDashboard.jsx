import React from 'react';
import TestCreation from './TestCreation';
import Marks from './Marks';

function TeacherDashboard({ user }) {
    return (
        <div>
            <h2>Welcome, Teacher {user.username}</h2>
            <TestCreation teacherId={user.id} />
            <Marks userId={user.id} userRole="teacher" />
        </div>
    );
}
export default TeacherDashboard;