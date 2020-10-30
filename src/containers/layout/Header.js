import React, { Component } from 'react'
import '../../assets/css/containers/layout/header.css'
import Nav from './Nav'

class Header extends Component {
    render() {
        return (
            <div className="header-wrapper">
                <Nav />
                <div className="action-buttons">
                    <a href="index.html" className="btn btn-custom-primary">
                        Add new
                    </a>
                    <a href="index.html" className="btn-outline-custom">10 Jan - 21 Mar 2020</a>
                </div>
            </div>
        )
    }
}

export default Header;