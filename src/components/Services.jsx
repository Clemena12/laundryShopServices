import React from 'react';
import '../Services.css';
import washAndFoldImage from '../components/larundry.jpg';
import dryCleaningImage from '../components/larundry.jpg';
import ironingImage from '../components/larundry.jpg';

const services = [
  { id: 1, name: 'Wash & Fold', price: '$10 per load', description: 'Standard wash and fold service.', image: washAndFoldImage },
  { id: 2, name: 'Dry Cleaning', price: '$15 per item', description: 'Professional dry cleaning service.', image: dryCleaningImage },
  { id: 3, name: 'Ironing', price: '$5 per item', description: 'Expert ironing for your clothes.', image: ironingImage },
];

const Services = ({ onReserve }) => {
  return (
    <div className="services">
      <h2>Our Services</h2>
      <div className="service-list">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.name} className="service-image" />
            <h3>{service.name}</h3>
            <p>{service.price}</p>
            <p>{service.description}</p>
            <button onClick={() => onReserve(service)}>Reserve</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

























// import React from 'react';
// import '../Services.css';

// const Services = ({ onReserve }) => {
//   const services = [
//     { id: 1, name: 'Wash & Fold', price: '$10 per load', description: 'Standard wash and fold service.' },
//     { id: 2, name: 'Dry Cleaning', price: '$15 per item', description: 'Professional dry cleaning service.' },
//     { id: 3, name: 'Ironing', price: '$5 per item', description: 'Expert ironing for your clothes.' },
//   ];

//   return (
//     <div className="services">
//       {/* <header className="App-header">
//           <h1>Welcome to Our Laundry Shop</h1>
//         </header>  */}
//       <h2>Our Services</h2>
//       <div className="service-list">
//         {services.map(service => (
//           <div key={service.id} className="service-card">
//             <h3>{service.name}</h3>
//             <p>{service.price}</p>
//             <p>{service.description}</p>
//             <button onClick={() => onReserve(service)}>Reserve</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;

























// // import React from 'react';
// // import '../Services.css';
// // import laundryImage from '../components/larundry.jpg';

// // const services = [
// //   { id: 1, name: 'Wash & Fold', price: '$10 per load', description: 'Standard wash and fold service.' },
// //   { id: 2, name: 'Dry Cleaning', price: '$15 per item', description: 'Professional dry cleaning service.' },
// //   { id: 3, name: 'Ironing', price: '$5 per item', description: 'Expert ironing for your clothes.' },
// // ];

// // const Services = ({ onReserve }) => {
// //   return (
// //     <div className="Services">
// //       <h2>Our Services</h2>
// //       <div className="service-list">
// //         {services.map(service => (
// //           <div key={service.id} className="service-card">
// //             <img src={laundryImage} alt={service.name} />
// //             <h3>{service.name}</h3>
// //             <p>{service.price}</p>
// //             <p>{service.description}</p>
// //             <button onClick={() => onReserve(service)}>Reserve</button>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Services;






// // // import React from 'react';
// // // import '../Services.css';
// // // // import '../Pages.css';

// // // const Services = ({ onReserve }) => {
// // //   return (
// // //     <div className="Services">
// // //       <h2>Our Services</h2>
// // //       {/* Add service listings and reservation functionality */}
// // //     </div>
// // //   );
// // // };

// // // export default Services;

