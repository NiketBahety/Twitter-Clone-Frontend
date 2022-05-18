import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import copy from 'copy-to-clipboard';
import Avatar from '../Avatar/Avatar';
import Icon from '../Icon/Icon';
import moment from 'moment';
import './tweet.css';
import { deleteTweet, retweet } from '../../redux/actions/tweetActions';
import { like } from '../../redux/actions/tweetActions';
import { toast } from 'react-toastify';

const Tweet = (props) => {
    const tweet = props.tweet;
    let retweetSet = false;
    let retweetStyle = {};
    let likeSet = false;
    let likeStyle = {};
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem('Profile'));
    if (tweet.retweets.includes(user._id)) {
        retweetSet = true;
        retweetStyle = { color: '#00ba7c' };
    }

    if (tweet.likes.includes(user._id)) {
        likeSet = true;
        likeStyle = { color: '#f91880' };
    }

    const handleRetweet = () => {
        dispatch(retweet(tweet._id));
    };

    const handleLike = () => {
        dispatch(like(tweet._id));
    };

    const handleClickForTweetDetails = (e) => {
        const navLink = '/tweet/' + tweet._id;
        navigate(navLink);
    };

    const handleShare = () => {
        const navLink = window.location.origin + '/tweet/' + tweet._id;
        copy(navLink);
        toast.success('Link copied to clipboard !');
    };

    const handleClick = () => {
        const navLink = '/users/' + tweet.postedBy._id;
        navigate(navLink);
    };

    const handleDelete = () => {
        dispatch(deleteTweet(tweet._id));
    };

    return (
        <div className="tweet-comp">
            <div className="avatar-cont">
                <Avatar
                    name={tweet.postedBy.name || '?'}
                    onClick={handleClick}
                ></Avatar>
            </div>
            <div className="tweet-right-cont">
                <div className="tweeter-name">
                    <div className="tweeter-name-names" onClick={handleClick}>
                        <span>{tweet.postedBy.name}</span>
                        <span className="username">
                            @{tweet.postedBy.username}
                        </span>
                        <span className="time">
                            {moment(tweet.postedOn).fromNow()}
                        </span>
                    </div>
                    {user._id === tweet.postedBy._id ? (
                        <Icon
                            text="delete"
                            width="30px"
                            height="30px"
                            fontSize="18px"
                            color="#71767b"
                            hoverFill="#031e30"
                            onClick={handleDelete}
                        ></Icon>
                    ) : (
                        ''
                    )}
                </div>
                <div
                    className="tweet-content"
                    onClick={handleClickForTweetDetails}
                >
                    {tweet.tweet}
                </div>
                <div className="tweet-actions">
                    <div
                        className="comment"
                        onClick={handleClickForTweetDetails}
                    >
                        <Icon
                            text="chat_bubble"
                            width="35px"
                            height="35px"
                            fontSize="20px"
                            color="#71767b"
                            hoverFill="#031e30"
                            hoverColor="#1d9bf0"
                        ></Icon>
                        <span>{tweet.comments.length}</span>
                    </div>
                    <div className="retweet" onClick={handleRetweet}>
                        <Icon
                            text="sync"
                            width="35px"
                            height="35px"
                            fontSize="20px"
                            color={retweetSet === false ? '#71767b' : '#00ba7c'}
                            hoverFill="#003322"
                            hoverColor="#00ba7c"
                        ></Icon>
                        <span style={retweetStyle}>
                            {tweet.retweets.length}
                        </span>
                    </div>
                    <div className="like" onClick={handleLike}>
                        <Icon
                            text="favorite"
                            width="35px"
                            height="35px"
                            fontSize="20px"
                            color={likeSet === false ? '#71767b' : '#f91880'}
                            hoverFill="#320118"
                            hoverColor="#f91880"
                        ></Icon>
                        <span style={likeStyle}>{tweet.likes.length}</span>
                    </div>
                    <div className="share" onClick={handleShare}>
                        <Icon
                            text="file_upload"
                            width="35px"
                            height="35px"
                            fontSize="20px"
                            color="#71767b"
                            hoverFill="#031e30"
                            hoverColor="#1d9bf0"
                        ></Icon>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tweet;
