import React, { Component } from 'react'
import '../../assets/css/nav.css'

class Nav extends Component {
    render() {
        return (
            <div className="navbar">
                <a className="nav-link" href="index.html">Overview</a>
                <a className="nav-link" href="index.html">Policy</a>
                <a className="nav-link active" href="index.html">Reports</a>
            </div>
        )
    }
}

export default Nav;