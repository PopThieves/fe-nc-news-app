import React from 'react';

const ErrorDisplay = (props) => {
    return (
        <div>
            <p>
                Error! Code:{props.status}, {props.msg}
            </p>
        </div>
    );
};


export default ErrorDisplay;