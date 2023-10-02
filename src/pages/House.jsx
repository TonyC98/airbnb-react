// Packages
import { useState } from "react";
// import HouseGalleryPhoto from "./HouseGalleryPhoto";
import Nav from "../components/Nav";

// Component
function House() {
  // States & Variables
  let house = {
    title: "Luxury Villa in Chaweng",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at tempor commodo. Purus in massa tempor nec feugiat nisl. Non curabitur gravida arcu ac tortor. Arcu non sodales neque sodales ut etiam sit amet nisl. Diam maecenas sed enim ut sem viverra aliquet eget. Amet nisl purus in mollis. Viverra vitae congue eu consequat ac felis donec et odio.",
    price: 320,
    booking: false,
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

  const [selectedPhoto, setSelectedPhoto] = useState(house.photos[0]);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [bookingRequested, setBookingRequested] = useState(house.booking);
  const [reviews, setReviews] = useState([
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
  ]);

  // Functions
  function addReview(e) {
    e.preventDefault();

    // clone array to avoid mutating the state (react doesn't like that)
    // const newReviews = [...reviews]; // alternative 1: spread operator (you can research about it)
    const newReviews = reviews.slice(); // alternative 2: slice the pie in 1 piece ^_^

    newReviews.unshift({
      date: "30 February 2029",
      description: e.target.reviewContent.value,
      rating: e.target.reviewVerdict.value,
      author: {
        name: "new reviewer",
        avatar: "https://randomuser.me/api/portraits/men/11.jpg",
      },
    });

    setReviews(newReviews);
    setReviewSubmitted(true);
  }

  function requestBooking(e) {
    e.preventDefault();
    house.booking = true;
    setBookingRequested(house.booking);
  }

  // const myVar = reviewSubmitted ? 'hi' : 'bye'
  // const myVar = reviewSubmitted && 'hi' // if false, myVar = false, if true, myVar = 'hi'
  // const myVar = reviewSubmitted || 'hi' // if reviewSubmitted, then myVar = reviewSubmitted, if not, and 'hi', then myVar = 'hi'

  // if (cond1 || cond2) { // if cond1, then do X, if not, and cond2, then do X, if not, do nothing
  //   // X
  // }

  // Render JSX
  return (
    <div>
      <Nav />
      <div className="border-bottom border-secondary-subtle">
        <div className="container g-0 p-0">
          <div className="row row-cols-2">
            <div
              className="col-6"
              style={{
                backgroundImage: `url(${selectedPhoto})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              {/* main photo */}
              {/* <img src={selectedPhoto} style={{ width: `100%` }} /> */}
            </div>
            <div className="col-6">
              {/* gallery */}
              <div className="row">
                <div className="container">
                  <div className="row row-cols-3 gx-1">
                    {house.photos.map((photo, i) => (
                      // <HouseGalleryPhoto key={i} photo={photo} />
                      <div
                        className="col m-0 g-0 p-4"
                        onClick={() => setSelectedPhoto(photo)}
                      >
                        <img
                          src={photo}
                          key={i}
                          style={{ width: `100%`, cursor: "pointer" }}
                        />
                      </div>
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
              {/* title details */}
              <div className="mb-4">
                <h1>{house.title}</h1>
                <span>
                  <small>
                    <i className="fa-solid fa-location-dot"></i>{" "}
                    {house.location} • {house.rooms} Rooms
                  </small>
                </span>
              </div>
              {/* host details */}
              <div className="container mb-4">
                <div className="row row-cols-2">
                  <div className="col-1">
                    <img
                      src={house.host.avatar}
                      style={{ width: `45px`, borderRadius: `100px` }}
                    />
                  </div>
                  <div className="col">
                    <span className="d-block" style={{ color: `#7b7b7b` }}>
                      <small>Hosted by</small>
                    </span>
                    <span>
                      <strong>{house.host.name}</strong>
                    </span>
                  </div>
                </div>
              </div>
              {/* description */}
              <div className="mb-5">
                <p>{house.description}</p>
              </div>
            </div>
            {/* leave a review */}
            <div>
              <h2>{reviews.length} Reviews</h2>
              {reviewSubmitted ? (
                <div
                  style={{
                    backgroundColor: `#ddd`,
                    borderRadius: `10px`,
                    textAlign: "left",
                  }}
                  className="p-3"
                >
                  <span style={{ display: "block" }}>
                    <strong>Thank you for your review.</strong>
                  </span>
                  <span style={{ display: "block" }}>
                    <em>Sent on DD Month YYY at HH:MM</em>
                  </span>
                </div>
              ) : (
                <div>
                  <span className="d-block">Leave a review</span>
                  <form onSubmit={addReview}>
                    <textarea
                      name="reviewContent"
                      rows="7"
                      className="d-block"
                      style={{ width: `100%` }}
                    ></textarea>
                    <span className="d-block">
                      <i className="fa-solid fa-thumbs-up"></i>{" "}
                      <input type="radio" name="reviewVerdict" value={1} />
                      {"   "}
                      <i className="fa-solid fa-thumbs-down"></i>{" "}
                      <input type="radio" name="reviewVerdict" value={-1} />
                    </span>
                    <button className="btn btn-success">Submit</button>
                  </form>
                </div>
              )}
            </div>
            {/* reviews list */}
            <div className="mt-5">
              <div className="container">
                {reviews.map((review, i) => (
                  <div
                    className="row row-cols-2 gx-5 mb-2 p-1 justify-content-between"
                    style={{ border: `solid 1px #eee`, borderRadius: `10px` }}
                  >
                    <div className="col-1 pt-2">
                      <img
                        src={review.author.avatar}
                        style={{ width: `40px`, borderRadius: `100px` }}
                      />
                    </div>
                    <div className="col-11">
                      <span>
                        <small>{review.date}</small>
                      </span>
                      <h6>{review.author.name}</h6>
                      <p>{review.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-5">
            {/* this cell includes: request booking */}
            {/* <!-- request box --> */}
            {/* if booking == false, replace some content */}
            <div
              className="card"
              style={{ width: `100%`, boxShadow: `0px 5px 10px #00000050` }}
            >
              <div className="card-body">
                <div className="mb-3">
                  <h2 className="card-title">
                    ${house.price}/<small>night</small>
                  </h2>
                  <span>
                    <i className="fa-solid fa-thumbs-up"></i>
                    <small> {reviews.length} Reviews</small>
                  </span>
                </div>
                {bookingRequested ? (
                  <div
                    style={{
                      backgroundColor: `#ddd`,
                      borderRadius: `10px`,
                      textAlign: "left",
                    }}
                    className="p-3"
                  >
                    <span style={{ display: "block" }}>
                      <strong>Thank you for your enquiry.</strong>
                    </span>
                    <span style={{ display: "block" }}>
                      <em>Sent on DD Month YYY at HH:MM</em>
                    </span>
                  </div>
                ) : (
                  <div>
                    <form onSubmit={requestBooking}>
                      <textarea
                        rows="7"
                        placeholder="Send the host a message..."
                        className="d-block mt-3 mb-3"
                        style={{ width: `100%` }}
                      ></textarea>
                      <button className="btn btn-success">
                        Request Booking
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default House;
