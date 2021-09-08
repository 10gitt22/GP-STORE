import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from 'contexts/Auth.context';

import './SignupForm.scss';
import ErrorAlert from 'layouts/ErrorAlert';
import SignedUpAlert from 'layouts/SignedUpAlert';
import { db } from '../../firebase';

export default function SignupForm({value, setHasAccount, setAuthModalState}){
    const firstNameRef = useRef();
    const secondNameRef = useRef();
    const emailRef = useRef();
    const phoneNumberRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const rememberMeRef = useRef();

    const { signup, currentUser } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    // const [signedUp, setSignedUp] = useState(false)
    async function handleSubmit(e) {
        e.preventDefault();

        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords don't match");
        }

        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value).then((data) => {
                db.collection('users').doc(data.user.uid).set({
                    email: emailRef.current.value,
                    firstName: firstNameRef.current.value,
                    secondName: secondNameRef.current.value,
                    phoneNumber: phoneNumberRef.current.value,
                    role: 'USER'
                })
                setAuthModalState(false)
            }).catch((e) => {
                setError(e.message);
            })
            console.log('Signed In!!!', currentUser);
        } catch (e){
            setError(e.message);
        }

        setLoading(false);
    }

    return (
        <motion.form id="signin"
        variants={value.variants} transition={value.transition} initial={value.initial} animate={value.animate} exit={value.animate}
        onSubmit = {handleSubmit}
        >
            <div className="form-title">Sign Up</div>
            <ErrorAlert label={error}/>
            {/* <SignedUpAlert value={signedUp} /> */}
            <div className="form-block">
                <div className='form-block-container'>
                    <div className="form-group" id="first-name-group">
                        <label htmlFor="first-name">First Name:</label>
                        <input type="text" className="inp-field" id="first-name" name="first_name" ref={firstNameRef} required/>
                    </div>
                    <div className="form-group" id="second-name-group">
                        <label htmlFor="second-name">Second Name:</label>
                        <input type="text" className="inp-field" id="second-name" name="second_name" ref={secondNameRef} required/>
                    </div>
                </div>
                <div className="form-group" id="email-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="inp-field" id="email" name="email" ref={emailRef} required/>
                </div>

                <div className="form-group" id="phone-group">
                    <label htmlFor="phone">Phone:</label>
                    <input type="phone" className="inp-field" id="phone" name="phone" ref={phoneNumberRef} required/>
                </div>
                
                <div className='form-block-container'>
                    <div className="form-group" id="password-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" className="inp-field" id="password" name="password" ref={passwordRef} required/>
                    </div>
                    <div className="form-group" id="password-confirm-group">
                        <label htmlFor="password-confirm">Confirm password:</label>
                        <input type="password" className="inp-field" id="password-confirm" name="password_confirm" ref={passwordConfirmRef} required/>
                    </div>
                </div>
                
                <button disabled={loading} type="submit" className="form-button" id="btn_signup">SIGN UP</button>
                
                <div className="form-block-container bottom-form">
                    <div className="form-group" id="remember-group">
                        <label htmlFor="remember">Remember me!</label>
                        <input type="checkbox" id="remember" name="remember" ref={rememberMeRef}/>
                    </div>
                    <div className="form-link">I already have an account. <span onClick={() => setHasAccount(true)}>Log In</span></div>
                </div>
            </div>
        </motion.form>
    )
}