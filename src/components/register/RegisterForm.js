import React from 'react'
import './login.css'
import Button from '../button/Button'
// import Input from '../input/Input'
import Label from '../label/Label'
import SmallText from '../smallText/SmallText'
import useRegisterForm from '../../hooks/useRegisterForm'
import validateRegisterForm from './validateRegisterForm'

import '../input/input.css'

const RegisterForm = () => {

    const { handleChanges, handleSubmit, values, errors } = useRegisterForm(submit, validateRegisterForm);

    function submit() {
        console.log(values)
        clearForm();
        alert("Form Submitted Successfully")
    }

    function clearForm() {
        document.getElementById("name").value = "";
        document.getElementById("surname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
    }
    
    return (
        <div className="col-md-5 login-modal">
            <form id="test" onSubmit={handleSubmit} noValidate>
                <div className="col-md-12 form-group">
                    <h3 className="text-center font-weight-bold">Sign Up</h3>
                </div>
                <div className="col-md-12 form-group">
                    <Label text={'First name'} labelFor={'firstname'} fontWeight={'label-weight-bold'} />
                    <input type="text" id="name" name="name" className={'input ' + (errors.name && " input-error ")} placeholder="First name"
                        value={values.name} onChange={handleChanges} />
                    {!errors.name ? "" : <span className="text-danger">{errors.name}</span>}

                    {/* <Input placeholder={'First name'} inputId={'firstname'}
                        onChange={(e) => { setFirstName(e.target.value) }} /> */}
                </div>
                <div className="col-md-12 form-group">
                    <Label text={'Last name'} labelFor={'lastname'} fontWeight={'label-weight-bold'} />
                    <input type="text"
                        id="surname"
                        name="surname"
                        className={'input ' + (errors.surname && " input-error ")}
                        placeholder="Last name"
                        value={values.surname}
                        onChange={handleChanges} />
                    {errors.surname && <span className="text-danger">{errors.surname}</span>}

                    {/* <Input placeholder={'Last name'} inputId={'lastname'} /> */}
                </div>
                <div className="col-md-12 form-group">
                    <Label text={'Email'} labelFor={'email'} fontWeight={'label-weight-bold'} />
                    <input type="email" id="email" name="email" className={'input ' + (errors.email && " input-error ")} placeholder="Enter email"
                        value={values.email} onChange={handleChanges} />
                    {errors.email && <span className="text-danger">{errors.email}</span>}

                    {/* <Input type={'email'} placeholder={'Enter email'} inputId={'email'} /> */}
                </div>
                <div className="col-md-12 form-group">
                    <Label text={'Password'} labelFor={'password'} fontWeight={'label-weight-bold'} />
                    <input type="password" id="password" name="password" className={'input ' + (errors.password && " input-error ")} placeholder="Enter password"
                        value={values.password} onChange={handleChanges} />
                    {errors.password && <span className="text-danger">{errors.password}</span>}

                    {/* <Input placeholder={'Enter password'} inputId={'password'} type={'password'} /> */}
                </div>
                <div className="col-md-12">
                    <Button type={'submit'} text={'Sign Up'} buttonDisplay={'btn-custom-block'} />
                    <SmallText textPosition={'text-right'} text={'Already registered '}
                        showActionLink={true} textActionLink={'Sign In'} />
                </div>
            </form>
        </div>
    )
}


export default RegisterForm;