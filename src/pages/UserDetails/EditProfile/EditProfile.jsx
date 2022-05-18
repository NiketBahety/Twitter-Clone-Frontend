import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../../components/Button/Button';
import Icon from '../../../components/Icon/Icon';
import { editProfile } from '../../../redux/actions/userActions';
import './editProfile.css';

const EditProfile = () => {
    const user = JSON.parse(localStorage.getItem('Profile'));
    const [name, setName] = useState(user.name);
    const [about, setAbout] = useState(user.aboutMe);
    const dispatch = useDispatch();

    const handleClose = () => {
        setName(user.name);
        setAbout(user.aboutMe);
        let editForm = document.getElementsByClassName('edit-profile-div')[0];
        editForm.style.display = 'none';
    };

    const handleSave = () => {
        dispatch(editProfile({ name, aboutMe: about }));
        setName(user.name);
        setAbout(user.aboutMe);
        let editForm = document.getElementsByClassName('edit-profile-div')[0];
        editForm.style.display = 'none';
    };

    return (
        <div className="edit-profile-div">
            <div className="edit-profile-form-cont">
                <div className="btns-cont">
                    <Icon text="close" onClick={handleClose}></Icon>
                    <Button
                        text="Save"
                        px="30"
                        py="10"
                        hoverFill="rgb(215,219,220)"
                        clickFn={handleSave}
                    ></Button>
                </div>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="Describe yourself"
                    value={about}
                    onChange={(e) => {
                        setAbout(e.target.value);
                    }}
                />
            </div>
        </div>
    );
};

export default EditProfile;
