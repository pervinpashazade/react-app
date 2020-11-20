import React, { useState, useEffect, useMemo } from 'react'
import Aside from './Aside.js'
import '../../assets/img/profile.png';
import Header from './Header'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import taskCustomCard from '../tasks/taskCustomCard.js';
import TaskClickerCard from '../tasks/TaskClickerCard.js';
import taskComponents from '../tasks/taskComponents.js';
import Home from '../home/Home'
import registerComponent from '../tasks/registerComponent.js';
import Cabinet from '../cabinet/Cabinet';
import { UserContext, VacancyContext } from '../../context/Context.js';
import Vacancies from '../vacancies/Vacancies.js';
import axios from 'axios';
import VacancyCardSkeleton from '../../components/skeletons/VacancyCardSkeleton.js';
import VacancyDetail from '../../components/vacancyCard/VacancyDetail.js';

const Layout = () => {
    let data = JSON.parse(localStorage.getItem('user'));
    const [value, setValue] = useState(data)
    const providerValue = useMemo(() => ({ value, setValue }), [value, setValue])

    const [vacancies, setVacancies] = useState([])
    const vacancyListValue = useMemo(() => ({ vacancies, setVacancies }), [vacancies, setVacancies])
    const [loading, setLoading] = useState(false)

    const getAllVacancies = async () => {
        setLoading(true);

        const response = await axios.get('https://devjobscore.prospectsmb.com/v1/vacancies')
            .catch(err => console.log("Api Error", err))

        if (response && response.data) setVacancies(response.data.data)
        setLoading(false) 
        
    }

    useEffect(() => {
        getAllVacancies();
    }, [])

    return (
        <Router>
            <UserContext.Provider value={providerValue}>
                <div className="layout">
                    <Aside />
                    <div className="content-wrapper">
                        <Header />

                        <div className="container-fluid">
                            {loading && <VacancyCardSkeleton />}
                            {!loading &&
                                <Switch>
                                    <Route path='/' exact component={Home} />
                                    {!data ? <Route path='/registercomponent' component={registerComponent} /> : null}

                                    <Route path='/customcard' component={taskCustomCard} />
                                    <Route path='/clickercard' component={TaskClickerCard} />
                                    <Route path='/components' component={taskComponents} />
                                    <VacancyContext.Provider value={vacancyListValue.vacancies}>
                                        <Route path='/task5' component={Vacancies} />
                                        <Route path='/vacancydetail' component={VacancyDetail} />
                                        <Route path='/vacancy/:vacancyId' component={VacancyDetail} />
                                    </VacancyContext.Provider>

                                    {data ? <Route path='/cabinet' component={Cabinet} /> : (<Redirect to={"/"} />)}

                                </Switch>
                            }

                        </div>
                    </div>
                </div>
            </UserContext.Provider>
        </Router>
    )

}

export default Layout;