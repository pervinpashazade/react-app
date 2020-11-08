import React, { Component } from 'react'
import { Link, Links, NavLink } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <div className="navbar">
                <NavLink to='/' exact className="nav-link" activeClassName="active">Home</NavLink>
                <NavLink to='registerform' className="nav-link" activeClassName="active">Register</NavLink>
                <NavLink to='customcard' className="nav-link" activeClassName="active">Custom Card</NavLink>
                <NavLink to='clickercard' className="nav-link" activeClassName="active">Clicker Card</NavLink>
                <NavLink to='components' className="nav-link" activeClassName="active">Components</NavLink>
            </div>
        )
    }
}

export default Nav;