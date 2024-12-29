import React, { useState } from 'react';
import { saveCode } from '../api';

function CodeForm({ onCodeSaved }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newCode = { title, content };
        const savedCode = await saveCode(newCode);
        onCodeSaved(savedCode);
        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Content</label>
                <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
            </div>
            <button type="submit">Save Code</button>
        </form>
    );
}

export default CodeForm;