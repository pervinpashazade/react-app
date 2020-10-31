import React from 'react'

const ProgressBar = (props) => {
    const { maxValue, completed, bgcolor } = props;

    const resultPercent = (completed / maxValue) * 100;

    const containerStyles = {
        height: 5,
        width: '100%',
        borderRadius: 2,
        backgroundColor: "#e0e0de",
        marginTop: 3,
    }

    const fillerStyles = {
        height: '100%',
        width: `${resultPercent}%`,
        maxWidth: '100%',
        background: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right'
    }

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}></div>
        </div>
    );
};

export default ProgressBar;