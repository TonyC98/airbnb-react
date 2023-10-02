export default function Reviews() {
  return (
    <>
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
    </>
  );
}
