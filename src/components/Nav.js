import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="p-2 border-bottom border-secondary-subtle">
      {/* header */}
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
            <Link to="/profile" className="btn btn-outline-secondary me-1">
              <img
                src="https://randomuser.me/api/portraits/men/11.jpg"
                className="me-1"
                style={{ width: `20px`, borderRadius: `100%` }}
              />
              Oisin
            </Link>
            <Link to="/l"></Link>
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
  );
}
