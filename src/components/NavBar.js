/* // // NAVIGATION LOGO BAR WITH THE USER LOGGED IN */

import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="navbar bg-white">
      <div className="container-fluid">
        <img
          src="logo-airbnb.png"
          alt="airbnb logo"
          height="50"
          className="navbar-brand"
        />
        <div>
          <a href="#" type="button" className="btn btn-outline-dark">
            <img
              src="https://randomuser.me/api/portraits/men/11.jpg"
              alt="User Photo"
              height="20"
            />
            User Name
          </a>
          <a href="#" type="button" className="btn btn-outline-dark">
            Logout
          </a>
        </div>
      </div>
    </nav>
    /* // NNAVIGATION LOGO BAR WITHOUT USER
      // <nav className="navbar bg-white">
      //   <div className="container-fluid">
      //     <img
      //       src="logo-airbnb.png"
      //       alt="airbnb logo"
      //       height="50"
      //       className="navbar-brand"
      //     />
      //     <div>
      //       <a href="#" type="button" className="btn btn-outline-dark">
      //         Sign in
      //       </a>
      //     </div>
      //   </div>
      // </nav> */
  )
}

// NAVIGATION LOGO BAR WITH THE USER LOGGED IN
// <div className="p-2 border-bottom border-secondary-subtle">
//   {/* header */}
//   <div className="container">
//     <div className="row row-cols-2 align-items-center">
//       <div className="col">
//         {/* logo */}
//         <img
//           src="images/logo-airbnb.png"
//           style={{ width: '100px' }}
//           alt="Airbnb.com"
//         />
//       </div>
//       <div className="col text-end">
//         {/* user links */}
//         <Link to="/profile" className="btn btn-outline-secondary me-1">
//           <img
//             src="https://randomuser.me/api/portraits/men/11.jpg"
//             alt="User Photo"
//             className="me-1"
//             style={{ width: `20px`, borderRadius: `100%` }}
//           />
//           UserName
//         </Link>
//         <Link to="/l"></Link>
//         <a type="button" className="btn btn-outline-secondary">
//           Logout
//         </a>
//       </div>
//     </div>
//   </div>
// </div>
