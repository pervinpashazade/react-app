import React from 'react'
import './login.css'
import Button from '../button/Button'
import Input from '../input/Input'
import Label from '../label/Label'

function Login() {
    return (
        <div className="col-md-5 login-modal">
            <div className="col-md-12 form-group">
                <Label text={'First name'} labelFor={'firstname'} fontWeight={'label-weight-bold'}/>
                <Input placeholder={'Enter your name'} inputId={'firstname'}/>
            </div>
            <div className="col-md-12">
                <Button text={'Sign Up'} buttonDisplay={'btn-custom-block'} />
            </div>
        </div>
    )
}


export default Login;