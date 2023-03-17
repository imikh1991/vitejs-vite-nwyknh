/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from "react";
import { Routes, Route, Link } from "react-router-dom"
import Header from "./Header";
function About() {
    return (
        <div>
            <div>
                <Header />
                <ul>
                    <li><h1>This is About page</h1></li>
                </ul>
            </div>
        </div>
    )
}

export default About