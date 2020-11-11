export default function validateRegisterForm(values) {
    let errors = {}

    const {name, surname, email, password} = values;

    //name
    if (!name) {
        errors.name = "* First name is required";
    } 
    else if (name.trim().length < 3) {
        errors.name = "* First name must be minimum 3 character";
    } else if (name.trim().length > 25) {
        errors.name = "* First name must be maximum 25 character";
    } else if (!/^[a-zA-Z]+$/.test(name)) {
        errors.name = "* First name must contains only letters";
    }

    //surname
    if (!surname) {
        errors.surname = "* Last name is required";
    } else if (surname.trim().length < 3) {
        errors.surname = "* Last name must be minimum 3 character";
    } else if (surname.trim().length > 25) {
        errors.surname = "* Last name must be maximum 25 character";
    } else if (!/^[a-zA-Z]+$/.test(surname)) {
        errors.surname = "* Last name must contains only letters";
    }

    //email
    if (!email) {
        errors.email = "* Email is required";
    } 
    else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
        errors.email = "* Email address is invalid";
    }

    //password
    if (!password) {
        errors.password = "* Password is required";
    } else if (password.trim().length < 6) {
        errors.password = "* Password must be minimum 6 character";
    } else if (password.trim().length > 16) {
        errors.password = "* Password must be maximum 16 character";
    }


    return errors;
}