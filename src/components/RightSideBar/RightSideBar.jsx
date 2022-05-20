import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';
import Avatar from '../Avatar/Avatar';
import { getAllUsers, follow } from '../../redux/actions/userActions';
import './rightsidebar.css';

const RightSideBar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    let usersList = useSelector((state) => state.userReducer);

    let followState1 = false;
    let followState2 = false;
    let followState3 = false;

    let user = JSON.parse(localStorage.getItem('Profile'));
    if (user.following.includes('62835493292a12c7c9c14ae6'))
        followState1 = true;
    if (user.following.includes('62839e42b7fa56c84e0da245'))
        followState2 = true;
    if (user.following.includes('6284f922e6406db3364ee993'))
        followState3 = true;

    useEffect(() => {
        dispatch(getAllUsers());
        user = JSON.parse(localStorage.getItem('Profile'));
    }, [user, dispatch, followState1, followState2, followState3]);

    const handleClick = (id) => {
        navigate(`/users/${id}`);
    };

    const handleFollow = (id) => {
        if (id === '62835493292a12c7c9c14ae6') followState1 = !followState1;
        else if (id === '62839e42b7fa56c84e0da245')
            followState2 = !followState2;
        else if (id === '6284f922e6406db3364ee993')
            followState3 = !followState3;

        dispatch(follow(id));
    };

    return (
        <div className="right-side-bar">
            <div className="right-side-bar-div">
                <div className="searchbar-div">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search Twitter"
                    />
                </div>
                <div className="right-side-bar-sub-bar">
                    <div className="whats-happening-div">
                        <h1 className="right-side-bar-heading">
                            What's happening
                        </h1>
                        <div className="news-tab">
                            <div className="news-tab-header">
                                Sports&nbsp; LIVE
                            </div>
                            <div className="news-tab-headline">
                                India lifts the Thomas Cup Trophy for the first
                                time in history
                            </div>
                        </div>
                        <div className="news-tab">
                            <div className="news-tab-header">
                                India National News&nbsp; LIVE
                            </div>
                            <div className="news-tab-headline">
                                SC to hear plea on Gyanvapi mosque complex
                                survey
                            </div>
                        </div>
                        <div className="news-tab">
                            <div className="news-tab-header">
                                Politics&nbsp; Trending
                            </div>
                            <div className="news-tab-headline">
                                #KarachiBlast
                            </div>
                        </div>
                        <div className="news-tab">
                            <div className="news-tab-header">
                                Technology&nbsp; Trending
                            </div>
                            <div className="news-tab-headline">
                                #TwitterExposed
                            </div>
                        </div>
                        <div className="whats-happening-footer">Show more</div>
                    </div>
                    <div className="who-to-follow-div">
                        <h1 className="right-side-bar-heading">
                            Who to follow
                        </h1>
                        {user._id !== '62835493292a12c7c9c14ae6' ? (
                            <div className="news-tab person-tab">
                                <Avatar
                                    name="Niket"
                                    onClick={() =>
                                        handleClick('62835493292a12c7c9c14ae6')
                                    }
                                ></Avatar>
                                <div
                                    className="person-name-div"
                                    onClick={() =>
                                        handleClick('62835493292a12c7c9c14ae6')
                                    }
                                >
                                    <p className="person-name">Niket Bahety</p>
                                    <p className="person-username">
                                        @NiketBahety
                                    </p>
                                </div>
                                <Button
                                    text={
                                        followState1 === true
                                            ? 'Following'
                                            : 'Follow'
                                    }
                                    px="20"
                                    py="7"
                                    fontSize="15px"
                                    fill={
                                        followState1 === true
                                            ? 'transparent'
                                            : 'white'
                                    }
                                    color={
                                        followState1 === true
                                            ? 'white'
                                            : 'black'
                                    }
                                    border={
                                        followState1 === true
                                            ? '1px solid grey'
                                            : 'none'
                                    }
                                    hoverFill={
                                        followState1 === true
                                            ? 'rgba(255, 0, 0, 0.1)'
                                            : 'rgb(215,219,220)'
                                    }
                                    hoverColor={
                                        followState1 === true ? 'red' : 'black'
                                    }
                                    hoverBorder={
                                        followState1 === true
                                            ? '1px solid red'
                                            : 'none'
                                    }
                                    hoverText={
                                        followState1 === true
                                            ? 'Unfollow'
                                            : 'Follow'
                                    }
                                    clickFn={() =>
                                        handleFollow('62835493292a12c7c9c14ae6')
                                    }
                                ></Button>
                            </div>
                        ) : (
                            ''
                        )}
                        {user._id !== '62839e42b7fa56c84e0da245' ? (
                            <div className="news-tab person-tab">
                                <Avatar
                                    name="Rishab"
                                    onClick={() =>
                                        handleClick('62839e42b7fa56c84e0da245')
                                    }
                                ></Avatar>
                                <div
                                    className="person-name-div"
                                    onClick={() =>
                                        handleClick('62839e42b7fa56c84e0da245')
                                    }
                                >
                                    <p className="person-name">Rishab Dugar</p>
                                    <p className="person-username">
                                        @RishabDugar
                                    </p>
                                </div>
                                <Button
                                    text={
                                        followState2 === true
                                            ? 'Following'
                                            : 'Follow'
                                    }
                                    px="20"
                                    py="7"
                                    fontSize="15px"
                                    fill={
                                        followState2 === true
                                            ? 'transparent'
                                            : 'white'
                                    }
                                    color={
                                        followState2 === true
                                            ? 'white'
                                            : 'black'
                                    }
                                    border={
                                        followState2 === true
                                            ? '1px solid grey'
                                            : 'none'
                                    }
                                    hoverFill={
                                        followState2 === true
                                            ? 'rgba(255, 0, 0, 0.1)'
                                            : 'rgb(215,219,220)'
                                    }
                                    hoverColor={
                                        followState2 === true ? 'red' : 'black'
                                    }
                                    hoverBorder={
                                        followState2 === true
                                            ? '1px solid red'
                                            : 'none'
                                    }
                                    hoverText={
                                        followState2 === true
                                            ? 'Unfollow'
                                            : 'Follow'
                                    }
                                    clickFn={() =>
                                        handleFollow('62839e42b7fa56c84e0da245')
                                    }
                                ></Button>
                            </div>
                        ) : (
                            ''
                        )}
                        {user._id !== '6284f922e6406db3364ee993' ? (
                            <div className="news-tab person-tab">
                                <Avatar
                                    name="Naman"
                                    onClick={() =>
                                        handleClick('6284f922e6406db3364ee993')
                                    }
                                ></Avatar>
                                <div
                                    className="person-name-div"
                                    onClick={() =>
                                        handleClick('6284f922e6406db3364ee993')
                                    }
                                >
                                    <p className="person-name">Naman Kandoi</p>
                                    <p className="person-username">
                                        @NamanKandoi
                                    </p>
                                </div>
                                <Button
                                    text={
                                        followState3 === true
                                            ? 'Following'
                                            : 'Follow'
                                    }
                                    px="20"
                                    py="7"
                                    fontSize="15px"
                                    fill={
                                        followState3 === true
                                            ? 'transparent'
                                            : 'white'
                                    }
                                    color={
                                        followState3 === true
                                            ? 'white'
                                            : 'black'
                                    }
                                    border={
                                        followState3 === true
                                            ? '1px solid grey'
                                            : 'none'
                                    }
                                    hoverFill={
                                        followState3 === true
                                            ? 'rgba(255, 0, 0, 0.1)'
                                            : 'rgb(215,219,220)'
                                    }
                                    hoverColor={
                                        followState3 === true ? 'red' : 'black'
                                    }
                                    hoverBorder={
                                        followState3 === true
                                            ? '1px solid red'
                                            : 'none'
                                    }
                                    hoverText={
                                        followState3 === true
                                            ? 'Unfollow'
                                            : 'Follow'
                                    }
                                    clickFn={() =>
                                        handleFollow('6284f922e6406db3364ee993')
                                    }
                                ></Button>
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                    <div className="footer-div">
                        <span>Terms of Service</span>
                        <span>Privacy Policy</span>
                        <span>Cookie Policy</span>
                        <span>Accessibility</span>
                        <span>Ads info</span>
                        <span>More ...</span>
                        <span>&copy; 2022 Twitter, Inc.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSideBar;
