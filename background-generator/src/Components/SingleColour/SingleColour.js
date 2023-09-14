import React from 'react';
import './SingleColour.css';
const SingleColour = () => {
    return (
        <>
            <h1>Generate CSS Color Gradient</h1>
            <div className='input'>
                <h3>Enter colors</h3>
                <div className="inp-btn">
                    <input type='color' />
                    <input type='color' />
                </div>
            </div>
            <div className='generate'>
                <button>Generate</button>
            </div>

            <div className="code-box">
                <p>CSS Code:</p>
                <div id="codeSelect" className="code">

                </div>
            </div>
        </>
    );
};

export default SingleColour;