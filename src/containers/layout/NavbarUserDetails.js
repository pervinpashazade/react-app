import React, { Component } from 'react'
import '../../assets/css/layout.css'
import '../../assets/css/navbaruserdetails.css'
import profileImg from '../../assets/img/profile.png'


class NavbarUserDetails extends Component {
    render() {
        return (
            <div className="navbar-user">
                <img src={profileImg} className="img-profile" alt="profile img" />
                <div className="user-details">
                    <h3>Hello ! Rusalba Ruiz</h3>
                    <p>Welcome Back To Your Insurance Portal</p>
                    <h4>Your Plan : <span>Free</span></h4>
                </div>
            </div>
        )
    }
}

export default NavbarUserDetails;