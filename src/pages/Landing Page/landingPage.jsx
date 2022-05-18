import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import SignupForm from './Forms/SignupForm';
import LoginForm from './Forms/LoginForm';
import { login } from '../../redux/actions/authActions';
import './landingPage.css';

import { toast } from 'react-toastify';
toast.configure({ position: 'top-center', autoClose: 2500 });

const LandingPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = localStorage.getItem('Profile');

    useEffect(() => {
        if (user) navigate('/home');
    }, []);

    const [signupForm, setSignupForm] = useState(false);
    const [loginForm, setLoginForm] = useState(false);

    const handleSignupClick = () => {
        setSignupForm(!signupForm);
    };
    const handleLoginClick = () => {
        setLoginForm(!loginForm);
    };

    const handleClose = () => {
        setLoginForm(false);
        setSignupForm(false);
    };

    const handleLogin = (e) => {
        const email = e.target[0].value;
        const password = e.target[1].value;
        e.preventDefault();
        dispatch(login({ email, password }, navigate));
    };

    return (
        <div className="landing-page">
            <div className="home-page-banner-div">
                <img
                    className="home-page-banner"
                    alt=""
                    draggable="false"
                    src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png"
                ></img>
                <svg
                    fill="white"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="home-page-banner-logo"
                >
                    <g>
                        <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                    </g>
                </svg>
            </div>
            <div className="login-signup">
                <svg
                    fill="white"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="home-page-logo"
                >
                    <g>
                        <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                    </g>
                </svg>
                <h1 className="home-page-text home-page-heading">
                    Happening now
                </h1>
                <h1 className="home-page-text">Join Twitter today.</h1>
                <Button
                    text="Sign up with email"
                    fill="#1d9bf0"
                    color="white"
                    px="60"
                    py="15"
                    my="30"
                    hoverFill="#1a8cd8"
                    clickFn={handleSignupClick}
                ></Button>
                <p className="landing-page-privacy-policy">
                    By signing up, you agree to the{' '}
                    <span>Terms of Service</span> and{' '}
                    <span>Privacy Policy</span>, including{' '}
                    <span>Cookie Use.</span>
                </p>
                <h3 className="home-page-text">Already have an account?</h3>
                <Button
                    text="Sign in"
                    fill="transparent"
                    color="#1d9bf0"
                    px="120"
                    py="15"
                    my="10"
                    border="1px solid grey"
                    hoverFill="#031e30"
                    clickFn={handleLoginClick}
                ></Button>
            </div>
            {signupForm === true ? (
                <SignupForm handleClose={handleClose}></SignupForm>
            ) : (
                ''
            )}
            {loginForm === true ? (
                <LoginForm
                    handleClose={handleClose}
                    handleLogin={handleLogin}
                ></LoginForm>
            ) : (
                ''
            )}
        </div>
    );
};

export default LandingPage;
