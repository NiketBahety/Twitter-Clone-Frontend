import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';
import Icon from '../../components/Icon/Icon';
import Avatar from '../../components/Avatar/Avatar';
import Button from '../../components/Button/Button';
import Tweet from '../../components/Tweet/Tweet';
import { getAllTweets, postComment } from '../../redux/actions/tweetActions';

import './tweetDetails.css';
import { toast } from 'react-toastify';

const TweetDetails = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const user = JSON.parse(localStorage.getItem('Profile'));
    const [comment, setComment] = useState('');

    let tweetsList = useSelector((state) => state.tweetReducer);

    if (tweetsList.length === 0) {
        dispatch(getAllTweets());
    }

    let tweet = tweetsList.filter((a) => a._id === id)[0];

    useEffect(() => {
        dispatch(getAllTweets());
    }, [tweet]);

    const handlePostComment = () => {
        if (comment === '') toast.error('Comment cannot be empty !!');
        else {
            dispatch(postComment({ tweet: comment }, tweet._id));
            setComment('');
            toast.success('Comment added !!');
        }
    };

    const handleSelfClick = () => {
        const navLink = '/users/' + user._id;
        navigate(navLink);
    };

    const handleOthersClick = () => {
        const navLink = '/users/' + tweet.postedBy._id;
        navigate(navLink);
    };

    return (
        <div className="tweet-details-page">
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
                    <h2>Tweet</h2>
                </div>
            </div>
            <div className="tweet-details">
                <div
                    className="news-tab person-tab"
                    onClick={handleOthersClick}
                >
                    <Avatar name={tweet?.postedBy?.name || '?'}></Avatar>
                    <div className="person-name-div">
                        <p className="person-name">{tweet?.postedBy?.name}</p>
                        <p className="person-username">
                            @{tweet?.postedBy?.username}
                        </p>
                    </div>
                    {user._id !== tweet?.postedBy?._id ? (
                        <Button
                            text="Follow"
                            px="20"
                            py="7"
                            fontSize="15px"
                            hoverFill="rgb(215,219,220)"
                        ></Button>
                    ) : (
                        ''
                    )}
                </div>
                <div className="tweet-details-contents">{tweet?.tweet}</div>
                <img src={tweet?.image} alt="" />
                <div className="tweet-details-time">
                    {moment(tweet?.postedOn).format('hh:mm a')} &#183;{' '}
                    {moment(tweet?.postedOn).format('LL')}
                </div>
            </div>
            <div className="tweet-action-details">
                <div>
                    {tweet?.retweets.length} <span>Retweets</span>
                </div>
                <div>
                    {tweet?.likes.length} <span>Likes</span>
                </div>
            </div>
            <div className="create-tweet create-comment">
                <div className="create-tweet-first-div">
                    <Avatar name={user.name} onClick={handleSelfClick}></Avatar>
                    <textarea
                        className="tweet-textarea"
                        placeholder="Tweet your reply"
                        onChange={(e) => setComment(e.target.value)}
                        value={comment}
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
                            text="mood"
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
                        text="Reply"
                        fill="#1d9bf0"
                        px="20"
                        py="10"
                        fontSize="16px"
                        hoverFill="#1a8cd8"
                        color="white"
                        clickFn={handlePostComment}
                    ></Button>
                </div>
            </div>
            {tweet?.comments.map((comment) => {
                return <Tweet key={comment._id} tweet={comment}></Tweet>;
            })}
        </div>
    );
};

export default TweetDetails;
