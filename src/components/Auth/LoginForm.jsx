import React, { useEffect, useState } from 'react'
import MyInput from '../UI/MyInput'
import MyButton from '../UI/MyButton'
import { Link, useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { regUser } from '../../API/auth';
import { useDispatch } from 'react-redux';
import { reg } from '../../store/authSlice';
import FormInput from './FormInput';

const LoginForm = () => {
  const [userData, setUserData] = useState({email: '', password: ''});
  const {errors, handleSubmit} = useForm(userData, onLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onLogin () {
    regUser(userData)
      .then(resp => {
        if(resp.status !== 200) throw new Error(resp.error)
        return resp.json();
      })
      .then(data => {
        dispatch(reg(userData));
        console.log('navigate');
        navigate('/main');
      })
      .catch(error => {
          alert(error)
      })
  } 


  useEffect(() => {
    console.log(errors)
  }, [errors])

  return (
    <div className="form">
        <div className="form__title">Sign In</div>
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
              onChange={(e) => setUserData({...userData, password: e.target.value})}
              error={errors.password}
          />
          <MyButton>Login</MyButton>
        </form>
        <div className="form__text">
            Don't have an account? <Link to="/reg" className='switch-form'>Sign Up</Link>
        </div>
      </div>
  )
}

export default LoginForm