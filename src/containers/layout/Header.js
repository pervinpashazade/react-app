import React, { Component } from 'react'
import Nav from './Nav'

const Header = (props) => {

    return (
        <div className="header-wrapper">
            <Nav />

            {/* <div className="action-buttons">
                    <a href="index.html" className="btn btn-add">
                        <span>Add new</span>
                        <i>+</i>
                    </a>
                    <a href="index.html" className="btn-outline-custom">10 Jan - 21 Mar 2020</a>
                </div> */}
        </div>
    )

}

export default Header;