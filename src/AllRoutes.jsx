import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SubRoutes from './SubRoutes';
import LandingPage from './pages/Landing Page/landingPage';

const AllRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/*" element={<SubRoutes />}></Route>
        </Routes>
    );
};

export default AllRoutes;
