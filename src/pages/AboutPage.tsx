import React from 'react';
import avatarSrc from '../assets/avatar.jpeg';
import './AboutPage.css';

function AboutPage() {
    return (
        <div className="page-wrapper">
            <h1>This is About page</h1>
            <div className="about__author">
                <div className="about__img">
                    <img src={avatarSrc} alt="author" />
                </div>
                <div className="about__info">
                    <div className="about__title">Hi my name is Ilya</div>
                    <div className="about__description">
                        I am web developer https://github.com/imikh1991
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
