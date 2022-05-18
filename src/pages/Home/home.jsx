import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';
import HomeMainBar from '../../components/HomeMainBar/HomeMainBar';
import RightSideBar from '../../components/RightSideBar/RightSideBar';
import './home.css';

const Home = () => {
    const navigate = useNavigate();
    const user = localStorage.getItem('Profile');

    useEffect(() => {
        if (!user) navigate('/');
    }, []);

    return (
        <div className="home-page">
            <LeftSideBar></LeftSideBar>
            <div className="home-page-right-container">
                <HomeMainBar user={JSON.parse(user)}></HomeMainBar>
                <RightSideBar></RightSideBar>
            </div>
        </div>
    );
};

export default Home;
