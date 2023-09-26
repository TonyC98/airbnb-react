function HouseCreate() {
  function addHouse(e) {
    e.preventDefault();
    let newHouse = {
      title: e.target.newHouseTitle.value,
      description: e.target.newHouseDesc.value,
      price: e.target.newHousePrice.value,
      booking: false,
      location: e.target.newHouseLocation.value,
      rooms: e.target.newHouseRooms.value,
      rating: 0,
      photos: [
        e.target.photo01.value,
        e.target.photo02.value,
        e.target.photo03.value,
        e.target.photo04.value,
        e.target.photo05.value,
        e.target.photo06.value,
        e.target.photo07.value,
        e.target.photo08.value,
        e.target.photo09.value,
      ],
      host: {
        name: "name",
        avatar: "https://randomuser.me/api/portraits/men/11.jpg",
      },
    };
    console.log(newHouse.photos);
    console.log(newHouse);
    // console.log(
    //   e.target.newHouseTitle.value,
    //   e.target.newHouseDesc.value,
    //   e.target.newHouseRooms.value
    // );
  }

  return (
    <div>
      <div className="p-2">
        <div className="container">
          <div className="row row-cols-2 align-items-center">
            <div className="col">
              {/* logo */}
              <img
                src="images/logo-airbnb.png"
                style={{ width: "100px" }}
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
        <form onSubmit={addHouse} className="mb-5">
          <div className="form-group mb-2">
            <label for="">Short Title</label>
            <input name="newHouseTitle" type="text" className="form-control" />
          </div>
          <div className="form-group mb-2">
            <label for="">Description</label>
            <textarea
              name="newHouseDesc"
              className="form-control"
              rows="9"
            ></textarea>
          </div>
          <div className="form-group mb-2">
            <label for="">Number of Rooms</label>
            <input
              name="newHouseRooms"
              type="number"
              className="form-control"
            />
          </div>
          <div className="form-group mb-2">
            <label for="">Location</label>
            <select name="newHouseLocation" className="form-control">
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
              placeholder="http://..."
            />
            <input
              type="text"
              name="photo02"
              className="form-control mb-1"
              placeholder="http://..."
            />
            <input
              type="text"
              name="photo03"
              className="form-control mb-1"
              placeholder="http://..."
            />
            <input
              type="text"
              name="photo04"
              className="form-control mb-1"
              placeholder="http://..."
            />
            <input
              type="text"
              name="photo05"
              className="form-control mb-1"
              placeholder="http://..."
            />
            <input
              type="text"
              name="photo06"
              className="form-control mb-1"
              placeholder="http://..."
            />
            <input
              type="text"
              name="photo07"
              className="form-control mb-1"
              placeholder="http://..."
            />
            <input
              type="text"
              name="photo08"
              className="form-control mb-1"
              placeholder="http://..."
            />
            <input
              type="text"
              name="photo09"
              className="form-control mb-1"
              placeholder="http://..."
            />
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default HouseCreate;

// rename commit
