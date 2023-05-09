import React from 'react'
import './styles/style.css';

export const PopUp = (props) => {
    return (props.trigger) ? (
        <div className='profile book'>
            {props.children}
            <button onClick={() => props.setTrigger(false)}>
                Close
            </button>
        </div>
    ) : "";
};