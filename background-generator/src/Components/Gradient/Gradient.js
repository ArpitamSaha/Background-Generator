import React from 'react';
import { useState, useEffect } from "react";
import randomcolor from 'randomcolor';
import bg_vdo from '../../Images/GradientBackgroundVideo.mp4';

import SyntaxHighlighter from 'react-syntax-highlighter';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintRoller, faRocket } from '@fortawesome/free-solid-svg-icons';

import "./Gradient.css";

function Gradient() {
    const [color1, setColor1] = useState(randomcolor());
    const [color2, setColor2] = useState(randomcolor());
    const [colorCode, setColorCode] = useState('');
    const displayColor = `background: ${colorCode};`;

    useEffect(() => {
        const gradient = `linear-gradient(to right, ${color1} , ${color2} )`;
        setColorCode(gradient);
        document.getElementById('GradientColorSpace').style.background = gradient;
    }, [color1, color2]);

    const changeColor = (e) => {
        const { name, value } = e.target;
        if (name === 'color1') {
            setColor1(value);
        } else if (name === 'color2') {
            setColor2(value);
        }
    };

    const RandomColor = () => {
        setColor1(randomcolor());
        setColor2(randomcolor());
    };
    return (
        <div className='Gradient' id='Gradient'>

            <video autoPlay loop muted className="bg-vdo" src={bg_vdo} />

            <h1>GRADIENT BACKGROUND</h1>
            <div className='colorPicker'>
                <h3>Select your colors:</h3>
                <div className='colorPicker-btn'>

                    <input type='color' name='color1' value={color1} onChange={changeColor} />
                    <input type='color' name='color2' value={color2} onChange={changeColor} />

                </div>
            </div>

            <div className='GradientColorSpace' id='GradientColorSpace'></div>

            <div className='generate'>
                <button className='GradientGenerateBtn' onClick={RandomColor}><FontAwesomeIcon icon={faRocket} /> Generate Random</button>
            </div>

            <div className='code-highlighter'>
                <SyntaxHighlighter language="css" >
                    {displayColor}
                </SyntaxHighlighter>
            </div>
            <div className='staticButton'>
                <button className='StaticBtn'> <a href='/'><FontAwesomeIcon icon={faPaintRoller} beat /> Select Static</a> </button>
            </div>
        </div>
    );
}

export default Gradient;