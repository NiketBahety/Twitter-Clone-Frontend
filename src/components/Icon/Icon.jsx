import { React, useState } from 'react';
import './icon.css';

const Icon = (props) => {
    let [hover, setHover] = useState(false);
    let fill = hover === false ? props.fill || 'transparent' : props.hoverFill;
    let color =
        hover === false
            ? props.color || 'white'
            : props.hoverColor || props.color || 'white';

    const toggleHover = () => {
        setHover(!hover);
    };

    return (
        <span
            style={{
                backgroundColor: fill,
                color: color,
                fontSize: props.fontSize || '28px',
                width: props.width || '50px',
                height: props.height || '50px',
            }}
            className="material-icons"
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            onClick={props.onClick}
        >
            {props.text}
        </span>
    );
};

export default Icon;
