import React, { useEffect, useState } from 'react';
import '../Home.css'; // Adjust the path according to your project structure
import larundry1 from '../components/larundry.jpg';
import larundry2 from '../components/ExpressWash2.png';
import larundry3 from '../components/larundry.jpg';

const backgroundImages = [larundry1, larundry2, larundry3];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home" style={{ backgroundImage: `url(${backgroundImages[currentImage]})` }}>
      <h2>Welcome to Our Laundry Shop</h2>
      <p>We provide the best laundry services in town.</p>
    </div>
  );
};

export default Home;
















// import React, { useEffect, useState } from 'react';
// import '../Home.css'; // Adjust the path according to your project structure

// const backgroundImages = [
//   '../components/larundry.jpg',
//   '../components/larundry.jpg',
//   '../components/larundry.jpg'
// ];

// const Home = () => {
//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prevImage) => (prevImage + 1) % backgroundImages.length);
//     }, 5000); // Change image every 5 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="home" style={{ backgroundImage: `url(${backgroundImages[currentImage]})` }}>
//       <h2>Welcome to Our Laundry Shop</h2>
//       <p>We provide the best laundry services in town.</p>
//     </div>
//   );
// };

// export default Home;













// import React from 'react';
// import '../Home.css';

// const Home = () => {
//   return (
//     <div className="home">
//       {/* <header className="App-header">
//           <h1>Welcome to Our Laundry Shop</h1>
//         </header>  */}
//       <h2>Welcome to Our Laundry Shop</h2>
//       <p>We provide the best laundry services in town.</p>
//     </div>
//   );
// };

// export default Home;














// import React from 'react';
// import '../Home.css';
// import Image from '../components/larundry.jpg';
// const Home = () => {
//   return (
//     <div className="Home">
//         <img src={Image} alt="Picture" />
      
//       <div>
      
//       <h2>Welcome to Our Laundry Shop</h2>
//       <p>We provide the best laundry services in town.</p>
//       </div>
//     </div>
 
//   );
// };

// export default Home;

// import React from 'react';
// // import '../Home.css';
// import '../Pages.css';

// const Home = () => {
//   return (
//     <div className="Home">
//       <h2>Welcome to Our Laundry Shop</h2>
//       <p>We provide the best laundry services in town.</p>
//     </div>
//   );
// };

// export default Home;
