import React from 'react';
import Button from '../../../components/Button/Button';
import './forms.css';

const SignupFormPage1 = (props) => {
    return (
        <div>
            <input
                type="text"
                placeholder="Name"
                required
                value={props.formData.name}
                onChange={(e) =>
                    props.setFormData({
                        ...props.formData,
                        name: e.target.value,
                    })
                }
            />
            <input
                type="email"
                placeholder="Email"
                required
                value={props.formData.email}
                onChange={(e) =>
                    props.setFormData({
                        ...props.formData,
                        email: e.target.value,
                    })
                }
            />
            <input
                type="password"
                placeholder="Password"
                required
                value={props.formData.password}
                onChange={(e) =>
                    props.setFormData({
                        ...props.formData,
                        password: e.target.value,
                    })
                }
            />
            <div className="landing-page-form-footer">
                <Button
                    text="Next"
                    fill="white"
                    color="black"
                    px="70"
                    py="15"
                    my="0"
                    hoverFill="#d7dbdc"
                    fontSize="20px"
                    type="button"
                    clickFn={props.changePage}
                ></Button>
            </div>
        </div>
    );
};

export default SignupFormPage1;
