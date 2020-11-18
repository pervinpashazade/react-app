import React, { useState, useEffect, useContext } from 'react'
import VacancyCardSkeleton from '../../components/skeletons/VacancyCardSkeleton'
import VacancyCard from '../../components/vacancyCard/VacancyCard'
import { VacancyContext } from '../../context/Context'
import './vacancies.css'

const Vacancies = (props) => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        const timing = setTimeout(() => {
            setLoading(false);
        }, 900);
        return () => clearTimeout(timing);
    }, [])

    return (
        <VacancyContext.Consumer >
            {(value) => {
                return ( 
                    <section>
                        {loading && <VacancyCardSkeleton />}
                        <div className="row mt-4">
                            {!loading && value.map((item, index) => {
                                return (
                                    <div key={index} className="col-md-6">
                                        <VacancyCard
                                            id={item.id}
                                            isVip={item.isVip}
                                            status={item.status}
                                            viewsCount={item.viewsCount}
                                            isBookmarked={item.bookmarked}
                                            createdAt={item.createdAt}
                                            expiredAt={item.expiredAt}
                                            canRequest={item.canRequest}
                                            requested={item.requested}
                                            title={item.name}
                                            company={item.companyName}
                                            position={item.position.name}
                                            city={item.city.name}
                                            salary={item.salary}
                                            currency={!item.currency ? "" : item.currency.name}
                                            minSalary={item.minSalary}
                                            maxSalary={item.maxSalary}
                                            minExperience={item.minExpirience}
                                            maxExperience={item.maxExpirience}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                )
            }}
            
        </VacancyContext.Consumer>
    )
}

export default Vacancies