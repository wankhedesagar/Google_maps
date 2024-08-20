// import React, { Component, useState } from 'react';
// // import logo from './logo.svg';
// import './App.css';
// import {Map, GoogleApiWrapper} from 'google-map-react'
// import Map from './component/Map'

// function App() {
//   const [selectedLocation,setSelectedLocation] = useState({
//     lat:28.704060,
//     lng:77.102493,
//   })
//     return (
//       <div>
//         <Map/>
//       </div>
//     )
//       }


// export default App;



// import React from 'react'
// import { GoogleMap,useLoadScript,MarkerF} from '@react-google-maps/api'

// function Map() {
//     const {isLoaded,loadError} = useLoadScript({
//         googleMapsApiKey:'AIzaSyDL0dyfqJQ9CSzIeOp7SYmiFI2icUAX9CQ'
//     })
//     const mapRef = React.useRef()
//     const onMapLoad = React.useCallback((map) => {
//         mapRef.current = map;
//     },[])
//     if(loadError) return "Error";
//     if(isLoaded) return 'Maps';
//   return (
//     <div style={{marginTop:"50px"}}>
//         <GoogleMap mapContainerStyle={{
//             height:"800px"
//         }}
//         center={selectedLocation}
//         zoom={13}
//         onLoad={onMapLoad}
//         >

//         </GoogleMap>
//     </div>
//   )
// }

// export default Map