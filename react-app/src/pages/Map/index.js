import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import NavBar from '../../components/Navbar';

const Map = () => {

  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude:44.228039380591895,
    longitude: -76.49489198260729,
    zoom: 14
  });

  return (
    <div>
      <NavBar/>
      <div>
      <ReactMapGL {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoibHVpc21hbmd1YmF0IiwiYSI6ImNreXpiaXpxMDBzYTAyb3FrcnZ0djdjdmIifQ.R4tDVc75hpu24uwFyh2OMQ"
        mapStyle="mapbox://styles/luismangubat/ckyzc7n55002115mxpptxcrvj"
        onViewportChange={nextViewport => setViewport(nextViewport)}>
      </ReactMapGL>
      </div>
    </div>
  )
}

export default Map;
