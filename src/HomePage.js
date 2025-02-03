import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const HomePage = () => {
    return (
        <div className="home-container">
            <h1>Welcome to Python Buddy</h1>
            <p>
                Python Tutor for Kids is an interactive learning platform designed to teach children the fundamentals of Python programming in a fun and engaging way. Through our AI-powered tutor, kids can learn at their own pace and explore coding through tailored lessons and activities.
            </p>
            <p>
                What makes our app unique is its customizable tutor characters, providing a personalized experience for each child. Additionally, each lesson includes interactive exercises and fun homework assignments to reinforce learning. Whether your child is new to coding or looking to improve their skills, Python Tutor for Kids is designed to support their growth in an enjoyable and educational environment.
            </p>
            <Link to="/tutor">
                <button className="start-button">Start Learning</button>
            </Link>
        </div>
    );
}

export default HomePage;
