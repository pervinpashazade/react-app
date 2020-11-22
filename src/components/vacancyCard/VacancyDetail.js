import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './vacancyDetail.css'
import VacancyCardSkeleton from '../skeletons/VacancyCardSkeleton'
import Moment from 'react-moment';

const VacancyDetail = (props) => {

    const { vacancyId } = useParams()
    const [vacancy, setVacancy] = useState([]);
    const [loading, setLoading] = useState(false)
    const url = 'https://devjobscore.prospectsmb.com/v1/vacancies/' + vacancyId;


    const {
        name,
        sector,
        category,
        city,
        companyName,
        position,
        email,
        phoneNumber,
        website,
        workGraphic,
        minSalary,
        maxSalary,
        currency,
        createdAt,
        expiredAt,
        fromAge,
        toAge,
        education,
        description,
        requirements,
        minExperience,
        maxExperience
    } = vacancy

    useEffect(() => {
        async function getData() {
            setLoading(true);

            const request = await axios.get(url)
            setVacancy(request.data.data)

            setLoading(false);

            return request
        }
        getData()
    }, [url])

    console.log(props)

    let salary = "";
    let dateText = "";
    let ageText = "";
    let experienceText = "";


    const getSalary = () => {
        if (minSalary && maxSalary) {
            salary = minSalary + " - " + maxSalary + " ";
        } else if (minSalary && !maxSalary) {
            salary = minSalary
        } else if (!minSalary && maxSalary) {
            salary = maxSalary;
        } else if (!minSalary && !maxSalary) {
            salary = "Not mentioned"
        }

        if (salary && salary !== "Not mentioned" && currency) {
            salary = salary + " " + currency.name
        }



        return salary
    }

    function renderDate() {
        let expireDate = new Date(expiredAt)
        let currentDate = new Date()

        if (currentDate > expireDate) {
            dateText = <span className="text-danger">Expired: </span>
        } else {
            dateText = "Expire: "
        }

        return dateText;
    }

    const renderAge = () => {
        if (fromAge && toAge) {
            ageText = fromAge + "-" + toAge;
        } else if (fromAge && !toAge) {
            ageText = "minimum " + fromAge
        } else if (!fromAge && toAge) {
            ageText = "maximum " + toAge;
        } else if (!fromAge && !toAge) {
            ageText = "Not mentioned"
        }
        return ageText
    }

    const getExperience = () => {
        if (minExperience > 0 && maxExperience > 0) {
            experienceText = minExperience + "~" + maxExperience + " year"
        } else if (!minExperience && maxExperience > 0) {
            experienceText = maxExperience + " year"
        } else if (minExperience > 0 && !maxExperience) {
            experienceText = minExperience + " year"
        }

        return experienceText;
    }

    return (
        <div className="container">
            {loading && <VacancyCardSkeleton />}
            {!loading && <div className="row mt-4 bg-white-radius">
                <div className="col-md-5">
                    <div className="leftside">
                        <h3>{name}</h3>
                        <ul className="list-details">
                            <li><h4>{companyName}</h4></li>
                            {email ? <li><h6>{email}</h6></li> : null}
                            {phoneNumber ? <li><h6>{phoneNumber}</h6></li> : null}
                            {website ? <li><h6>{website}</h6></li> : null}

                        </ul>

                        <ul>
                            {position ? <li>
                                <div>Position:</div>
                                <div>{position.name}</div>
                            </li> : null}
                            {getSalary() ? <li>
                                <div>Salary:</div>
                                <div>{getSalary()}</div>
                            </li> : null}

                            {sector ? <li>
                                <div>Sector:</div>
                                <div>{sector.name}</div>
                            </li> : null}

                            {category ? <li>
                                <div>Category:</div>
                                <div>{category.name}</div>
                            </li> : null}

                            {workGraphic ? <li>
                                <div>Graphic:</div>
                                <div>{workGraphic.name}</div>
                            </li> : null}
                            {city ? <li>
                                <div>City:</div>
                                <div>{city.name}</div>
                            </li> : null}
                            {createdAt ? <li>
                                <div>Date:</div>
                                <div>
                                    <Moment fromNow >
                                        {createdAt}
                                    </Moment>
                                </div>
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
                </div>
                <div className="col-md-6">
                    <div className="rightside">
                        <h5>Requirements</h5>
                        <ul className="requirements">
                            {renderAge() ? <li>
                                <div>- Age :</div>
                                <div>{renderAge()}</div>
                            </li> : null}
                            {education ? <li>
                                <div>- Education :</div>
                                <div>{education.name}</div>
                            </li> : null}
                            {description ? <li>
                                <div>- Description :</div>
                                <div>{description}</div>
                            </li> : null}
                            {requirements ? <li>
                                <div>- Personal requirements :</div>
                                <div>{requirements}</div>
                            </li> : null}
                            {getExperience() ? <li>
                                <div>- Experience :</div>
                                <div>{getExperience()}</div>
                            </li> : null}
                        </ul>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default VacancyDetail;