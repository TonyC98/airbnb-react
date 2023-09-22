export default function HouseReview(props) {
  return (
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
          sample review text Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Deserunt, asperiores! Corporis dolorem facere sequi esse, libero
          tenetur, odio et culpa fugit nesciunt cum exercitationem temporibus
          quia, ad maiores perferendis quidem?
        </p>
      </div>
    </div>
  );
}
