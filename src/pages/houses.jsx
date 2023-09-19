function Houses() {
  return (
    <>
      {/* <!-- Nav --> */}
      <nav className="navbar bg-white">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="public/images/logo-airbnb.png" alt="airbnb logo" />
          </a>
          <div>
            <a className="btn btn-light">Login</a>
            <a className="btn btn-light">Logout</a>
          </div>
        </div>
      </nav>
      {/* <!-- Form --> */}
      <div className="container text-center mb-5" height="30px">
        <div className="row">
          {/* <!-- location --> */}
          <div className="input-group mb-3 col">
            <span className="input-group-text" id="basic-addon1">
              <i className="bi bi-geo-alt-fill"></i>
            </span>
            <select className="form-select form-select-lg">
              <option type="text" placeholder="Any Location">
                Any location
              </option>
              <option type="text">Koh Phangan</option>
              <option>koh Samui</option>
              <option>Bali</option>
            </select>
          </div>
          {/* <!-- rooms --> */}
          <div className="input-group mb-3 col">
            <span className="input-group-text" id="basic-addon1">
              <i className="bi bi-house-door-fill"></i>
            </span>
            <select className="form-select form-select-lg">
              <option type="text" placeholder="Any Location">
                Any rooms
              </option>
              <option type="text">1 room</option>
              <option type="text">2 rooms</option>
              <option type="text">3 rooms</option>
              <option type="text">4 rooms</option>
              <option type="text">5 rooms</option>
            </select>
          </div>
          {/* <!-- price --> */}
          <div className="input-group mb-3 col">
            <span className="input-group-text" id="basic-addon1">
              <i className="bi bi-arrows-vertical"></i>
            </span>
            <input
              type="number"
              className="form-control"
              placeholder="max price"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          {/* <!-- sorting --> */}
          <div className="input-group mb-3 col">
            <span className="input-group-text" id="basic-addon1">
              $
            </span>
            <select className="form-select form-select-lg">
              <option type="text" placeholder="Any Location">
                Price (low to high)
              </option>
              <option type="text"> Price (high to low)</option>
            </select>
          </div>
          {/* <!-- search --> */}
          <div className="input-group mb-3 col">
            {/* <!-- <span class="input-group-text" id="basic-addon1">@</span> --> */}
            <input
              type="text"
              className="form-control"
              placeholder="House name"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          {/* <!-- button --> */}
          <div className="col">
            <button type="submit" className="btn btn-success">
              Search
            </button>
          </div>
        </div>
      </div>
      {/* <!-- Cards --> */}
      <div className="container">
        <div className="row row-cols-4 g-4">
          {/* <!-- Card 1 --> */}
          <div className="col">
            <div className="card">
              <img
                src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295027/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2002/house_02_01.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p>
                  <i className="bi bi-geo-alt-fill"></i>
                  <small>
                    Location{' '}
                    <strong>
                      <i className="bi bi-dot"></i>
                    </strong>{' '}
                    number of rooms
                  </small>
                </p>
                <h4 className="h4">Card title</h4>
                <i
                  className="bi bi-hand-thumbs-up-fill"
                  style={{ color: `green` }}
                ></i>
                <span>Reviews</span>
                <i className="fa-solid fa-location-dot"></i>
                <span className="float-end">Price</span>
              </div>
            </div>
          </div>
          {/* <!-- Card 2 --> */}
          <div className="col">
            <div className="card">
              <img
                src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295027/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2003/house_03_01.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p>
                  <i className="bi bi-geo-alt-fill"></i>
                  <small>
                    Location{' '}
                    <strong>
                      <i className="bi bi-dot"></i>
                    </strong>{' '}
                    number of rooms
                  </small>
                </p>
                <h4 className="h4">Card title</h4>
                <i
                  className="bi bi-hand-thumbs-up-fill"
                  style={{ color: `green` }}
                ></i>
                <span>Reviews</span>
                <i className="fa-solid fa-location-dot"></i>
                <span className="float-end">Price</span>
              </div>
            </div>
          </div>
          {/* <!-- Card 3 --> */}
          <div className="col">
            <div className="card">
              <img
                src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295027/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2004/house_04_01.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p>
                  <i className="bi bi-geo-alt-fill"></i>
                  <small>
                    Location{' '}
                    <strong>
                      <i className="bi bi-dot"></i>
                    </strong>{' '}
                    number of rooms
                  </small>
                </p>
                <h4 className="h4">Card title</h4>
                <i
                  className="bi bi-hand-thumbs-up-fill"
                  style={{ color: `green` }}
                ></i>
                <span>Reviews</span>
                <i className="fa-solid fa-location-dot"></i>
                <span className="float-end">Price</span>
              </div>
            </div>
          </div>
          {/* <!-- Card 4 --> */}
          <div className="col">
            <div className="card">
              <img
                src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295027/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2005/house_05_01.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p>
                  <i className="bi bi-geo-alt-fill"></i>
                  <small>
                    Location{' '}
                    <strong>
                      <i className="bi bi-dot"></i>
                    </strong>{' '}
                    number of rooms
                  </small>
                </p>
                <h4 className="h4">Card title</h4>
                <i
                  className="bi bi-hand-thumbs-up-fill"
                  style={{ color: `green` }}
                ></i>
                <span>Reviews</span>
                <i className="fa-solid fa-location-dot"></i>
                <span className="float-end">Price</span>
              </div>
            </div>
          </div>
          {/* <!-- Card 5 --> */}
          <div className="col">
            <div className="card">
              <img
                src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295027/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2006/house_06_01.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p>
                  <i className="bi bi-geo-alt-fill"></i>
                  <small>
                    Location{' '}
                    <strong>
                      <i className="bi bi-dot"></i>
                    </strong>{' '}
                    number of rooms
                  </small>
                </p>
                <h4 className="h4">Card title</h4>
                <i
                  className="bi bi-hand-thumbs-up-fill"
                  style={{ color: `green` }}
                ></i>
                <span>Reviews</span>
                <i className="fa-solid fa-location-dot"></i>
                <span className="float-end">Price</span>
              </div>
            </div>
          </div>
          {/* <!-- Card 6 --> */}
          <div className="col">
            <div className="card">
              <img
                src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295027/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2007/house_07_01.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p>
                  <i className="bi bi-geo-alt-fill"></i>
                  <small>
                    Location{' '}
                    <strong>
                      <i className="bi bi-dot"></i>
                    </strong>{' '}
                    number of rooms
                  </small>
                </p>
                <h4 className="h4">Card title</h4>
                <i
                  className="bi bi-hand-thumbs-up-fill"
                  style={{ color: `green` }}
                ></i>
                <span>Reviews</span>
                <i className="fa-solid fa-location-dot"></i>
                <span className="float-end">Price</span>
              </div>
            </div>
          </div>
          {/* <!-- Card 7 --> */}
          <div className="col">
            <div className="card">
              <img
                src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295027/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2008/house_08_01.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p>
                  <i className="bi bi-geo-alt-fill"></i>
                  <small>
                    Location{' '}
                    <strong>
                      <i className="bi bi-dot"></i>
                    </strong>{' '}
                    number of rooms
                  </small>
                </p>
                <h4 className="h4">Card title</h4>
                <i
                  className="bi bi-hand-thumbs-up-fill"
                  style={{ color: `green` }}
                ></i>
                <span>Reviews</span>
                <i className="fa-solid fa-location-dot"></i>
                <span className="float-end">Price</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Houses
