import React from 'react'
import SubmitBtn from '../button/SubmitBtn'
import './login.css'

function Login() {
    return (
        <div className="login-modal">
            <div>
                <SubmitBtn />
                <SubmitBtn isDisabled={true} text={"Continue"} />
            </div>
        </div>
    )
}


export default Login;