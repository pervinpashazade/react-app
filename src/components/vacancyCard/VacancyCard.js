import React from 'react'
import './vacancyCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark as faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faBookmark as faBookmarked, faEye } from '@fortawesome/free-solid-svg-icons'
import Moment from 'react-moment';
import 'moment-timezone';

const VacancyCard = (props) => {

    const { item } = props;
    const { 
        name, 
        companyName,
        minSalary,
        maxSalary,
        isBookmarked,
        position,
        minExperience,
        maxExperience,
        createdAt,
        expiredAt,
        city,
        viewsCount,
        currency,
        requested

    } = item

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
            salary += " " + currency.name
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
            dateText = <span className="text-danger">- Expired: </span>
        }else{
            dateText = "- Expire: "
        }

        return dateText;
    }

    return (
        <div className="vacancy-card">
            <div className="header">
                <h4 className="title">{name}</h4>
                <p className="company">{companyName}</p>
                <div className="salary">{getSalary()}</div>
                <span className="icons">
                    <FontAwesomeIcon className="icon" icon={isBookmarked ? faBookmarked : faBookmark} />
                </span>

            </div>
            <div className="body">
                <ul>
                    <li>- Position: <span>{position.name}</span></li>
                    {getExperience() ? <li>- Experience: <span>{getExperience()}</span></li> : null}
                    <li>- City: <span>{city.name}</span></li>
                    {createdAt ? <li>- {"Date: "}
                        <span>
                            <Moment fromNow >
                                {createdAt}
                            </Moment>
                        </span>
                    </li> : null}
                    {expiredAt ? <li>{renderDate()}
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