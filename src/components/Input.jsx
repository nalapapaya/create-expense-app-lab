//resuable

import React from 'react';

const Input = (props) => {
    return (
        <input type={props.type}
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        />
    );
};

export default Input;