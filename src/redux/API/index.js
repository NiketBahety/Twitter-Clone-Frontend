import axios from 'axios';

axios.defaults.withCredentials = true;

// const API = axios.create({
//     baseURL: 'http://localhost:5000/api/v1',
// });
const API = axios.create({
    baseURL: 'https://twitter-niket.herokuapp.com/api/v1',
});

export const login = (authData) => API.post('/users/login', authData);
export const signup = (authData) => API.post('/users/signup', authData);

export const getAllTweets = () => API.get('/tweets/getAllTweets');
export const postTweet = (tweetData) =>
    API.post('/tweets/postTweet', tweetData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

export const retweet = (id) => API.patch(`/tweets/retweet/${id}`);
export const like = (id) => API.patch(`/tweets/like/${id}`);

export const deleteTweet = (id) => API.delete(`/tweets/deleteTweet/${id}`);

export const postComment = (comment, id) =>
    API.post(`/tweets/addComment/${id}`, comment);

export const getAllUsers = () => API.get('/users/getAllUsers');
export const logout = () => API.get('/users/logout');
export const editProfile = (profileData) =>
    API.patch('/users/editProfile', profileData);
export const follow = (id) => API.patch(`/users/follow/${id}`);
