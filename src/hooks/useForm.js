import { useState } from "react";

export default function useForm(formValues, callback) {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const regExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    function validate(name, value, newErrors) {

        switch (name) {
            case "email":
                if(value.length === 0){
                    newErrors[name] = 'Email cannot be empty.'
                } else if(!regExp.test(value)){
                    newErrors[name] =  'Invalid email format.'
                } 
                break;
            case "password":
                if(value.length === 0){
                    newErrors[name] = 'Password cannot be empty.'
                } else if(formValues.hasOwnProperty('password2') && (formValues.password !== formValues.password2)) {
                    newErrors[name] = 'Passwords does not match.'
                } else if(formValues.hasOwnProperty('password2') && !isPassStrong(value)) {
                    newErrors[name] = 'The password must contain uppercase and lowercase letters, at least one number, special characters (!@#$%^&*!@#$%^&*.,\';:), and no spaces.'
                }
                break;
            default:
                break;
        }
    }

    function isPassStrong(value){
        let passStr = 0;

        if(/(?=.*[a-z])/.test(value)) passStr++;
        if(/(?=.*[A-Z])/.test(value)) passStr++;
        if(/\d/.test(value)) passStr++;
        if(/(?=.*[!@#$%^&*.,';:])/.test(value)) passStr++;
        if(value.length >= 8) passStr++;
        if(/\s/.test(value)) passStr--;

        return passStr === 5;
        
    }

    function handleSubmit(event) {
        event.preventDefault();
        const newErrors = {};

        for(let i in formValues) {
            const name = i;
            const value = formValues[i];
            validate(name,value, newErrors);
        }

        if(Object.keys(newErrors).length === 0 && Object.keys(values) !== 0){
            callback();
        }

        setErrors(newErrors);
    }

    return { errors, handleSubmit };
}


