import React, { Component } from 'react'
import Aside from './Aside.js'
import '../../assets/img/profile.png';

import ContentWrapper from './ContentWrapper.js';

class Layout extends Component {
    render() {
        return (
            <div className="layout">
                <Aside />
                <ContentWrapper />
            </div>
        )
    }
}

export default Layout;