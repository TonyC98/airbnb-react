function HouseEdit() {
  return (
    <>
      <div class="p-2">
        {/* <!-- NAVIGATION LOGO BAR WITH THE USER LOGGED IN  --> */}
        <nav className="navbar bg-white">
          <div className="container-fluid">
            <img
              src="images/logo-airbnb.png"
              alt="airbnb logo"
              height="50"
              className="navbar-brand"
            />
            <div>
              <a href="#" type="button" className="btn btn-outline-dark">
                <img
                  src="https://randomuser.me/api/portraits/men/11.jpg"
                  alt="User Photo"
                  height="20px"
                />
                User Name
              </a>
              <a href="#" type="button" className="btn btn-outline-dark">
                Logout
              </a>
            </div>
          </div>
        </nav>
        {/* <!-- NAVIGATION LOGO BAR WITHOUT USER  --> */}
        {/* <!-- <nav className="navbar bg-white">
            <div className="container-fluid">
              <img src="images/logo-airbnb.png" alt="airbnb logo"  height="50" className="navbar-brand"/>
              <div>
                <a href="#" type="button" className="btn btn-outline-dark" >Sign in</a>
              </div>
            </div>
          </nav> -->
            <!-- <div className="container">
              <div className="row row-cols-2 align-items-center">
                <div className="col">
                  <img src="images/logo-airbnb.png" width="100px" alt="Airbnb.com" />
                </div>
                <div className="col text-end">
                  <a href="www.google.com" type="button" className="btn btn-outline-secondary">
                    <img src="https://randomuser.me/api/portraits/men/11.jpg" width="20px" />
                    Oisin
                  </a>
                  <a href="www.google.com" type="button" className="btn btn-outline-secondary">Logout</a>
                </div>
              </div>
            </div>  */}
      </div>
      <div className="container pt-5">
        <h1>Edit House</h1>
        <form>
          <div className="form-group">
            <label for="">Short Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="[HOUSE NAME TO BE PULLED FROM EXISTING LISTING]"
            />
          </div>
          <div className="form-group">
            <label for="">Description</label>
            <textarea className="form-control" rows="9">
              [HOUSE DESCRIPTION TO BE PULLED FROM EXISTING LISTING] Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Deserunt eveniet
              nemo amet quisquam explicabo veritatis eligendi, repudiandae
              facilis expedita nulla libero dolores cum eius doloribus eos
              maxime provident autem voluptates!
            </textarea>
          </div>
          <div className="form-group">
            <label for="">Number of Rooms</label>
            <input type="number" className="form-control" />
            {/* <!-- number to be pulled --> */}
          </div>
          <div className="form-group">
            <label for="">Location</label>
            <select className="form-control">
              <option>Koh Samui</option>
              <option>Koh Phangan</option>
              <option>Bali</option>
            </select>
            {/* <!-- location to be pulled --> */}
          </div>
          <div className="form-group">
            <label for="">Price (per night)</label>
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">
                $
              </span>
              <input type="number" className="form-control" />
            </div>
            {/* <!-- price per night to be pulled --> */}
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
            {/* <!-- photo urls to be pulled --> */}
          </div>
          <button type="button" className="btn btn-success d-block">
            Save Changes
          </button>
          <button type="button" className="btn btn-danger d-block">
            Delete House
          </button>
        </form>
      </div>
    </>
  )
}
export default HouseEdit
