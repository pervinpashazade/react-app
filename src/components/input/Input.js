import React from 'react'
import './input.css'


const Input = (props) => {

    const {
        type,
        value,
        placeholder,
        name,
        inputId,
        isDisabled,
        inputSize,
        inputDisplay
    } = props;


    const Sizes = [
        "input-medium",
        "input-small",
        "input-large",
    ]

    const Displays = [
        "btn-custom-inline",
        "btn-custom-block"
    ]

    const checkSize = Sizes.includes(inputSize) ? inputSize : "";
    const checkDisplay = Displays.includes(inputDisplay) ? inputDisplay : "";

    return (
        <input type={type} name={name} id={inputId}
            className={'input ' + checkSize + checkDisplay}
            disabled={isDisabled === true} placeholder={placeholder} value={!value ? value : ""} />
    )

}

export default Input;