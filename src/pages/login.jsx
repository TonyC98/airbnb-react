import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
  const navigate = useNavigate()

  async function sendLogin(e) {
    e.preventDefault()
    let login = {
      email: e.target.email.value,
      password: e.target.password.value,
    }
    let session = await axios.post('http://localhost:4000/login', login)
    console.log(login)
    console.log(session)

    if (session.data.name) {
      navigate('/')
    } else {
      alert(session.data)
    }
  }

  return (
    // main this is the background image
    <div
      style={{
        backgroundImage: `url('thailand.jpg')`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
      }}
      className="vh-100 vw-100"
    >
      <div className="card mx-auto p-10" style={{ width: '18rem' }}>
        <img
          style={{ width: '6rem' }}
          src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399114/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/logo-airbnb.png"
          className="card-img-top"
          alt="Airbnb Logo"
        />
        <div className="card-body">
          <form className="loginForm" onSubmit={(e) => sendLogin(e)}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" name="email" />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" name="password" />
            </div>
            <button type="submit" className="btn btn-success">
              Login
            </button>
          </form>
          <div className="mb-3">
            <label className="form-label">New to Airbnb? </label>
            <Link to="/Signup" className="link-success">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
