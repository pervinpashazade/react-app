import React from 'react'

const VacancyCard = (props) => {

    const {
        id,
        isVip,
        status,
        viewsCount,
        isBookmarked,
        createdAt,
        expiredAt,
        canRequest,
        requested,
        title,
        company,
        position,
        city,
        salary,
        currency,
        minSalary,
        maxSalary,
        minExperience,
        maxExperience,
    } = props;

    return (
        <div className="vacancy-card">
            <div className="card-header">
                <h3 className="title">{title}</h3>
                <p className="company">{company}</p>
                <p className="salary">{salary}</p>
            </div>
            <div className="card-body">
                <ul className="requirements">
                    <li>a</li>
                    <li>a</li>
                    <li>a</li>
                    <li>a</li>
                </ul>
            </div>
            <div className="card-footer"></div>
        </div>
    )
}

export default VacancyCard;