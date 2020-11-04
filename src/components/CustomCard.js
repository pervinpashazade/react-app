import React from 'react'
import '../assets/css/customCard.css'
import ProgressBar from './ProgressBar'


const CustomCard = (props) => {

    const {
        totalSummary,
        title,
        label,
        completed,
        currency,
        bgcolor
    } = props;

    return (
        <div className="custom-card">
            <div className="card-header">
                <h2 className="total-summary">{totalSummary}  <sup className="card-currency">{currency}</sup></h2>
                <p className="card-title">{title}</p>
            </div>
            <div className="card-body">
                {/* item */}
                <div className="statistic-item">
                    <div className="title">
                        <span>{label}</span>
                        <span className="item-result">{completed}<sup>{currency}</sup></span>
                    </div>
                    <ProgressBar bgcolor={bgcolor} maxValue={totalSummary} completed={completed} />
                </div>
            </div>
        </div>
    )
}

export default CustomCard;