import React, { useState } from 'react';

function Auth({ setUser }) {
    const [role, setRole] = useState('student'); // or 'teacher'
    const [credentials, setCredentials] = useState({ username: '', password: '' });

    const handleLogin = async () => {
        const response = await fetch(`/api/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...credentials, role }),
        });
        const data = await response.json();
        if (data.success) {
            setUser(data.user);
        } else {
            alert(data.message);
        }
    };

    const handleRegister = async () => {
        const response = await fetch(`/api/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...credentials, role }),
        });
        const data = await response.json();
        if (data.success) {
            setUser(data.user);
        } else {
            alert(data.message);
        }
    };

    return (
        <div>
            <h2>{role === 'student' ? 'Student' : 'Teacher'} Login/Register</h2>
            <select onChange={(e) => setRole(e.target.value)}>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
            </select>
            <input type="text" placeholder="Username" onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
            <input type="password" placeholder="Password" onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleRegister}>Register</button>
        </div>
    );
}
export default Auth;