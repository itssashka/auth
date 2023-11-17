import React, { useEffect } from 'react'
import { privateRoutes, publicRoutes } from '../router/routes'
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuth } from '../store/authSlice';

const AppRouter = () => {
    const isAuth = useSelector(getIsAuth);
    const currentRoutes = isAuth ? privateRoutes : publicRoutes;

    useEffect(() => {
        console.log(currentRoutes)
    }, [currentRoutes])
    return (
        <Routes>
            {currentRoutes.map(route => 
                <Route path={route.path} element={route.element} key={route.path}/>
            )}
            {isAuth 
                ? <Route path="*" element={<Navigate to='main' replace/>}/>
                : <Route path="*" element={<Navigate to='login' replace/>}/>
            }
        </Routes>
    )
}

export default AppRouter