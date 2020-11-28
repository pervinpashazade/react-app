import React, { useEffect } from 'react'
import VacancyCard from '../../components/vacancyCard/VacancyCard'
// import { VacancyContext } from '../../context/Context'
import './vacancies.css'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { getVacancies } from '../../store/actions/vacancyActions'
import LoadingSpinner from '../../components/loadingSpinner/LoadingSpinner'

const Vacancies = (props) => {

    console.log(props.vacancies)

    useEffect(() => {

        if (props.vacancies.length === 0) {
            props.getVacancies()
        }

    }, [])

    return (

        <section>
            {props.isLoading && <LoadingSpinner />}
            <div className="row mt-4">
                {!props.isLoading && props.vacancies.map((item, index) => {
                    return (
                        <div key={index} className="col-md-6">
                            <Link to={{ pathname: '/vacancy/' + item.id, vacancyProps: item }}>
                                <VacancyCard item={item} />
                            </Link>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

const mapStateToProps = state => {
    // console.log("state", state)
    return {
        vacancies: state.vacancies,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, { getVacancies })(Vacancies);