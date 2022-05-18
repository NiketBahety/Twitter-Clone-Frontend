import * as api from '../API/index';
import { toast } from 'react-toastify';

export const login = (authData, navigate) => async (dispatch) => {
    try {
        console.log(authData);
        const res = await api.login(authData);
        console.log(res);
        dispatch({ type: 'AUTH', data: res });
        toast.success('Successfully logged in !!');
        navigate('/home');
    } catch (err) {
        toast.error('Incorrect email or password !!');
        console.log(err);
    }
};

export const signup = (authData, navigate) => async (dispatch) => {
    try {
        const res = await api.signup(authData);
        dispatch({ type: 'AUTH', data: res });
        toast.success('Successfully logged in !!');
        navigate('/home');
    } catch (err) {
        toast.error('Please try again later !!');
        console.log(err);
    }
};

export const logout = () => async (dispatch) => {
    try {
        const res = await api.logout();
        dispatch({ type: 'LOGOUT', data: res });
        toast.success('Logged out succesfully !');
    } catch (err) {
        console.log(err);
    }
};
