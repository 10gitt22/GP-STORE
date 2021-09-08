import { useAuth } from 'contexts/Auth.context';
import React, { useEffect, useState } from 'react';
import './UserInfo.scss';

export default function UserInfo() {

    const { currentUser } = useAuth();

    const loginBtnAnim = {
        'in': {
            transform: 'rotateZ(-90deg) translateX(50%) translateY(-50%)'
        }, 
        'out': {
            transform: 'rotateZ(-90deg) translateX(50%) translateY(100%)'
        }
    }

    return (
        <div className="user_info"
        style = {currentUser === null || currentUser === undefined ? loginBtnAnim.out : loginBtnAnim.in}
        >
            {currentUser === null || currentUser === undefined ? 
                <span></span>
            : 
                <span>{currentUser.email}</span>
            }
        </div>
    )
}
