import React from 'react';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/authActions';
import './logout.css';

const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem('Profile');
        navigate('/');
    };

    const handleCancel = () => {
        const logout = document.getElementsByClassName('logout-form-div')[0];
        logout.style.display = 'none';
    };
    return (
        <div className="logout-form-div">
            <div className="logout-form">
                <Button
                    text="Logout"
                    px="100"
                    py="10"
                    fontSize="16px"
                    fill="#f4212e"
                    color="white"
                    hoverFill="#f73643"
                    clickFn={handleLogout}
                ></Button>
                <Button
                    text="Cancel"
                    px="100"
                    py="10"
                    fontSize="16px"
                    hoverFill="rgb(215,219,220)"
                    clickFn={handleCancel}
                ></Button>
            </div>
        </div>
    );
};
export default Logout;
