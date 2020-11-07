import React from 'react'
import './submitBtn.css'

const SubmitBtn = (props) => {

    const { text, isDisabled } = props;



    return (
        <button type="submit" disabled={isDisabled === true} className="btn btn-submit">
            {!text ? "Submit" : text}
        </button>
    )
}

export default SubmitBtn;