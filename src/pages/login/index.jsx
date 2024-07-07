import { memo, useEffect, useState } from 'react'
import { useGetValue } from '../../hooks/useGetValue'
import { Link, useNavigate } from 'react-router-dom'
import './Login.scss'
import { useSignInUserMutation } from '../../context/api/userApi'
import { useDispatch } from 'react-redux'
import { setToken, setUser } from '../../context/slice/authSlice'
import { IoIosEye, IoIosEyeOff } from 'react-icons/io'

const initialState = {
  UserName: "john32",
  password: "12345678"
}

const Login = () => {
  const { formData, handleChange } = useGetValue(initialState)
  const [eye, setEye] = useState(false)
  const [signIn, { data, isError, error, isSuccess }] = useSignInUserMutation()
  let navigate = useNavigate()
  let dispatch = useDispatch()
  const handleLogin = (e) => {
    e.preventDefault()
    signIn(formData)
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(setToken(data?.data?.token))
      dispatch(setUser(data?.data?.user))
      navigate("/admin/create-product")
    }

    if (isError) {
      alert(error.data.message)
    }
  }, [isSuccess, isError, navigate, data, error])

  return (
    <section className="login">
      <div className="login__container">
        <div className="login__box">
          <div className="login__box-inner">
            <h1 className="login__title">
              Login
            </h1>
            <form className="login__form" onSubmit={handleLogin}>
              <div className="login__form-group">
                <label htmlFor="UserName" className="login__label">Your username</label>
                <input type="text" name="UserName" id="UserName" value={formData.UserName} onChange={handleChange} className="login__input" placeholder="Your username" required />
              </div>
              <div className="login__form-group">
                <label htmlFor="password" className="login__label">Password</label>
                <div className='login__form-card-eye'>
                  <input type={!eye ? "password" : "text"} name="password" id="password" value={formData.password} onChange={handleChange} placeholder="••••••••" className="login__input" required />
                  <button type='button' className='login__eye-btn' onClick={() => setEye(prev => !prev)}>
                    {
                      !eye
                        ?
                        <IoIosEye />
                        :
                        <IoIosEyeOff />
                    }
                  </button>
                </div>
              </div>
              <div className="login__options">
                <div className="login__remember">
                  <input id="remember" aria-describedby="remember" type="checkbox" className="login__checkbox" />
                  <label htmlFor="remember" className="login__remember-label">Remember me</label>
                </div>
                <a href="#" className="login__forgot">Forgot password?</a>
              </div>
              <button type="submit" className="login__button">Sign in</button>
              <Link to={'/register'} className="login__register">
                Don’t have an account yet? <a href="#" className="login__register-link">Sign up</a>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(Login)
