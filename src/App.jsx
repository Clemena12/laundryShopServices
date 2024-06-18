import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FormPopup from './components/FormPopup';
import './App.css';

function App() {
  const [selectedService, setSelectedService] = useState(null);

  const handleReserve = (service) => {
    setSelectedService(service);
  };

  const handleClosePopup = () => {
    setSelectedService(null);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <header className="App-header">
          <h1>Welcome to Our Laundry Shop</h1>
        </header> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services onReserve={handleReserve} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {selectedService && (
          <FormPopup show={true} handleClose={handleClosePopup} service={selectedService} />
        )}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
























// // // import React, { useState } from 'react';
// // // import './App.css';
// // // import FormPopup from './FormPopup';

// // // function App() {
// // //   const [showPopup, setShowPopup] = useState(false);

// // //   const togglePopup = () => {
// // //     setShowPopup(!showPopup);
// // //   };

// // //   return (
// // //     <div className="App">
// // //       <header className="App-header">
// // //         <h1>React Popup Form</h1>
// // //         <button onClick={togglePopup}>Show Form</button>
// // //       </header>
// // //       <FormPopup show={showPopup} handleClose={togglePopup} />
// // //     </div>
// // //   );
// // // }

// // // export default App;










// // import React, { useState } from 'react';
// // import Navbar from './components/Navbar';
// // import Services from './components/Services';
// // import Footer from './components/Footer';
// // import FormPopup from './components/FormPopup';
// // import './App.css';

// // function App() {
// //   const [selectedService, setSelectedService] = useState(null);

// //   const handleReserve = (service) => {
// //     setSelectedService(service);
// //   };

// //   const handleClosePopup = () => {
// //     setSelectedService(null);
// //   };

// //   return (
// //     <div className="App">
// //       <Navbar />
// //       <header className="App-header">
// //         <h1>Welcome to Our Laundry Shop</h1>
// //       </header>
// //       <Services onReserve={handleReserve} />
// //       {selectedService && (
// //         <FormPopup show={true} handleClose={handleClosePopup} service={selectedService} />
// //       )}
// //       <Footer />
// //     </div>
// //   );
// // }

// // export default App;










// // import React, { useState } from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import Navbar from './components/Navbar';
// // import Services from './components/Services';
// // import Footer from './components/Footer';
// // import FormPopup from './components/FormPopup';
// // import './App.css';

// // function App() {
// //   const [selectedService, setSelectedService] = useState(null);

// //   const handleReserve = (service) => {
// //     setSelectedService(service);
// //   };

// //   const handleClosePopup = () => {
// //     setSelectedService(null);
// //   };

// //   return (
// //     <Router>
// //       <div className="App">
// //         <Navbar />
// //         <header className="App-header">
// //           <h1>Welcome to Our Laundry Shop</h1>
// //         </header>
// //         <Routes>
// //           <Route path="/" element={<Services onReserve={handleReserve} />} />
// //           <Route path="/services" element={<Services onReserve={handleReserve} />} />
// //           {selectedService && (
// //             <Route
// //               path="/reserve"
// //               element={<FormPopup show={true} handleClose={handleClosePopup} service={selectedService} />}
// //             />
// //           )}
// //         </Routes>
// //         <Footer />
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Services from './components/Services';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import FormPopup from './components/FormPopup';
// import './App.css';

// function App() {
//   const [selectedService, setSelectedService] = useState(null);

//   const handleReserve = (service) => {
//     setSelectedService(service);
//   };

//   const handleClosePopup = () => {
//     setSelectedService(null);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <header className="App-header">
//           <h1>Welcome to Our Laundry Shop</h1>
//         </header>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/services" element={<Services onReserve={handleReserve} />} />
//           <Route path="/contact" element={<Contact />} />
//           {selectedService && (
//             <Route
//               path="/reserve"
//               element={<FormPopup show={true} handleClose={handleClosePopup} service={selectedService} />}
//             />
//           )}
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
