import React, { useState, useMemo } from 'react'
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
import { UserContext } from '../../context/UserContext.js';

const Layout = (params) => {
    let data = JSON.parse(localStorage.getItem('user'));

    const [value, setValue] = useState(data)

    const providerValue = useMemo(() => ({ value, setValue }), [value, setValue])

    return (
        <Router>
            <UserContext.Provider value={providerValue}>
                <div className="layout">
                    <Aside />
                    <div className="content-wrapper">
                        <Header />

                        <div className="container-fluid">
                            <Switch>
                                <Route path='/' exact component={Home} />
                                {!data ? <Route path='/registercomponent' component={registerComponent} /> : null}

                                <Route path='/customcard' component={taskCustomCard} />
                                <Route path='/clickercard' component={TaskClickerCard} />
                                <Route path='/components' component={taskComponents} />

                                {data ? <Route path='/cabinet' component={Cabinet} /> : (<Redirect to={"/"} />)}

                            </Switch>
                        </div>
                    </div>
                </div>
            </UserContext.Provider>
        </Router>
    )

}

export default Layout;