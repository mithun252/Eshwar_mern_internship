import React from 'react';
import './Projects.css';

export const Projects = () => {
    return (
        <section className="projects-section">
            <h2 className="section-title">Projects</h2>
            <div className="job">
                <h3 className="job-title">Software Engineer</h3>
                <div className="project">
                    <h3 className="project-title">Student Management System</h3>
                    <p className="project-description">
                        A Student Management System (SMS) is a software application designed to manage and automate the various tasks 
                        and processes involved in running a school efficiently. It serves as a centralized platform for the organization 
                        to organize, catalog, and track student records, as well as facilitate student interactions with those resources.
                    </p>
                    <p className="project-language"><strong>Programming Language:</strong> C</p>
                </div>
                <div className="project">
                    <h3 className="project-title">Voice Assistant</h3>
                    <p className="project-description">
                        The Python-Based Voice Assistant project creates a system that understands and responds to voice commands. 
                        Using libraries like <code>SpeechRecognition</code> for input, <code>pyttsx3</code> for speech output, and 
                        NLP for processing, it can perform tasks like answering questions, setting reminders, and more. This project 
                        highlights Python's capability in building voice-controlled applications efficiently.
                    </p>
                    <p className="project-language"><strong>Programming Language:</strong> Python</p>
                </div>
            </div>
        </section>
    );
};
