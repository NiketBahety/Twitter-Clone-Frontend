import React from 'react';
import Icon from '../Icon/Icon';
import Avatar from '../Avatar/Avatar';
import Logout from '../Logout/Logout';
import { Link, useNavigate } from 'react-router-dom';
import './leftsidebar.css';

const LeftSideBar = () => {
    const user = JSON.parse(localStorage.getItem('Profile'));
    const navigate = useNavigate();
    const handleClick = () => {
        const logout = document.getElementsByClassName('logout-form-div')[0];
        logout.style.display = 'flex';
    };
    return (
        <div className="left-side-bar">
            <div className="left-side-bar-icon-list">
                <div>
                    <Icon
                        text={
                            <svg
                                fill="white"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                className="left-side-bar-logo"
                            >
                                <g>
                                    <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                                </g>
                            </svg>
                        }
                        hoverFill="#031e30"
                    ></Icon>
                    <Link to="/home">
                        <Icon text="home" hoverFill="#181a1b"></Icon>
                    </Link>
                    <Link to="/explore">
                        <Icon text="tag" hoverFill="#181a1b"></Icon>
                    </Link>
                    <Link to="/notifications">
                        <Icon text="notifications" hoverFill="#181a1b"></Icon>
                    </Link>
                    <Link to="/messages">
                        <Icon text="mail" hoverFill="#181a1b"></Icon>
                    </Link>
                    <Link to={'/users/' + user._id}>
                        <Icon text="person" hoverFill="#181a1b"></Icon>
                    </Link>
                    <Link to="/more">
                        <Icon text="pending" hoverFill="#181a1b"></Icon>
                    </Link>
                    <Icon
                        text="history_edu"
                        hoverFill="#1a8cd8"
                        fill="#1d9bf0"
                    ></Icon>
                </div>
                <Avatar
                    name={user.name}
                    fontSize="18px"
                    onClick={handleClick}
                ></Avatar>
            </div>
            <Logout></Logout>
        </div>
    );
};

export default LeftSideBar;
