import React from 'react';
import './CustomCursor.scss';

export default function CustomCursor({position}){
    return(
        <div id="cursor" 
        style={{
            transition: '.2s ease-out',
            transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
        ></div>
    )
}