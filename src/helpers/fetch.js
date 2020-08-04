import axios from 'axios';

const apiURL = 'http://api.open-notify.org/iss-now.json';

export function issLocation() {
  return axios
    .get(apiURL)
    .then((res) => res.data.iss_position)
    .catch((err) => console.log(err));
}
