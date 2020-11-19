import React from 'react'
import './vacancyCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark as faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faBookmark as faBookmarked, faEye } from '@fortawesome/free-solid-svg-icons'
import Moment from 'react-moment';
import 'moment-timezone';
// import 'moment/locale/az';

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
    let experience = ""
    let dateText = ""

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

    const getExperience = () => {
        if (minExperience > 0 && maxExperience > 0) {
            experience = minExperience + "~" + maxExperience + " year"
        }

        return experience;
    }

    function renderDate() {
        let expireDate = new Date(expiredAt)
        let currentDate = new Date()

        if(currentDate > expireDate){
            dateText = <span className="text-danger">Expired: </span>
        }else{
            dateText = "Expire: "
        }

        return dateText;
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
                    <li>- Position: <span>{position}</span></li>
                    {getExperience() ? <li>- Experience: <span>{getExperience()}</span></li> : null}
                    <li>- City: <span>{city}</span></li>
                    {createdAt ? <li>- {"Date: "}
                        <span>
                            <Moment fromNow >
                                {createdAt}
                            </Moment>
                        </span>
                    </li> : null}
                    {expiredAt ? <li>- {renderDate()}
                        <span>
                            <Moment format="LL" >
                                {expiredAt}
                            </Moment>
                        </span>
                    </li> : null}
                </ul>
            </div>
            <div className="footer">
                <div className="views">
                    <FontAwesomeIcon className="icon" style={requested ? { color: "#888cb7" } : ""} icon={faEye} />
                    <span>{viewsCount}</span>
                </div>
                <div className="read-more">
                    <span className="link" to="/public">Read more</span>
                </div>
            </div>
        </div>
    )
}

export default VacancyCard;