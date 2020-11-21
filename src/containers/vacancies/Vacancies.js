import React, { useState, useEffect } from 'react'
import VacancyCardSkeleton from '../../components/skeletons/VacancyCardSkeleton'
import VacancyCard from '../../components/vacancyCard/VacancyCard'
import { VacancyContext } from '../../context/Context'
import './vacancies.css'
import { Link } from 'react-router-dom'

const Vacancies = (props) => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        const timing = setTimeout(() => {
            setLoading(false);
        }, 500);
        return () => clearTimeout(timing);
    }, [])

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
                        {loading && <VacancyCardSkeleton />}
                        <div className="row mt-4">
                            {!loading && renderMapItems(value)}
                        </div>
                    </section>
                )
            }}

        </VacancyContext.Consumer>
    )
}

export default Vacancies