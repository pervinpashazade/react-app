import React from 'react'
import './login.css'
import Button from '../button/Button'
import Input from '../input/Input'

function Login() {
    return (
        <div className="col-md-5 login-modal">
            <div className="col-md-12 form-group">
                <label>Test</label>
                <Input placeholder={'Enter your name'}/>
            </div>
            <div className="col-md-12 form-group">
                <Button text={'Sign Up'} buttonDisplay={'btn-custom-block'} />
            </div>
        </div>
    )
}


export default Login;