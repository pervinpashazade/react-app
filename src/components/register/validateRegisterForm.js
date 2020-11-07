export default function validateRegisterForm(values) {
    let errors = {}


    //name
    if (!values.name) {
        errors.name = "* First name is required";
    } 
    else if (values.name.trim().length < 3) {
        errors.name = "* First name must be minimum 3 character";
    } else if (values.name.trim().length > 25) {
        errors.name = "* First name must be maximum 25 character";
    } else if (!/^[a-zA-Z]+$/.test(values.name)) {
        errors.name = "* First name must contains only letters";
    }

    //surname
    if (!values.surname) {
        errors.surname = "* Last name is required";
    } else if (values.surname.trim().length < 3) {
        errors.surname = "* Last name must be minimum 3 character";
    } else if (values.surname.trim().length > 25) {
        errors.surname = "* Last name must be maximum 25 character";
    } else if (!/^[a-zA-Z]+$/.test(values.name)) {
        errors.surname = "* Last name must contains only letters";
    }

    //email
    if (!values.email) {
        errors.email = "* Email is required";
    } 
    // else if (!/\S+@\S\+\.\S+/.test(values.name)) {
    //     errors.email = "* Email address is invalid";
    // }

    //password
    if (!values.password) {
        errors.password = "* Password is required";
    } else if (values.password.trim().length < 6) {
        errors.password = "* Password must be minimum 6 character";
    } else if (values.password.trim().length > 16) {
        errors.password = "* Password must be maximum 16 character";
    }


    return errors;
}