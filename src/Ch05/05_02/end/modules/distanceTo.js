// calculate distance between two geocoordinates
const distanceTo = ([lat1, lon1, lat2, lon2, unit]) => {
  // const lat1 = values[0];
  // const lon1 = values[1];
  // const lat2 = values[2];
  // const lon2 = values[3];
  // const unit = values[4];
  //const [lat1, lon1, lat2, lon2, unit] = values;
  const rlat1 = Math.PI * lat1 / 180;
  const rlat2 = Math.PI * lat2 / 180;
  const theta = lon1 - lon2;
  const rtheta = Math.PI * theta / 180;
  let dist = Math.sin(rlat1) 
    * Math.sin(rlat2) 
    + Math.cos(rlat1) 
    * Math.cos(rlat2) 
    * Math.cos(rtheta);
  dist = Math.acos(dist);
  dist = dist * 180 / Math.PI;
  dist = dist * 60 * 1.1515;
  if (unit === 'K') { 
    dist = dist * 1.609344; 
  } else if (unit === 'N') { 
    dist = dist * 0.8684; 
  }
  return dist.toFixed(0);
};

export default distanceTo;
