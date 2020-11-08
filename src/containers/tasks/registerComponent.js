import React from 'react'
import RegisterForm from '../../components/register/RegisterForm'
import '../../assets/css/app.css'
import '../../components/register/login.css'

export default function registerComponent() {
    return (
        <div className="row">
            <div className="col-md-12 modal-wrap d-flex justify-content-center">
                <div className="col-md-5 login-modal">
                    <RegisterForm />
                </div>
            </div>
        </div>
    )
}
