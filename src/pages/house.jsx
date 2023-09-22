import HouseGalleryPhoto from "./HouseGalleryPhoto";

function House() {
  let house = {
    title: "Luxury Villa in Chaweng",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at tempor commodo. Purus in massa tempor nec feugiat nisl. Non curabitur gravida arcu ac tortor. Arcu non sodales neque sodales ut etiam sit amet nisl. Diam maecenas sed enim ut sem viverra aliquet eget. Amet nisl purus in mollis. Viverra vitae congue eu consequat ac felis donec et odio.",
    price: 320,
    booking: true,
    location: "Koh Samui",
    rooms: 4,
    rating: -1,
    photos: [
      "https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png",
      "https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_02.png",
      "https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_03.png",
      "https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_04.png",
      "https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_05.png",
      "https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_06.png",
      "https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_07.png",
      "https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_08.png",
      "https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_09.png",
    ],
    host: {
      name: "Oisin Allen",
      avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    },
  };

  let reviews = [
    {
      date: "02 February 2023",
      description: "it sux. 3/10.",
      rating: -1,
      author: {
        name: "Hongle Bong",
        avatar: "https://randomuser.me/api/portraits/men/11.jpg",
      },
    },
    {
      date: "05 May 2023",
      description: "nice. 8/10.",
      rating: 1,
      author: {
        name: "Float Aloft",
        avatar: "https://randomuser.me/api/portraits/men/11.jpg",
      },
    },
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
              <img src={house.photos[0]} style={{ width: `100%` }} />
            </div>
            <div className="col-6">
              {/* gallery */}
              <div className="row">
                <div className="container">
                  <div className="row row-cols-3 gx-1">
                    {house.photos.map((photo, i) => (
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
              <h1>{house.title}</h1>
              <span>
                <small>
                  <i className="fa-solid fa-location-dot"></i> {house.location}{" "}
                  • {house.rooms} Rooms
                </small>
              </span>
              <div className="container">
                <div className="row row-cols-2">
                  <div className="col-1">
                    <img src={house.host.avatar} style={{ width: `40px` }} />
                  </div>
                  <div className="col">
                    <span className="d-block">
                      <small>Hosted by</small>
                    </span>
                    <span>{house.host.name}</span>
                  </div>
                </div>
              </div>
              <p>{house.description}</p>
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
              <div className="container">
                {/* review #1 */}
                <div className="row row-cols-2 gx-5 justify-content-between">
                  <div className="col-1">
                    <img
                      src="https://randomuser.me/api/portraits/men/11.jpg"
                      style={{ width: `40px` }}
                    />
                  </div>
                  <div className="col-11">
                    <span>
                      <small>DD Month YYY - HH:MM</small>
                    </span>
                    <h6>Guest Name</h6>
                    <p>
                      sample review text Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Deserunt, asperiores! Corporis dolorem
                      facere sequi esse, libero tenetur, odio et culpa fugit
                      nesciunt cum exercitationem temporibus quia, ad maiores
                      perferendis quidem?
                    </p>
                  </div>
                </div>
                {/* review #2 */}
                <div className="row row-cols-2 gx-5 justify-content-between">
                  <div className="col-1">
                    <img
                      src="https://randomuser.me/api/portraits/men/11.jpg"
                      style={{ width: `40px` }}
                    />
                  </div>
                  <div className="col-11">
                    <span>
                      <small>DD Month YYY - HH:MM</small>
                    </span>
                    <h6>Guest Name</h6>
                    <p>
                      sample review text Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Deserunt, asperiores! Corporis dolorem
                      facere sequi esse, libero tenetur, odio et culpa fugit
                      nesciunt cum exercitationem temporibus quia, ad maiores
                      perferendis quidem?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-5">
            {/* this cell includes: request booking */}
            {/* <!-- request box --> */}
            {/* if booking == false, replace some content */}
            <div className="card" style={{ width: `18rem` }}>
              <div className="card-body">
                <h2 className="card-title">${house.price}/night</h2>
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
