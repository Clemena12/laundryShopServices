import React from 'react';
import '../FormPopup.css';

const FormPopup = ({ show, handleClose, service }) => {
  if (!show) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    handleClose();
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Reserve {service.name}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Phone:
            <input type="tel" name="phone" required />
          </label>
          <button type="submit">Submit</button>
          <button type="button" onClick={handleClose}>Close</button>
        </form>
      </div>
    </div>
  );
};

export default FormPopup;




















// // import React from 'react';
// // import './Popup.css';

// // const FormPopup = ({ show, handleClose, service }) => {
// //   return (
// //     show ? (
// //       <div className="modal">
// //         <div className="modal-content">
// //           <span className="close" onClick={handleClose}>&times;</span>
// //           <h2>Reserve {service.name}</h2>
// //           <form>
// //             <label>
// //               Name:
// //               <input type="text" name="name" />
// //             </label>
// //             <label>
// //               Email:
// //               <input type="email" name="email" />
// //             </label>
// //             <label>
// //               Details:
// //               <textarea name="details"></textarea>
// //             </label>
// //             <button type="submit">Submit</button>
// //           </form>
// //         </div>
// //       </div>
// //     ) : null
// //   );
// // };

// // export default FormPopup;





// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../FormPopup.css';

// function FormPopup({ show, handleClose, service }) {
//   const navigate = useNavigate();

//   const handleClosePopup = () => {
//     handleClose();
//     navigate('/services');
//   };

//   return (
//     show && (
//       <div className="form-popup">
//         <div className="form-popup-content">
//           <span className="close" onClick={handleClosePopup}>&times;</span>
//           <h2>Reserve Service: {service.name}</h2>
//           {/* Add form fields here */}
//         </div>
//       </div>
//     )
//   );
// }

// export default FormPopup;

