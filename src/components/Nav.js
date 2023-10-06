import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

export default async function Nav() {
  const [logUser, setLogUser] = useState(false)

  let user = await axios.get('http://localhost:4000/profile', user)
  console.log(signup)
  console.log(user)

  if (logUser == false) {
    return (
      // NAVIGATION LOGO BAR WITHOUT USER -- USER IS LOGOUT
      <div className="p-2 border-bottom border-secondary-subtle">
        {/* header */}
        <div className="container">
          <div className="row row-cols-2 align-items-center">
            <div className="col">
              {/* logo */}
              <img
                src="images/logo-airbnb.png"
                style={{ width: '100px' }}
                alt="Airbnb.com"
              />
            </div>
            <div className="col text-end">
              <Link
                to="/login"
                className="btn btn-outline-secondary"
                onClick={() => setLogUser(true)}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      // NAVIGATION LOGO BAR WITH THE USER LOGGED IN
      <div className="p-2 border-bottom border-secondary-subtle">
        {/* header */}
        <div className="container">
          <div className="row row-cols-2 align-items-center">
            <div className="col">
              {/* logo */}
              <img
                src="images/logo-airbnb.png"
                style={{ width: '100px' }}
                alt="Airbnb.com"
              />
            </div>
            <div className="col text-end">
              {/* user links */}
              <Link to="/profile" className="btn btn-outline-secondary me-1">
                <img
                  src="https://randomuser.me/api/portraits/men/11.jpg"
                  alt="User Photo"
                  className="me-1"
                  style={{ width: `20px`, borderRadius: `100%` }}
                />
                UserName
              </Link>
              <Link
                to="/"
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setLogUser(false)}
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
