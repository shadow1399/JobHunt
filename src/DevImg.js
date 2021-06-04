import React from 'react';
import "./DevImg.css";

function DevImg({ url, name }) {
    return (
        <div className="devimg">
            <img src={url} />
            <h2>{name}</h2>
            <p>(Developer)</p>
        </div>
    )
}

export default DevImg;
