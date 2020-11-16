import Axios from 'axios'
// import useSWR from 'swr'
import React, { useState, useEffect, useMemo } from 'react'
import VacancyCardSkeleton from '../../components/skeletons/VacancyCardSkeleton'
import VacancyCard from '../../components/vacancyCard/VacancyCard'
import { VacancyContext } from '../../context/Context'
import './vacancies.css'

const Vacancies = () => {

    // const {data} = useSWR('https://devjobscore.prospectsmb.com/v1/vacancies')

    const [vacancies, setVacancies] = useState([])
    const [loading, setLoading] = useState(false)
    const providerValue = useMemo(() => ({ vacancies, setVacancies }), [vacancies, setVacancies])

    const notRendered = !vacancies || (vacancies && vacancies.length === 0)

    const getAllVacancies = async () => {

        if (!vacancies || (vacancies && vacancies.length === 0)) {
            const response = await Axios.get('https://devjobscore.prospectsmb.com/v1/vacancies')
                .catch(err => console.log("Api Error", err))

            if (response && response.data) setVacancies(response.data.data)
        }
    }

    useEffect(() => {
        setLoading(true);
        const timing = setTimeout(() => {
            getAllVacancies();
            setLoading(false);
        }, 2200);
        return () => clearTimeout(timing);
    }, [])

    return (
        <VacancyContext.Provider value={providerValue}>


            {loading && <VacancyCardSkeleton />}
            <div className="row mt-4">
                {!loading && vacancies.map((vacancy, index) => {
                    return (
                        <div key={index} className="col-md-6">
                            <VacancyCard
                                id={vacancy.id}
                                isVip={vacancy.isVip}
                                status={vacancy.status}
                                viewsCount={vacancy.viewsCount}
                                isBookmarked={vacancy.bookmarked}
                                createdAt={vacancy.createdAt}
                                expiredAt={vacancy.expiredAt}
                                canRequest={vacancy.canRequest}
                                requested={vacancy.requested}
                                title={vacancy.name}
                                company={vacancy.companyName}
                                position={vacancy.position.name}
                                city={vacancy.city.name}
                                salary={vacancy.salary}
                                currency={!vacancy.currency ? "" : vacancy.currency.name}
                                minSalary={vacancy.minSalary}
                                maxSalary={vacancy.maxSalary}
                                minExperience={vacancy.minExpirience}
                                maxExperience={vacancy.maxExpirience}
                            />
                        </div>
                    )
                })}
            </div>

        </VacancyContext.Provider>
    )
}

export default Vacancies