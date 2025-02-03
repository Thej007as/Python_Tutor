import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Tutor.css';

function TutorPage() {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');
    const [homework, setHomework] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [character, setCharacter] = useState('Default AI Tutor');
    
    const navigate = useNavigate();

    const tutorCharacters = [
        'Default AI Tutor',
        'Professor Code',
        'Python Master',
        'Math Genius',
        'History Guide'
    ];

    const askAI = async () => {
        if (!input.trim()) {
            setError('Please enter a question.');
            return;
        }

        setIsLoading(true);
        setError('');
        setResponse('');
        setHomework('');

        try {
            const res = await axios.post('http://localhost:5000/ask', {
                prompt: input,
                character
            });
            setResponse(res.data.reply);
            setHomework(res.data.homework || 'Try writing a small program related to what you learned.');
        } catch (error) {
            console.error(error);
            setError('Error: Unable to connect to the AI tutor. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="tutor-container">
            <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
            <h1>Ask Your AI Tutor</h1>
            
            <label>Select Your Tutor:</label>
            <select value={character} onChange={(e) => setCharacter(e.target.value)}>
                {tutorCharacters.map((char, index) => (
                    <option key={index} value={char}>{char}</option>
                ))}
            </select>

            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your Python question here..."
            />

            <button onClick={askAI} disabled={isLoading}>
                {isLoading ? 'Asking...' : 'Ask'}
            </button>

            {error && <p className="error-message">{error}</p>}

            <div className="response-box">
                <p>{response}</p>
            </div>

            {response && (
                <div className="homework-box">
                    <h3>Homework Assignment:</h3>
                    <p>{homework}</p>
                </div>
            )}
        </div>
    );
}

export default TutorPage;
