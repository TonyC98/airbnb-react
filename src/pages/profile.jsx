import Nav from '../components/Nav'
import { Link } from 'react-router-dom'

function Profile() {
  let user = {
    name: 'UserNameTest',
    email: 'UserEmailTest@gmail.com',
    picture: 'https://randomuser.me/api/portraits/men/11.jpg',
  }

  let house = {
    title: 'Luxury Villa',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam magnam quod tempore consequatur praesentium? Cumpariatur voluptates aut, maxime ratione in ea consectetur molestias aliquam, alias enim ullam at ab! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti inventore nam provident, non id eius quasi perferendis itaque voluptates officiis eligendi aspernatur, numquam quaerat, maxime repellendus quae eveniet labore in.',
    rooms: 4,
    location: 'Chaweng',
    price: 350,
    photo:
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png',
  }

  function updateUser(e) {
    e.preventDefault()
    let user = {
      name: e.target.name.value,
      email: e.target.email.value,
      picture: e.target.picture.value,
    }
    console.log(user)
  }

  return (
    <>
      <Nav />
      {/* //MAIN GRID, 2 COLUMNS USER TO THE LEFT. LISTINGS TO THE RIGHT */}
      <div className="container text-left">
        <div className="row gx-5">
          {/* <!-- USER INFORMATION --> */}
          <div className="col col-3">
            <h3>Profile</h3>
            <form className="loginForm" onSubmit={(e) => updateUser(e)}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder={user.name}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder={user.email}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Picture</label>
                <br />
                <img src={user.picture} alt="User Photo" height="50" />
                <br />
                <br />
                <input type="file" className="form-control" name="picture" />
              </div>
              <button type="submit" className="btn btn-success">
                Save Changes
              </button>
            </form>
          </div>

          {/* <!-- LISTINGS OF THE USER --> */}
          <div className="col">
            <h3>My Listings</h3>
            <Link to="/HouseCreate" className="btn btn-success">
              List a House
            </Link>
            <div className="card mb-3 mt-3" style={{ width: '100%' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={house.photo}
                    className="img-fluid rounded-start"
                    alt="House picture 1;"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      {house.title} in {house.location}
                    </h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                      {house.rooms} Bedrooms, ${house.price} / night
                    </h6>
                    <p className="card-text">{house.description}</p>

                    <Link to="/HouseEdit" className="btn btn-outline-success">
                      Edit
                    </Link>

                    <Link to="/House" className="btn btn-outline-success">
                      View
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="card mb-3 mt-3" style={{ width: '100%' }}>
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
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
