import React from 'react'
import VacancyCard from '../../components/vacancyCard/VacancyCard'
import './vacancies.css'

const Vacancies = () => {
    return (
        <div className="row">
            <div className="col-md-6">
                <VacancyCard 
                    id={1}
                    isVip={true}
                    status={1}
                    viewsCount={1}
                    isBookmarked={1}
                    createdAt={null}
                    expiredAt={null}
                    canRequest={1}
                    requested={1}
                    title={"İKT"}
                    company={"PRONET"}
                    position={"IT mütəxəssis"}
                    city={"Ağdaş"}
                    salary={null}
                    currency={"AZN"}
                    minSalary={null}
                    maxSalary={null}
                    minExperience={null}
                    maxExperience={null}
                />
            </div>
        </div>
    )
}

export default Vacancies