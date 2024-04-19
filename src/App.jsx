import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import MainPage from './components/MainPage';

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {showLoader ? (
        <Loader />
      ) : (
        <MainPage />
      )}
    </>
  );
}

export default App;

// import React, { useState, useEffect } from 'react';
// import Loader from './components/Loader';
// import MainPage from './components/MainPage';

// function App() {
//   const [showLoader, setShowLoader] = useState(true);
//   const [dataLoaded, setDataLoaded] = useState(false); // Track if data for MainPage is loaded

//   useEffect(() => {
//     // Simulate fetching data or performing initialization
//     const fetchData = async () => {
//       try {
//         // Simulated data fetching delay
//         await new Promise(resolve => setTimeout(resolve, 5000));
//         // Data loading complete
//         setDataLoaded(true);
//         // Hide the loader after 5 seconds
//         setTimeout(() => {
//           setShowLoader(false);
//         }, 5000);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();

//   }, []);

//   return (
//     <>
//       {showLoader ? (
//         <Loader />
//       ) : (
//         <MainPage dataLoaded={dataLoaded} />
//       )}
//     </>
//   );
// }

// export default App;

