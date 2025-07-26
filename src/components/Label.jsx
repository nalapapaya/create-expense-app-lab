//reusable

import React from 'react';

const Label = (props) => {
    return (
        <label htmlFor={props.htmlFor} className="input">
            {props.children}
        </label>
    );
};

export default Label;