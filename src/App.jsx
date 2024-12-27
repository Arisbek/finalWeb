import React, { useState } from 'react';
import Auth from './components/Auth';
import TeacherDashboard from './components/TeacherDashboard';
import StudentDashboard from './components/StudentDashboard';

function App() {
    const [user, setUser] = useState(null);

    return (
        <div>
            {!user ? (
                <Auth setUser={setUser} />
            ) : user.role === 'teacher' ? (
                <TeacherDashboard user={user} />
            ) : (
                <StudentDashboard user={user} />
            )}
        </div>
    );
}

export default App;