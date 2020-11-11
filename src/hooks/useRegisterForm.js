import { useState, useEffect } from 'react';


const useLoginForm = (callback, validateRegisterForm) => {

    const [values, setValues] = useState({ name: "", surname: "", email: "", password: "" })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChanges = event => {
        const { name, value } = event.target;

        setValues({
            ...values,
            [name]: value
        });
    }

    const handleSubmit = event => {
        event.preventDefault();

        //handle errors
        setErrors(validateRegisterForm(values))

        setIsSubmitting(true);
    }

    const clearForm = () => {
        setValues({ name: "", surname: "", email: "", password: "" })
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
            clearForm();
        }
    }, [errors]);


    return {
        handleChanges,
        handleSubmit,
        values,
        errors
    }
}

export default useLoginForm;