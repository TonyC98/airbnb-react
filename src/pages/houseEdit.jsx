function HouseEdit() {
  return (
    <div>
      <div className="p-2">
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
              <a
                href="www.google.com"
                type="button"
                className="btn btn-outline-secondary me-1"
              >
                <img
                  src="https://randomuser.me/api/portraits/men/11.jpg"
                  className="me-1"
                  style={{ width: `20px`, borderRadius: `100%` }}
                />
                Oisin
              </a>
              <a
                href="www.google.com"
                type="button"
                className="btn btn-outline-secondary"
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-5">
        <h1>List a House</h1>
        <form className="mb-5">
          {/* onSubmit={modifyHouse} */}
          <div className="form-group mb-2">
            <label for="">Short Title</label>
            <input
              name="newHouseTitle"
              type="text"
              placeholder="[get house name]"
              className="form-control"
            />
          </div>
          <div className="form-group mb-2">
            <label for="">Description</label>
            <textarea
              name="newHouseDesc"
              className="form-control"
              rows="9"
              placeholder="[get house description]"
            ></textarea>
          </div>
          <div className="form-group mb-2">
            <label for="">Number of Rooms</label>
            <input
              name="newHouseRooms"
              type="number"
              placeholder="[get house rooms]"
              className="form-control"
            />
          </div>
          <div className="form-group mb-2">
            <label for="">Location</label>
            <select name="newHouseLocation" className="form-control">
              {/* receive and autoselect location */}
              <option>Koh Samui</option>
              <option>Koh Phangan</option>
              <option>Bali</option>
            </select>
          </div>
          <div className="form-group mb-2">
            <label for="">Price (per night)</label>
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">
                $
              </span>
              <input
                name="newHousePrice"
                type="number"
                placeholder="[get house price]"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group mb-3">
            <label for="">Add Photos (up to 9)</label>
            <input
              type="text"
              name="photo01"
              className="form-control mb-1"
              placeholder="get"
            />
            <input
              type="text"
              name="photo02"
              className="form-control mb-1"
              placeholder="get"
            />
            <input
              type="text"
              name="photo03"
              className="form-control mb-1"
              placeholder="get"
            />
            <input
              type="text"
              name="photo04"
              className="form-control mb-1"
              placeholder="get"
            />
            <input
              type="text"
              name="photo05"
              className="form-control mb-1"
              placeholder="get"
            />
            <input
              type="text"
              name="photo06"
              className="form-control mb-1"
              placeholder="get"
            />
            <input
              type="text"
              name="photo07"
              className="form-control mb-1"
              placeholder="get"
            />
            <input
              type="text"
              name="photo08"
              className="form-control mb-1"
              placeholder="get"
            />
            <input
              type="text"
              name="photo09"
              className="form-control mb-1"
              placeholder="get"
            />
          </div>
          <button className="btn btn-success d-block mb-2">Save Changes</button>
          <button className="btn btn-danger d-block mb-2">Delete House</button>
        </form>
      </div>
    </div>
  )
}

export default HouseEdit

// rename commit
