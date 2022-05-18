import React from 'react';
import './Avatar.css';

const Avatar = (props) => {
    return (
        <div
            className="avatar"
            style={{
                width: props.width || '40px',
                height: props.height || '40px',
                backgroundColor: props.fill || '#1d9bf0',
                fontSize: props.fontSize || '16px',
            }}
            onClick={props.onClick}
        >
            {props.name[0].toUpperCase()}
        </div>
    );
};

export default Avatar;
