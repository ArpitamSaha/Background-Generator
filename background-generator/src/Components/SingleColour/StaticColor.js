import React from 'react';
import { useState, useEffect } from "react";
import randomcolor from 'randomcolor';
import bg_vdo from '../../Images/StaticBackgroundVideo.mp4';

import SyntaxHighlighter from 'react-syntax-highlighter';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faRocket } from '@fortawesome/free-solid-svg-icons';


import "./StaticColor.css";

function StaticColor() {
    const [color, setColor] = useState(randomcolor());
    const [colorCode, setColorCode] = useState('');
    const displayColor = `background-color : ${colorCode};`;

    useEffect(() => {
        const StaticColor = `${color}`;
        setColorCode(StaticColor);
        document.getElementById('StaticColorSpace').style.background = StaticColor;
    }, [color]);


    const changeColor = (e) => {
        const { name, value } = e.target;
        if (name === 'color') {
            setColor(value);
        }
    };

    const RandomColor = () => {
        setColor(randomcolor());
    };

    return (

        <div className='StaticColor' id='StaticColor'>

            <video autoPlay loop muted className="bg-vdo" src={bg_vdo} />

            <h1>STATIC BACKGROUND</h1>

            <div className='colorPicker'>

                <h3>Select your color:</h3>

                <div className='colorPicker-btn'>

                    <input type='color' name='color' value={color} onChange={changeColor} />

                </div>

            </div>

            <div className='StaticColorSpace' id='StaticColorSpace'></div>

            <div className='generate'>
                <button className='StaticGenerateBtn' onClick={RandomColor}><FontAwesomeIcon icon={faRocket} /> Generate Random</button>
            </div>

            <div className='StaticCodeHighlighter'>
                <SyntaxHighlighter language="css" >
                    {displayColor}
                </SyntaxHighlighter>
            </div>

            <div className='gradientButton'>
                <button className='GradBtn'> <a href='/Gradient'><FontAwesomeIcon icon={faPalette} beat />  Select Gradient </a> </button>
            </div>

        </div>
    );
};

export default StaticColor;