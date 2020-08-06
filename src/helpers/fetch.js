import axios from 'axios';

const apiURL = 'http://api.open-notify.org/iss-now.json';
const urlTwo = 'https://api.wheretheiss.at/v1/satellites/25544';

// export function issLocation() {
//   return axios
//     .get(apiURL)
//     .then((res) => res.data.iss_position)
//     .catch((err) => console.log(err));
// }

export function issLocation() {
    return axios
      .get(urlTwo)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }
  
