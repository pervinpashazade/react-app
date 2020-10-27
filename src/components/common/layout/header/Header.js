import React, { Component } from 'react'
import './header.css'
import Nav from './Nav'

class Header extends Component {
    render() {
        return (
            <div className="header-wrapper">
                <Nav />
            </div>
        )
    }
}

export default Header;