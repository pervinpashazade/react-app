import React from 'react'
import './button.css'


const Button = (props) => {

    const {
        text,
        type,
        isDisabled,
        buttonStyle,
        buttonSize,
        buttonDisplay
    } = props;

    const Styles = [
        "btn-custom-primary",
        "btn-custom-success",
        "btn-custom-warning",
        "btn-custom-danger",
        "btn-custom-outline-primary",
        "btn-custom-outline-success",
        "btn-custom-outline-warning",
        "btn-custom-outline-danger"
    ]

    const Sizes = [
        "btn-custom-medium",
        "btn-custom-small",
        "btn-custom-large",
    ]

    const Displays = [
        "btn-custom-inline",
        "btn-custom-block"
    ]

    const checkStyle = Styles.includes(buttonStyle) ? buttonStyle : Styles[0];
    const checkSize = Sizes.includes(buttonSize) ? buttonSize : "";
    const checkDisplay = Displays.includes(buttonDisplay) ? buttonDisplay : "";

    return (
        <button className={'button ' + checkStyle + " " + checkSize + checkDisplay}
            type={type} disabled={isDisabled === true}>
            {!text ? "Submit" : text}
        </button>
    )
}

export default Button;