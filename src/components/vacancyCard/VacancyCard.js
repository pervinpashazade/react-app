import React from 'react'
import './vacancyCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark as faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faBookmark as faBookmarked, faEye } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

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
        currency,
        minSalary,
        maxSalary,
        minExperience,
        maxExperience,
    } = props;

    let salary = "";

    const getSalary = () => {
        if (minSalary && maxSalary) {
            salary = minSalary + " - " + maxSalary + " ";
        } else if (minSalary && !maxSalary) {
            salary = minSalary
        } else if (!minSalary && maxSalary) {
            salary = maxSalary;
        }

        if (salary && currency) {
            salary += " " + currency
        }

        return salary
    }

    return (
        <div className="vacancy-card">
            <div className="header">
                <h4 className="title">{title}</h4>
                <p className="company">{company}</p>
                <div className="salary">{getSalary()}</div>
                <span className="icons">
                    <FontAwesomeIcon className="icon" icon={isBookmarked ? faBookmarked : faBookmark} />
                </span>

            </div>
            <div className="body">
                <ul>
                    <li>- {position}</li>
                    <li>- {city}</li>
                </ul>
            </div>
            <div className="footer">
                <div className="views">
                    <FontAwesomeIcon className="icon" style={requested ? {color: "#888cb7"} : ""} icon={faEye} />
                    <span>{viewsCount}</span>
                </div>
                <div className="read-more">
                    <Link className="link" to="/public">Read more</Link>
                </div>
            </div>
        </div>
    )
}

export default VacancyCard;