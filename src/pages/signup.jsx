import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Signup() {
  const navigate = useNavigate()

  async function sendSignup(e) {
    e.preventDefault()
    let signup = {
      name: e.target.name.value,
      picture: e.target.picture.value,
      email: e.target.email.value,
      password: e.target.password.value,
    }
    let user = await axios.post('http://localhost:4000/signup', signup)
    console.log(signup)
    console.log(user)

    if (user.data.name) {
      navigate('/')
    } else {
      alert(user.data)
    }
  }

  let ErrorMessage = ''

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
          <form className="loginForm" onSubmit={(e) => sendSignup(e)}>
            <div className="mb-3">
              <label className="form-label">Your Full Name</label>
              <input type="text" className="form-control" name="name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Profile Picture</label>
              <input type="file" className="form-control" name="picture" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" name="email" />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" name="password" />
            </div>
            <button type="submit" className="btn btn-success">
              Signup
            </button>
            {ErrorMessage}
          </form>
          <div className="mb-3">
            <label className="form-label">Already have an account?</label>
            <Link to="/Login" className="link-success">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
