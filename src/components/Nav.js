import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Nav() {
  const [logUser, setLogUser] = useEffect(false)
  console.log(logUser)

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
                // to="/login"
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
    // NAVIGATION LOGO BAR WITH THE USER LOGGED IN
    ;<div className="p-2 border-bottom border-secondary-subtle">
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
            <Link to="/l"></Link>
            <a
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setLogUser(false)}
            >
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  }
}
