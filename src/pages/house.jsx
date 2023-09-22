import HouseGalleryPhoto from "./HouseGalleryPhoto";

function House() {
  let gallery = [
    "https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png",
    "https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_02.png",
    "https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_03.png",
    "https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_04.png",
    "https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_05.png",
    "https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_06.png",
    "https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_07.png",
    "https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_08.png",
    "https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_09.png",
  ];

  return (
    <div>
      <div className="p-2 border-bottom border-secondary-subtle">
        {/* header */}
        <div className="container">
          <div className="row row-cols-2 align-items-center">
            <div className="col">
              {/* logo */}
              <img
                src="images/logo-airbnb.png"
                width="100px"
                alt="Airbnb.com"
              />
            </div>
            <div className="col text-end">
              {/* user links */}
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
      <div className="border-bottom border-secondary-subtle">
        <div className="container g-0 p-0">
          <div className="row row-cols-2">
            <div className="col-6">
              {/* main photo */}
              <img src={gallery[0]} style={{ width: `100%` }} />
            </div>
            <div className="col-6">
              {/* gallery */}
              <div className="row">
                <div className="container">
                  <div className="row row-cols-3 gx-1">
                    {gallery.map((photo, i) => (
                      <HouseGalleryPhoto key={i} photo={photo} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-5">
        <div className="row row-cols-2 gx-5 justify-content-between">
          <div className="col-7">
            {/* this cell includes: house details; leave a review; reviews list */}
            {/* house details */}
            <div>
              <h1>Luxury Villa in Chaweng</h1>
              <span>
                <small>
                  <i className="fa-solid fa-location-dot"></i> Koh Samui • 4
                  Rooms
                </small>
              </span>
              <div className="container">
                <div className="row row-cols-2">
                  <div className="col-1">
                    <img
                      src="https://randomuser.me/api/portraits/men/11.jpg"
                      style={{ width: `40px` }}
                    />
                  </div>
                  <div className="col">
                    <span className="d-block">
                      <small>Hosted by</small>
                    </span>
                    <span>Oisin Allen</span>
                  </div>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Risus feugiat in ante metus dictum at tempor commodo. Purus in
                massa tempor nec feugiat nisl. Non curabitur gravida arcu ac
                tortor. Arcu non sodales neque sodales ut etiam sit amet nisl.
                Diam maecenas sed enim ut sem viverra aliquet eget. Amet nisl
                purus in mollis. Viverra vitae congue eu consequat ac felis
                donec et odio.
              </p>
            </div>
            {/* leave a review */}
            <div>
              <h2>0 Reviews</h2>
              <span className="d-block">Leave a review</span>
              <form>
                <textarea rows="7" className="d-block"></textarea>
                <span className="d-block">
                  <i className="fa-solid fa-thumbs-up"></i>{" "}
                  <input type="radio" name="review" />
                  <i className="fa-solid fa-thumbs-down"></i>{" "}
                  <input type="radio" name="review" />
                </span>
                <button type="button" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
            {/* reviews list */}
            <div className="mt-5">
              {/* <div className="card">
                <img
                  src="https://randomuser.me/api/portraits/men/11.jpg"
                  className="card-img-left"
                  style={{ width: `40px` }}
                />
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    DD Month YYYY - HH:MM
                  </h6>
                </div>
              </div> */}
              <div className="card">previous review 02</div>
            </div>
          </div>
          <div className="col-5">
            {/* this cell includes: request booking */}
            {/* <!-- request box --> */}
            <div className="card" style={{ width: `18rem` }}>
              <div className="card-body">
                <h2 className="card-title">$$$$/night</h2>
                <span>
                  <small>X Reviews</small>
                </span>
                <textarea
                  rows="7"
                  placeholder="Send the host a message..."
                  className="d-block"
                ></textarea>
                <a href="#" className="btn btn-success">
                  Request Booking
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default House;
