import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, NavLink } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Icon from '../../components/Icon/Icon';
import Avatar from '../../components/Avatar/Avatar';
import Button from '../../components/Button/Button';
import Tweet from '../../components/Tweet/Tweet';
import EditProfile from './EditProfile/EditProfile';
import moment from 'moment';
import { getAllUsers, follow } from '../../redux/actions/userActions';
import './userDetails.css';

const UserDetails = () => {
    const userID = useParams().id;
    const dispatch = useDispatch();

    let followState = false;

    let usersList = useSelector((state) => state.userReducer);
    if (usersList.length === 0) {
        dispatch(getAllUsers());
    }
    let user = usersList.filter((a) => a._id === userID)[0];

    useEffect(() => {
        dispatch(getAllUsers());
    }, [followState, dispatch, user]);

    const userTweets = user?.tweets || [];
    const oUser = JSON.parse(localStorage.getItem('Profile'));

    if (user?.followers.includes(oUser._id)) followState = true;

    const handleEditProfile = () => {
        let editForm = document.getElementsByClassName('edit-profile-div')[0];
        editForm.style.display = 'flex';
    };

    const handleFollow = () => {
        followState = !followState;
        dispatch(follow(user?._id));
    };

    return (
        <div className="user-details-page">
            <div className="home-bar-navbar ">
                <div className="tweet-details-navbar">
                    <Link to="/home">
                        <Icon
                            text="arrow_back"
                            fontSize="20px"
                            width="40px"
                            height="40px"
                        ></Icon>
                    </Link>
                    <div className="user-profile-header">
                        <p className="user-profile-header-name">{user?.name}</p>
                        <p className="user-profile-header-tweets">
                            {user?.tweets.length} Tweets
                        </p>
                    </div>
                </div>
            </div>
            <div className="profile-header">
                <Avatar
                    name={user?.name || '?'}
                    width="100px"
                    height="100px"
                    fontSize="70px"
                ></Avatar>
                {user?._id !== oUser._id ? (
                    <Button
                        text={followState === true ? 'Following' : 'Follow'}
                        px="20"
                        py="7"
                        fontSize="15px"
                        fill={followState === true ? 'transparent' : 'white'}
                        color={followState === true ? 'white' : 'black'}
                        border={
                            followState === true ? '1px solid grey' : 'none'
                        }
                        hoverFill={
                            followState === true
                                ? 'rgba(255, 0, 0, 0.1)'
                                : 'rgb(215,219,220)'
                        }
                        hoverColor={followState === true ? 'red' : 'black'}
                        hoverBorder={
                            followState === true ? '1px solid red' : 'none'
                        }
                        hoverText={followState === true ? 'Unfollow' : 'Follow'}
                        clickFn={handleFollow}
                    ></Button>
                ) : (
                    <Button
                        text="Edit Profile"
                        px="20"
                        py="7"
                        fontSize="15px"
                        fill="transparent"
                        color="white"
                        border="1px solid grey"
                        hoverFill="#031e30"
                        clickFn={handleEditProfile}
                    ></Button>
                )}
            </div>
            <div className="profile-details">
                <p className="profile-name">{user?.name}</p>
                <p className="profile-username">@{user?.username}</p>
                <p className="prolie-about">{user?.aboutMe}</p>
                <div className="profile-joined">
                    <Icon
                        text="calendar_month"
                        fontSize="20px"
                        width="40px"
                        height="40px"
                        color="#686c71"
                        hoverFill="transparent"
                    ></Icon>
                    <p>Joined {moment(user?.joinedOn).format('MMM y')}</p>
                </div>
                <div className="profile-follower-info">
                    <p>
                        {user?.following.length} <span>Following</span>
                    </p>
                    <p>
                        {user?.followers.length} <span>Followers</span>
                    </p>
                </div>
            </div>
            <div className="profile-inner-nav">
                <NavLink
                    end
                    to={'/users/' + user?._id}
                    className={({ isActive }) =>
                        isActive
                            ? 'profile-tweets nav-item active'
                            : 'profile-tweets nav-item'
                    }
                >
                    <span>Tweets</span>
                </NavLink>
                <NavLink
                    to={'/users/' + user?._id + '/replies'}
                    className={({ isActive }) =>
                        isActive
                            ? 'profile-tweets-replies nav-item active'
                            : 'profile-tweets-replies nav-item'
                    }
                >
                    <span> Tweets &#38; Replies</span>
                </NavLink>
                <NavLink
                    to={'/users/' + user?._id + '/media'}
                    className={({ isActive }) =>
                        isActive
                            ? 'profile-tweets-replies-media nav-item active'
                            : 'profile-tweets-replies-media nav-item'
                    }
                >
                    <span>Media</span>
                </NavLink>
                <NavLink
                    to={'/users/' + user?._id + '/likes'}
                    className={({ isActive }) =>
                        isActive
                            ? 'profile-tweets-replies-likes nav-item active'
                            : 'profile-tweets-replies-likes nav-item'
                    }
                >
                    <span>Likes</span>
                </NavLink>
            </div>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={
                        <div>
                            {userTweets.map((tweet) => {
                                return (
                                    <Tweet
                                        key={tweet._id}
                                        tweet={tweet}
                                    ></Tweet>
                                );
                            })}
                        </div>
                    }
                ></Route>
                <Route
                    exact
                    path="/media"
                    element={<h1 className="no-route">Maintainence</h1>}
                ></Route>
                <Route
                    exact
                    path="/likes"
                    element={<h1 className="no-route">Maintainence</h1>}
                ></Route>
                <Route
                    exact
                    path="/replies"
                    element={<h1 className="no-route">Maintainence</h1>}
                ></Route>
            </Routes>
            <EditProfile user={user}></EditProfile>
        </div>
    );
};

export default UserDetails;
