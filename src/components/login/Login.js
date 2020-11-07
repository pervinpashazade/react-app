import React from 'react'
import './login.css'
import Button from '../button/Button'
import Input from '../input/Input'
import Label from '../label/Label'
import SmallText from '../smallText/SmallText'

function Login() {
    return (
        <div className="col-md-5 login-modal">
            <div className="col-md-12 form-group">
                <Label text={'First name'} labelFor={'firstname'} fontWeight={'label-weight-bold'} />
                <Input placeholder={'First name'} inputId={'firstname'} />
            </div>
            <div className="col-md-12 form-group">
                <Label text={'Last name'} labelFor={'lastname'} fontWeight={'label-weight-bold'} />
                <Input placeholder={'Last name'} inputId={'lastname'} />
            </div>
            <div className="col-md-12 form-group">
                <Label text={'Email'} labelFor={'email'} fontWeight={'label-weight-bold'} />
                <Input type={'email'} placeholder={'Enter email'} inputId={'email'} />
            </div>
            <div className="col-md-12 form-group">
                <Label text={'Password'} labelFor={'password'} fontWeight={'label-weight-bold'} />
                <Input placeholder={'Enter password'} inputId={'password'} type={'password'} />
            </div>
            <div type={'password'} className="col-md-12">
                <Button text={'Sign Up'} buttonDisplay={'btn-custom-block'} />
                <SmallText text={'Already registered Sign In?'} textPosition={'text-right'}/>
            </div>
        </div>
    )
}


export default Login;