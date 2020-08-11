import axios from 'axios';

const apiURL = 'https://api.wheretheiss.at/v1/satellites/25544';

export function issLocation() {
  return axios
    .get(apiURL)
    .then((res) => res.data)
    .catch((err) => console.log(err));
}
