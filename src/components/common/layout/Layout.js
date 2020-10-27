import React, { Component } from 'react'
import Aside from './aside/Aside.js'
import './layout.css';

import Header from './header/Header'

class Layout extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-3">
                        <Aside />
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            {/* Header */}
                            <div className="col-md-12">
                                <Header />
                            </div>

                            {/* Main Content Start */}
                            <div className="col-md-12"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout;