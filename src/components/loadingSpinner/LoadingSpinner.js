import React from 'react'
import './loadingSpinner.css'

function LoadingSpinner() {
    return (
        <div className="spinner-wrap">
            <div className="spinner-border text-primary" role="status"></div>
        </div>
    )
}

export default LoadingSpinner;