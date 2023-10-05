import Thumbnail from './Thumbnail'
import Nav from '../components/Nav'

function Houses() {
  function sendSearchForm(e) {
    e.preventDefault()
    let search = {
      location: e.target.location.value,
      rooms: e.target.rooms.value,
      maxPrice: e.target.maxPrice.value,
      sort: e.target.sorting.value,
      name: e.target.name.value,
    }
    // console.log(search.location)
    // console.log(search.rooms)
    // console.log(search.price)
    // console.log(search.sort)
    // console.log(search.name)
    console.log(search)
  }

  return (
    <>
      <Nav />
      {/* <!-- Search House Form --> */}
      <form
        className="container text-center mb-5"
        height="30px"
        onSubmit={(e) => sendSearchForm(e)}
      >
        <div className="row">
          {/* <!-- location --> */}
          <div className="input-group mb-3 col">
            <span className="input-group-text" id="basic-addon1">
              <i className="bi bi-geo-alt-fill"></i>
            </span>
            <select className="form-select form-select-lg" name="location">
              <option
                type="text"
                placeholder="Any Location"
                value="Any Location"
              >
                Any Location
              </option>
              <option type="text" value="Koh Phangan">
                Koh Phangan
              </option>
              <option type="text" value="Koh Samui">
                koh Samui
              </option>
              <option type="text" value="Bali">
                Bali
              </option>
            </select>
          </div>
          {/* <!-- rooms --> */}
          <div className="input-group mb-3 col">
            <span className="input-group-text" id="basic-addon1">
              <i className="bi bi-house-door-fill"></i>
            </span>
            <select className="form-select form-select-lg" name="rooms">
              <option type="text" placeholder="Any Rooms">
                Any Rooms
              </option>
              <option type="text" value="1">
                1 room
              </option>
              <option type="text" value="2">
                2 rooms
              </option>
              <option type="text" value="3">
                3 rooms
              </option>
              <option type="text" value="4">
                4 rooms
              </option>
              <option type="text" value="5">
                5 rooms
              </option>
            </select>
          </div>
          {/* <!-- price --> */}
          <div className="input-group mb-3 col">
            <span className="input-group-text" id="basic-addon1">
              {/* <i className="bi bi-arrows-vertical"></i> */}$
            </span>
            <input
              type="number"
              className="form-control"
              placeholder="Max Price"
              aria-label="Username"
              aria-describedby="basic-addon1"
              name="maxPrice"
            />
          </div>
          {/* <!-- sorting --> */}
          <div className="input-group mb-3 col">
            <span className="input-group-text" id="basic-addon1">
              $
            </span>
            <select className="form-select form-select-lg" name="sorting">
              <option type="text" placeholder="Sorting" value="ascending">
                Price (low to high)
              </option>
              <option type="text" value="descending">
                {/* {' '} */}
                Price (high to low)
              </option>
            </select>
          </div>
          {/* <!-- search --> */}
          <div className="input-group mb-3 col">
            {/* <!-- <span class="input-group-text" id="basic-addon1">@</span> --> */}
            <input
              type="text"
              className="form-control"
              placeholder="House Name..."
              aria-label="Username"
              aria-describedby="basic-addon1"
              name="name"
            />
          </div>
          {/* <!-- button --> */}
          <div className="col">
            <button type="submit" className="btn btn-success">
              Search
            </button>
          </div>
        </div>
      </form>
      <Thumbnail />
    </>
  )
}
export default Houses
