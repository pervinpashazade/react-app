import React from 'react'

const VacancyDetail = (data) => {

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
        maxExperience
    } = data

console.log(city)

    return (
        <div>
            okokok
        </div>
    )
}

export default VacancyDetail;