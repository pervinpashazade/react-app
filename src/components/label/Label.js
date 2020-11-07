import React from 'react'
import './label.css'


const Label = (props) => {

    const {
        text,
        labelFor,
        labelSize,
        fontWeight
    } = props;


    const Sizes = [
        "label-medium",
        "label-small",
        "label-large",
    ]

    const FontWeights = [
        "label-weight-normal",
        "label-weight-bold"
    ]

    const checkSize = Sizes.includes(labelSize) ? labelSize : "";
    const checkFontWeight = FontWeights.includes(fontWeight) ? fontWeight : "";

    return (
        <label htmlFor={labelFor} className={checkSize + " " + checkFontWeight}>
            {!text ? "" : text}
        </label>
    )

}

export default Label;