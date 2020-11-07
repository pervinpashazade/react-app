import React from 'react'
import './smallText.css'
import ActionLink from '../actionLink/ActionLink'


const SmallText = (props) => {

    const {
        text,
        textPosition,
        textStyle,
        showActionLink,
        hrefActionLink,
        textActionLink
    } = props;

    const TextPositions = [
        "text-left",
        "text-center",
        "text-right",
    ]

    const TextStyles = [
        "text-danger",
        "text-success",
        "text-warning",
    ]

    const checkTextPosition = TextPositions.includes(textPosition) ? textPosition : "";
    const checkStyle = TextStyles.includes(textStyle) ? textStyle : "";

    return (
        <small className={checkTextPosition + " " + checkStyle}>
            {(!text ? "" : text)}
            {showActionLink === true ? <ActionLink text={!textActionLink ? "" : textActionLink}
                link={!hrefActionLink ? "#0" : hrefActionLink} /> : ""}
        </small>
    )

}

export default SmallText;