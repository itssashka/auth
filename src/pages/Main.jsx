import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logout } from "../store/authSlice";
import MyButton from "../components/UI/MyButton";
import { logOut } from "../API/auth";

const Main = () => {
    const userData = useSelector(getUser);
    const dispatch = useDispatch();

    const handleLogout = () => {
        logOut(userData)
            .then(resp => {
                if(resp.status !== 200) throw new Error(resp.error)
                return resp.json();
            })
            .then(data => {
                dispatch(logout());
            })
            .catch(error => {
                alert(error)
            })
    };

    return (
        <div className="main">
            <div className="main__header">Добро пожаловать {userData}</div>
            <MyButton onClick={handleLogout}>
                Выйти
            </MyButton>
        </div>
    );
};

export default Main;
