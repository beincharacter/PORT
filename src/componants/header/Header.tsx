import React from 'react';
import './Header.scss';

export const Header: React.FC = () => {
    return (
        <div className="header-box">
            <div className="navigation">
                <div className="logo"></div>
                <div className="tabs">
                    <p>Home</p>
                    <p>Services</p>
                    <p>About</p>
                    <p>Company</p>
                    <p>News</p>
                    <p>Project</p>
                </div>
            </div>
            <div className="contact"></div>
        </div>
    );
};