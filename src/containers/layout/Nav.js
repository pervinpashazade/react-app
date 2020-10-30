import React, { Component } from 'react'
import '../../assets/css/containers/layout/nav.css'

class Nav extends Component {
    render() {
        return (
            <div className="navbar">
                <a href="index.html">Overview</a>
                <a href="index.html">Policy</a>
                <a href="index.html" className="active">Reports</a>
            </div>
        )
    }
}

export default Nav;