import React from 'react'
import './loadingSpinner.css'

function LoadingSpinner() {
    return (
        <div className="spinner-wrap">
            <div class="spinner-border text-primary" role="status"></div>
        </div>
    )
}

export default LoadingSpinner;