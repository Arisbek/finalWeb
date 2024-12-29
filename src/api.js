const API_URL = 'https://finaloop.onrender.com/api/codes';

export async function fetchCodes() {
    const response = await fetch(API_URL);
    return response.json();
}

export async function saveCode(code) {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(code)
    });
    return response.json();
}