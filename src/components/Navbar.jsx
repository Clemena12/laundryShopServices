import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
























// // import React from 'react';
// // import '../Navbar.css';

// // const Navbar = () => {
// //   return (
// //     <nav className="Navbar">
// //       <h2>Laundry Shop</h2>
// //       <ul>
// //         <li>Home</li>
// //         <li>Services</li>
// //         <li>Contact</li>
// //       </ul>
// //     </nav>
// //   );
// // };

// // export default Navbar;


// // import React from 'react';
// // import '../Navbar.css';
// // import { Link } from 'react-router-dom';

// // const Navbar = () => {
// //   return (
// //     <nav>
// //       <ul>
// //         <li><Link to="/">Home</Link></li>
// //         <li><Link to="/services">Services</Link></li>
// //         <li><Link to="/contact">Contact</Link></li>
// //       </ul>
// //     </nav>
// //   );
// // };

// // export default Navbar;








// import React from 'react';
// import '../Navbar.css';
// // import '../Pages.css';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     < div>
//     <nav>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/services">Services</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//       </ul>
//     </nav>
//     </div>
//   );
// };

// export default Navbar;

