import * as api from '../API/index';
import { toast } from 'react-toastify';

export const getAllUsers = () => async (dispatch) => {
    try {
        const res = await api.getAllUsers();
        dispatch({ type: 'GET_ALL_USERS', data: res });
    } catch (err) {
        console.log(err);
    }
};

export const editProfile = (profileData) => async (dispatch) => {
    try {
        const res = await api.editProfile(profileData);
        dispatch({ type: 'EDIT_PROFILE', data: res });
        toast.success('Profile Updated !!');
    } catch (err) {
        console.log(err);
    }
};

export const follow = (id) => async (dispatch) => {
    try {
        const res = await api.follow(id);
        dispatch({ type: 'FOLLOW', data: res });
    } catch (err) {
        console.log(err);
    }
};
