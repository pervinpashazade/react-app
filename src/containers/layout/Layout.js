import React, { Component } from 'react'
import Aside from './Aside.js'
import '../../assets/img/profile.png';
import Header from './Header'
import RegisterForm from '../../components/register/RegisterForm'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import taskCustomCard from '../tasks/taskCustomCard.js';
import taskClickerCard from '../tasks/taskClickerCard.js';
import taskComponents from '../tasks/taskComponents.js';
import Home from '../home/Home'



class Layout extends Component {
    render() {
        return (
            <Router>
                <div className="layout">
                    <Aside />
                    <div className="content-wrapper">
                        <Header />

                        <div className="container-fluid">
                            <Switch>
                                <Route path='/' exact component={Home} />
                                <Route path='/registerform' component={RegisterForm} />
                                <Route path='/customcard' component={taskCustomCard} />
                                <Route path='/clickercard' component={taskClickerCard} />
                                <Route path='/components' component={taskComponents} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Layout;