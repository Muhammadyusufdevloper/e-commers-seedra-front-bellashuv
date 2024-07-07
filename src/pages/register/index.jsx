import { useEffect } from 'react'
import { useRegisterUserMutation } from '../../context/api/userApi'
import { useGetValue } from '../../hooks/useGetValue'
import './Register.scss'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const initialState = {
  firstName: "Abubakir",
  lastName: "Abdurazzaqov",
  userName: "abubakir07",
  password: "12345678",
  phones: "+998 90 230 2324",
}

const Register = () => {
  const { formData, handleChange,} = useGetValue(initialState)
  const [createUser, { isSuccess, isError, isLoading }] = useRegisterUserMutation()

  useEffect(() => {
    if (isSuccess) {
      toast.success("Ma'lumot to'g'ri kiritildi")
    }
    if (isError) {
      toast.error("Ma'lumot noto'g'ri kiritildi")
    }
  }, [isSuccess, isError])

  const handleCreateUser = e => {
    e.preventDefault()
    const formattedData = {
      FirstName: formData.firstName,
      LastName: formData.lastName,
      UserName: formData.userName,
      password: formData.password,
      phones: formData.phones.split(',').map(phone => phone.trim())
    }
    createUser(formattedData)
  }

  return (
    <section className="register">
      <div className="register__wrapper">
        <h2>Registration</h2>
        <form onSubmit={handleCreateUser}>
          <div className="register__input-box">
            <input className="register__input"
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="register__input-box">
            <input className="register__input"
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="register__input-box">
            <input className="register__input"
              type="text"
              name="userName"
              placeholder="Enter your username"
              value={formData.userName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="register__input-box">
            <input className="register__input"
              type="password"
              name="password"
              placeholder="Create password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="register__input-box">
            <input className="register__input"
              type="text"
              name="phones"
              placeholder="Enter your phone numbers (comma separated)"
              value={formData.phones}
              onChange={handleChange}
              required
            />
          </div>
          <div className="register__input-box button">
            <input disabled={isLoading} className="register__input" type="submit" value="Register" />
          </div>
          <div className="register__text">
            <h3>Already have an account? <Link to={"/login"}>Login</Link></h3>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Register
