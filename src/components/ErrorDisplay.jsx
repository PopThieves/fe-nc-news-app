import React from 'react';

const ErrorDisplay = (props) => {
    return (
        <div>
            <p className='error_message'>
                Error: {props.status}! {props.status_message}
            </p>
        </div>
    );
};


export default ErrorDisplay;