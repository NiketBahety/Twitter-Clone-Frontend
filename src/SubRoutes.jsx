import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import LeftSideBar from './components/LeftSideBar/LeftSideBar';
import HomeMainBar from './components/HomeMainBar/HomeMainBar';
import RightSideBar from './components/RightSideBar/RightSideBar';
import './pages/Home/home.css';
import TweetDetails from './pages/TweetDetails/TweetDetails';
import UserDetails from './pages/UserDetails/UserDetails';

const SubRoutes = () => {
    const navigate = useNavigate();
    const user = localStorage.getItem('Profile');

    useEffect(() => {
        if (!user) navigate('/');
    }, []);

    return (
        <div className="home-page">
            <LeftSideBar></LeftSideBar>
            <div className="home-page-right-container">
                <Routes>
                    <Route
                        exact
                        path="/home"
                        element={<HomeMainBar user={JSON.parse(user)} />}
                    />
                    <Route
                        exact
                        path="/tweet/:id"
                        element={
                            <div className="central-main-bar">
                                <TweetDetails />
                            </div>
                        }
                    />
                    <Route
                        exact
                        path="/users/:id/*"
                        element={
                            <div className="central-main-bar">
                                <UserDetails />
                            </div>
                        }
                    />
                    <Route
                        path="/*"
                        element={<div className="central-main-bar" />}
                    ></Route>
                </Routes>
                <RightSideBar></RightSideBar>
            </div>
        </div>
    );
};

export default SubRoutes;
