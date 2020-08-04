import { issLocation } from './helpers/fetch';

const testDOM = document.getElementById('test');

// window.onload = function test() {
//   setInterval(() => {
//     issLocation().then((res) => {
//       writeToDom(res);
//     });
//   }, 2000);
// };

// function writeToDom(data) {
//   const h3 = document.createElement('h3');
//   h3.textContent = `Longitude: ${data.longitude}, Latitude: ${data.latitude}`;
//   testDOM.append(h3);
// }
