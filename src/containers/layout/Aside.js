import React, { Component } from 'react'
import '../../assets/css/containers/layout/aside.css'
import icon from '../../assets/img/icon.png'
import NavbarUserDetails from './NavbarUserDetails'


class Aside extends Component {
    render() {
        return (
            <div className="asidebar">
                <div className="sidebar-logo">
                    <a className="" href="index.html">
                        <img src={icon} alt="sidebar-logo" />
                        <span>Insurance Portal</span>
                    </a>
                </div>
                <NavbarUserDetails />
            </div>
        )
    }
}

export default Aside;