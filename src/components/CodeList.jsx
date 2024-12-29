import React, { useEffect, useState } from 'react';
import { fetchCodes } from '../api';

function CodeList() {
    const [codes, setCodes] = useState([]);

    useEffect(() => {
        async function loadCodes() {
            const codes = await fetchCodes();
            setCodes(codes);
        }
        loadCodes();
    }, []);

    return (
        <div>
            <h2>Code Snippets</h2>
            <ul>
                {codes.map((code) => (
                    <li key={code.id}>
                        <h3>{code.title}</h3>
                        <pre>{code.content}</pre>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CodeList;