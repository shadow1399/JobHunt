import React from 'react';
import Navbar from "./Navbar";
import './App.css';
import { HomeScreen } from './HomeScreen';

function Homepage() {
    return (

        <div className="app">
            <div className="app__start  responsive">
                <Navbar value="home"/>
                <HomeScreen />
            </div>

        </div>



    );
}

export default Homepage;
