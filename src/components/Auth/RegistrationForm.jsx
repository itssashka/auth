import React, { useEffect, useState } from "react";
import MyInput from "../UI/MyInput";
import MyButton from "../UI/MyButton";
import { Link, useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { regUser } from "../../API/auth";
import { useDispatch } from "react-redux";
import { reg } from "../../store/authSlice";
import FormInput from "./FormInput";

const RegistrationForm = () => {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
        password2: "",
    });
    const { errors, handleSubmit } = useForm(userData, onReg);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function onReg() {
        regUser(userData)
            .then((resp) => {
                if (resp.status !== 200) throw new Error(resp.error);
                return resp.json();
            })
            .then((data) => {
                dispatch(reg(userData));
                navigate("/main");
            })
            .catch((error) => {
                alert(error);
            });
    }

    useEffect(() => {
        console.log(errors);
    }, [errors]);

    return (
        <div className="form">
            <div className="form__title">Sign Up</div>
            <form className="form__fields" onSubmit={handleSubmit}>
                <FormInput
                    title="Email"
                    type="text"
                    value={userData.email}
                    onChange={(e) =>
                        setUserData({ ...userData, email: e.target.value })
                    }
                    error={errors.email}
                />
                <FormInput
                    title="Password"
                    type="password"
                    value={userData.password}
                    onChange={(e) =>
                        setUserData({
                            ...userData,
                            password: e.target.value,
                        })
                    }
                    error={errors.password}
                />
                <FormInput
                    title="Confirm password"
                    type="password"
                    value={userData.password2}
                    onChange={(e) =>
                        setUserData({
                            ...userData,
                            password2: e.target.value,
                        })
                    }
                />
                <MyButton>Login</MyButton>
            </form>
            <div className="form__text">
                Already have an account?{" "}
                <Link to="/login" className="switch-form">
                    Sign In
                </Link>
            </div>
        </div>
    );
};

export default RegistrationForm;
