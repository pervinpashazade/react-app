import React, { Component } from 'react'
import Aside from './Aside.js'
import '../../assets/img/profile.png';

// import Header from './Header'

class Layout extends Component {
    render() {
        return (
            <div>
                <Aside />
                {/* <Header /> */}
            </div>
        )
    }
}

export default Layout;