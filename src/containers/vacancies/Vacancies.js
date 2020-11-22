import React from 'react'
import VacancyCard from '../../components/vacancyCard/VacancyCard'
import { VacancyContext } from '../../context/Context'
import './vacancies.css'
import { Link } from 'react-router-dom'

const Vacancies = () => {

    function renderMapItems(value) {
        return (
            value.map((item, index) => {
                return (
                    <div key={index} className="col-md-6">
                        <Link to={{ pathname: '/vacancy/' + item.id, vacancyProps: item }}>
                            <VacancyCard item={item} />
                        </Link>
                    </div>
                )
            })
        )
    }

    return (
        <VacancyContext.Consumer>
            {(value) => {
                return (
                    <section>
                        <div className="row mt-4">
                            {renderMapItems(value)}
                        </div>
                    </section>
                )
            }}

        </VacancyContext.Consumer>
    )
}

export default Vacancies