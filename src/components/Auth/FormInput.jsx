import React from 'react'
import MyInput from '../UI/MyInput'

const FormInput = ({title, type, value, error, ...props}) => {
  return (
    <div className="form__input">
        <MyInput
            title={title}
            type={type}
            value={value}
            {...props}
        />
        {error && (
            <div className="form__error">{error}</div>
        )}
    </div>
  )
}

export default FormInput