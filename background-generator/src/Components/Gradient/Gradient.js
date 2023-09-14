import React, { useEffect } from 'react';
import { useState } from "react";
import randomcolor from 'randomcolor';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import "./Gradient.css";

function Gradient() {
    const [color1, setColor1] = useState(randomcolor());
    const [color2, setColor2] = useState(randomcolor());
    const [colorCode, setColorCode] = useState('');

    useEffect(() => {
        const gradient = `linear-gradient(to right, ${color1} , ${color2} )`;
        setColorCode(gradient);
        document.body.style.background = gradient;
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
        <div>
            <h1>Create Gradient Color Background</h1>
            <div className='colorPicker'>
                <h3>Select your colors:</h3>
                <div className='colorPicker-btn'>

                    <input type='color' name='color1' value={color1} onChange={changeColor} />
                    <input type='color' name='color2' value={color2} onChange={changeColor} />

                </div>
            </div>

            <div className='generate'>
                <button className='Generate-btn' onClick={RandomColor}>Generate Random</button>
            </div>

            <div>
                <SyntaxHighlighter language="css" style={docco}>
                    {colorCode}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}

export default Gradient;