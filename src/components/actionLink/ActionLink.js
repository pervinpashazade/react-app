import React from 'react'
import './actionLink.css'


const ActionLink = (props) => {

    const {
        link,
        text
    } = props;

    return (
         <a href={!link? link : "#0"} className="text-primary">
             {!text ? "" : text}
         </a>
    )

}

export default ActionLink;