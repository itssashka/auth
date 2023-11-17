import React, { useState } from 'react'
import EyeBtn from './EyeBtn'

const MyInput = ({title, type="text", children, ...props}) => {
  const isPass = type === 'password'
  const showPass = false;
  const [passType, setPassType] = useState('password');
  const [isPassShow, setIsShow] = useState(false)

  const togglePass = () => {
    console.log(isPassShow)
    if(isPassShow) {
      setPassType('password')
      setIsShow(false)
    } else {
      setPassType('text')
      setIsShow(true)
    }
  }
  return (
    <div className='input'>
        <input type={!isPass ? type : passType} className='input__field' {...props} required/>
        <div className="input__title">{title}</div>
        {isPass && <EyeBtn isOpen={isPassShow} onClick={togglePass}/>}
    </div>
  )
}

export default MyInput