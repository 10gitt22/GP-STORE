import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

import './LoginForm.scss';
import { useAuth } from 'contexts/Auth.context';
import ErrorAlert from 'layouts/ErrorAlert';

export default function LoginForm({value, setHasAccount, setAuthModalState}){

    const emailRef = useRef();
    const passwordRef = useRef();

    const { login, currentUser } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value)
            console.log('Loged In!!!', currentUser);
            setAuthModalState(false);
        } catch (e){
            setError(e.message);
        }

        setLoading(false);
    }

    return(
        <motion.form id="login"
        variants={value.variants} transition={value.transition} initial={value.initial} animate={value.animate} exit={value.animate}
        onSubmit = {handleSubmit}
        >
            <div className="form-title">Log In</div>
            <ErrorAlert label={error}/>
            <div className="form-block">
                <div className="form-group" id="email-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="inp-field" id="email" name="email" ref={emailRef} required/>
                </div>
                
                <div className="form-group" id="password-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="inp-field" id="password" name="password" ref={passwordRef} required/>
                </div>
                
                <button disabled={loading} type="submit" className="form-button" id="btn_signup">LOG IN</button>
                
                <div className="form-block-container bottom-form">
                    <div className="form-link">Doesn't have any account yet? <span onClick={() => setHasAccount(false)}>Sign Up</span></div>
                </div>
            </div>
        </motion.form>
    )
}