import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SignupFormPage1 from './SignUpFormPage1';
import SignupFormPage2 from './SignUpFormPage2';
import { signup } from '../../../redux/actions/authActions';
import './forms.css';

import { toast } from 'react-toastify';
toast.configure({ position: 'top-center', autoClose: 2500 });

const SignupForm = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [page, setPage] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        username: '',
        aboutMe: '',
    });

    const changePage = () => {
        if (page === 1) {
            if (
                formData.name !== '' &&
                formData.email !== '' &&
                formData.password !== ''
            )
                setPage(2);
            else {
                toast.error('Please fill all the fields');
            }
        } else setPage(1);
    };

    const handleSignup = (e) => {
        e.preventDefault();
        if (formData.username.includes(' '))
            toast.error('Username should not contain space !!');
        else {
            dispatch(signup(formData, navigate));
        }
    };

    return (
        <div className="landing-page-form-background">
            <div className="landing-page-form-container">
                <div className="landing-page-form-container-header">
                    <div className="cross-btn">
                        {page === 2 ? (
                            <span
                                className="material-icons"
                                onClick={changePage}
                            >
                                arrow_back
                            </span>
                        ) : (
                            <span
                                className="material-icons"
                                onClick={props.handleClose}
                            >
                                close
                            </span>
                        )}
                    </div>
                    <div className="form-twitter-logo">
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
                    </div>
                </div>
                <h1 className="home-page-text">Create your account</h1>
                <form className="popup-form" onSubmit={handleSignup}>
                    {page === 1 ? (
                        <SignupFormPage1
                            changePage={changePage}
                            formData={formData}
                            setFormData={setFormData}
                        ></SignupFormPage1>
                    ) : (
                        <SignupFormPage2
                            formData={formData}
                            setFormData={setFormData}
                        ></SignupFormPage2>
                    )}
                </form>
            </div>
        </div>
    );
};

export default SignupForm;
