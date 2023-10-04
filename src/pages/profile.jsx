function Profile() {
  return (
    <>
      {/* // // NAVIGATION LOGO BAR WITH THE USER LOGGED IN */}
      <nav className="navbar bg-white">
        <div className="container-fluid">
          <img
            src="logo-airbnb.png"
            alt="airbnb logo"
            height="50"
            className="navbar-brand"
          />
          <div>
            <a href="#" type="button" className="btn btn-outline-dark">
              <img
                src="https://randomuser.me/api/portraits/men/11.jpg"
                alt="User Photo"
                height="20"
              />
              User Name
            </a>
            <a href="#" type="button" className="btn btn-outline-dark">
              Logout
            </a>
          </div>
        </div>
      </nav>
      {/* // NNAVIGATION LOGO BAR WITHOUT USER
      // <nav className="navbar bg-white">
      //   <div className="container-fluid">
      //     <img
      //       src="logo-airbnb.png"
      //       alt="airbnb logo"
      //       height="50"
      //       className="navbar-brand"
      //     />
      //     <div>
      //       <a href="#" type="button" className="btn btn-outline-dark">
      //         Sign in
      //       </a>
      //     </div>
      //   </div>
      // </nav> */}
      {/* //MAIN GRID, 2 COLUMNS USER TO THE LEFT. LISTINGS TO THE RIGHT */}
      <div className="container text-left">
        <div className="row gx-5">
          {/* <!-- USER INFORMATION --> */}
          <div className="col col-3">
            <h3>Profile</h3>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Profile Picture</label>
              <br />
              <img
                src="https://randomuser.me/api/portraits/men/11.jpg"
                alt="User Photo"
                height="50"
              />
              <br />
              <br />
              <input type="file" className="form-control" />
            </div>
            <a href="#" className="btn btn-success">
              Save Changes
            </a>
          </div>
          {/* <!-- LISTINGS OF THE USER --> */}
          <div className="col">
            <h3>My Listings</h3>
            <a href="#" className="btn btn-success">
              List a House
            </a>
            <div className="card mb-3 mt-3" style={{ width: '100%' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png
                "
                    className="img-fluid rounded-start"
                    alt="House picture 1;"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Luxury Villa in Chaweng</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                      4 Bedrooms, $350 / night
                    </h6>
                    <p className="card-text">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Quibusdam magnam quod tempore consequatur praesentium? Cum
                      pariatur voluptates aut, maxime ratione in ea consectetur
                      molestias aliquam, alias enim ullam at ab! Lorem ipsum
                      dolor sit amet consectetur adipisicing elit. Corrupti
                      inventore nam provident, non id eius quasi perferendis
                      itaque voluptates officiis eligendi aspernatur, numquam
                      quaerat, maxime repellendus quae eveniet labore in.
                    </p>
                    <a href="#" className="btn btn-outline-success">
                      Edit
                    </a>
                    <a href="#" className="btn btn-outline-success">
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3 mt-3" style={{ width: '100%' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png
                "
                    className="img-fluid rounded-start"
                    alt="House picture 1;"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Luxury Villa in Chaweng</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                      4 Bedrooms, $350 / night
                    </h6>
                    <p className="card-text">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Quibusdam magnam quod tempore consequatur praesentium? Cum
                      pariatur voluptates aut, maxime ratione in ea consectetur
                      molestias aliquam, alias enim ullam at ab! Lorem ipsum
                      dolor sit amet consectetur adipisicing elit. Corrupti
                      inventore nam provident, non id eius quasi perferendis
                      itaque voluptates officiis eligendi aspernatur, numquam
                      quaerat, maxime repellendus quae eveniet labore in.
                    </p>
                    <a href="#" className="btn btn-outline-success">
                      Edit
                    </a>
                    <a href="#" className="btn btn-outline-success">
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
