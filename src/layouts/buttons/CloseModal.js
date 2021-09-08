import React from 'react';
import './CloseModal.scss';

export default function CloseModal({setAuthModalState}){
    return (
        <div onClick={() => setAuthModalState(false)} className="close_btn">
            <span></span>
            <span></span>
        </div>
    )
}