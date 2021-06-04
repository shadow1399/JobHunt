import React from 'react';
import Navbar from "./Navbar";
import "./About.css";
import { Footer } from "./Footer";
import DevImg from "./DevImg";

function About() {
    return (
        <div className="about">
            <div className="about__nav">
                <Navbar value="about" />
            </div>

            <h1>About US</h1>
            <div className="about__content">

                <p><span className="about__span">Job Hunt</span> is a one stop place for all the job seekers, where they can apply for any jobs they want all over the world. Everyone cannot watch all the career sites everyday for the
                    opportunities they want. So our team decided to update all the career opportunities at one place.
                    <br></br><br></br>
                    This idea is implemented by:



                </p>
                <div className="about__devImg">
                    <DevImg url="./developers.png" name="Kshitij Taneja" />
                    <DevImg url="./developers.png" name="Raman Chhabra" />
                    <DevImg url="./developers.png" name="Satyansh Vaish" />
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default About
