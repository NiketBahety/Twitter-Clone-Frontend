import * as api from '../API/index';
import { toast } from 'react-toastify';

export const getAllTweets = () => async (dispatch) => {
    try {
        const res = await api.getAllTweets();
        dispatch({ type: 'GET_ALL', data: res });
    } catch (err) {
        console.log(err);
    }
};

export const postTweet = (tweetData) => async (dispatch) => {
    try {
        const res = await api.postTweet(tweetData);
        dispatch({ type: 'POST_TWEET', data: res });
        toast.success('Tweet posted succesfully !!');
    } catch (err) {
        console.log(err);
        toast.error('Please try again !');
    }
};

export const retweet = (id) => async (dispatch) => {
    try {
        const res = await api.retweet(id);
        dispatch({ type: 'RETWEET', data: res });
    } catch (err) {
        console.log(err);
        toast.error('Please try again !');
    }
};

export const like = (id) => async (dispatch) => {
    try {
        const res = await api.like(id);
        dispatch({ type: 'LIKE', data: res });
    } catch (err) {
        console.log(err);
        toast.error('Please try again !');
    }
};

export const postComment = (comment, id) => async (dispatch) => {
    try {
        const res = await api.postComment(comment, id);
        dispatch({ type: 'COMMENT', data: { res, id } });
    } catch (err) {
        console.log(err);
        toast.error('Please try again !');
    }
};

export const deleteTweet = (id) => async (dispatch) => {
    try {
        const res = await api.deleteTweet(id);
        dispatch({ type: 'DELETE_TWEET', data: { res, id } });
        toast.success('Tweet deleted succesfully');
    } catch (err) {
        console.log(err);
        toast.error('Please try again !');
    }
};
