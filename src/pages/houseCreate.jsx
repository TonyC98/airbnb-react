function HouseCreate() {
  return (
    <div>
      <div className="p-2">
        <div className="container">
          <div className="row row-cols-2 align-items-center">
            <div className="col">
              <img
                src="images/logo-airbnb.png"
                style={{ width: `100px` }}
                alt="Airbnb.com"
              />
            </div>
            <div className="col text-end">
              <a
                href="www.google.com"
                type="button"
                className="btn btn-outline-secondary"
              >
                <img
                  src="https://randomuser.me/api/portraits/men/11.jpg"
                  style={{ width: `20px` }}
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
        <form>
          <div className="form-group">
            <label for="">Short Title</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label for="">Description</label>
            <textarea className="form-control" rows="9"></textarea>
          </div>
          <div className="form-group">
            <label for="">Number of Rooms</label>
            <input type="number" className="form-control" />
          </div>
          <div className="form-group">
            <label for="">Location</label>
            <select className="form-control">
              <option>Koh Samui</option>
              <option>Koh Phangan</option>
              <option>Bali</option>
            </select>
          </div>
          <div className="form-group">
            <label for="">Price (per night)</label>
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">
                $
              </span>
              <input type="number" className="form-control" />
            </div>
          </div>
          <div className="form-group">
            <label for="">Add Photos (up to 9)</label>
            <input
              type="text"
              className="form-control"
              placeholder="http://..."
            />
            <input
              type="text"
              className="form-control"
              placeholder="http://..."
            />
            <input
              type="text"
              className="form-control"
              placeholder="http://..."
            />
            <input
              type="text"
              className="form-control"
              placeholder="http://..."
            />
            <input
              type="text"
              className="form-control"
              placeholder="http://..."
            />
            <input
              type="text"
              className="form-control"
              placeholder="http://..."
            />
            <input
              type="text"
              className="form-control"
              placeholder="http://..."
            />
            <input
              type="text"
              className="form-control"
              placeholder="http://..."
            />
            <input
              type="text"
              className="form-control"
              placeholder="http://..."
            />
          </div>
          <button type="button" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default HouseCreate;
