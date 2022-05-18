import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Icon from '../Icon/Icon';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import TweetsList from './TweetsList';
import { getAllTweets, postTweet } from '../../redux/actions/tweetActions';

import './homemainbar.css';
import { toast } from 'react-toastify';

const HomeMainBar = (props) => {
    const user = props.user;
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [tweet, setTweet] = useState('');
    let tweetsList;

    const handleTweetClick = (e) => {
        if (tweet === '') toast.error('Tweet cannot be empty');
        else {
            dispatch(postTweet({ tweet }));
            setTweet('');
        }
    };

    const handleClick = () => {
        const navLink = '/users/' + user._id;
        navigate(navLink);
    };

    useEffect(() => {
        const tweetTextarea =
            document.getElementsByClassName('tweet-textarea')[0];
        tweetTextarea.style.height = tweetTextarea.scrollHeight + 'px';
        if (tweet == '') tweetTextarea.style.height = 'auto';

        dispatch(getAllTweets());
    }, [tweet, location, dispatch]);

    tweetsList = useSelector((state) => state.tweetReducer);

    if (!tweetsList) tweetsList = [];

    return (
        <div className="home-main-bar">
            <div className="home-bar-navbar">
                <h2>Home</h2>
                <Icon
                    text="auto_awesome"
                    fontSize="20px"
                    width="40px"
                    height="40px"
                ></Icon>
            </div>
            <div className="create-tweet">
                <div className="create-tweet-first-div">
                    <Avatar name={user.name} onClick={handleClick}></Avatar>
                    <textarea
                        className="tweet-textarea"
                        placeholder="What's happening ?"
                        onChange={(e) => setTweet(e.target.value)}
                        value={tweet}
                    ></textarea>
                </div>
                <div className="create-tweet-second-div">
                    <div className="create-tweet-second-div-icons">
                        <Icon
                            text="crop_original"
                            fontSize="18px"
                            width="35px"
                            height="35px"
                            color="#1d9bf0"
                            hoverFill="#031e30"
                        ></Icon>
                        <Icon
                            text="gif_box"
                            fontSize="18px"
                            width="35px"
                            height="35px"
                            color="#1d9bf0"
                            hoverFill="#031e30"
                        ></Icon>
                        <Icon
                            text="leaderboard"
                            fontSize="18px"
                            width="35px"
                            height="35px"
                            color="#1d9bf0"
                            hoverFill="#031e30"
                        ></Icon>
                        <Icon
                            text="mood"
                            fontSize="18px"
                            width="35px"
                            height="35px"
                            color="#1d9bf0"
                            hoverFill="#031e30"
                        ></Icon>
                        <Icon
                            text="event"
                            fontSize="18px"
                            width="35px"
                            height="35px"
                            color="#1d9bf0"
                            hoverFill="#031e30"
                        ></Icon>
                        <Icon
                            text="pin_drop"
                            fontSize="18px"
                            width="35px"
                            height="35px"
                            color="#1d9bf0"
                            hoverFill="#031e30"
                        ></Icon>
                    </div>
                    <Button
                        text="Tweet"
                        fill="#1d9bf0"
                        px="20"
                        py="10"
                        fontSize="16px"
                        hoverFill="#1a8cd8"
                        color="white"
                        clickFn={handleTweetClick}
                    ></Button>
                </div>
            </div>
            <div className="tweets-cont">
                <TweetsList tweetsList={tweetsList}></TweetsList>
            </div>
        </div>
    );
};

export default HomeMainBar;
