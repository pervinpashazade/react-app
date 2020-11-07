import React from 'react'
import './smallText.css'


const SmallText = (props) => {

    const {
        text,
        textPosition,
        // ChildElement
    } = props;

    const TextPositions = [
        "text-left",
        "text-center",
        "text-right",
    ]

    const checkTextPosition = TextPositions.includes(textPosition) ? textPosition : "";


    return (
        <small className={checkTextPosition}>{(!text ? "" : text)}</small>
    )

}

export default SmallText;