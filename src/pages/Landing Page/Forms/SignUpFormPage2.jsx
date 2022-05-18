import React from 'react';
import Button from '../../../components/Button/Button';
import './forms.css';

const SignupFormPage2 = (props) => {
    return (
        <div>
            <input
                type="text"
                placeholder="Username"
                required
                value={props.formData.username}
                onChange={(e) =>
                    props.setFormData({
                        ...props.formData,
                        username: e.target.value,
                    })
                }
            />
            <input
                type="text"
                placeholder="Describe yourself"
                required
                value={props.formData.aboutMe}
                onChange={(e) =>
                    props.setFormData({
                        ...props.formData,
                        aboutMe: e.target.value,
                    })
                }
            />
            <div className="landing-page-form-footer">
                <Button
                    text="Create an account"
                    fill="white"
                    color="black"
                    px="70"
                    py="15"
                    my="0"
                    hoverFill="#d7dbdc"
                    fontSize="20px"
                    type="submit"
                ></Button>
            </div>
        </div>
    );
};

export default SignupFormPage2;
