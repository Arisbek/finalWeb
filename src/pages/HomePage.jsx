import React, { useState } from 'react';
import CodeForm from '../components/CodeForm';
import CodeList from '../components/CodeList';

function HomePage() {
    const [codes, setCodes] = useState([]);

    const handleCodeSaved = (newCode) => {
        setCodes((prevCodes) => [...prevCodes, newCode]);
    };

    return (
        <div>
            <h1>Welcome to CodeSent</h1>
            <p>Share and browse code snippets with ease.</p>
            <CodeForm onCodeSaved={handleCodeSaved} />
            <CodeList codes={codes} />
        </div>
    );
}

export default HomePage;