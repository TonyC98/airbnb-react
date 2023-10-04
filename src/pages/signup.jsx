function Signup() {
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
          <div className="mb-3">
            <label className="form-label">Your Full Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Profile Picture</label>
            <input type="file" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" />
          </div>
          <a href="#" className="btn btn-success">
            Signup
          </a>
          <div className="mb-3">
            <label className="form-label">Already have an account?</label>
            <a href="login.html" className="link-success">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
