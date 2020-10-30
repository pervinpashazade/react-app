import React, { Component } from 'react'
import '../../assets/css/containers/layout/contentwrapper.css'
import Header from './Header'

class ContentWrapper extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <Header />
            </div>
        )
    }
}

export default ContentWrapper;