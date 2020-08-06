import { issLocation } from './helpers/fetch';
import { styles } from './helpers/styles';

const testDOM = document.getElementById('test');

// window.onload = function test() {
//   setInterval(() => {
//     issLocation().then((res) => {
//       console.log(res);
//     });
//   }, 2000);
// };

window.onload = function initMap() {
  const options = {
    zoom: 3,
    center: { lat: -45.6533, lng: 68.8154 },
    scrollwheel: false,
    streetViewControl: false,
    fullscreenControl: true,
    styles,
  };

  let map = new google.maps.Map(document.getElementById('map'), options);
  var marker = new google.maps.Marker({
    position: { lat: -45.6533, lng: 68.8154 },
    animation: google.maps.Animation.DROP,
    icon: 'src/images/marker1.png',
    map: map,
  });

  var marker2 = new google.maps.Marker({
    position: { lat: -55.6533, lng: 58.8154 },
    icon: 'src/images/marker1.png',
    map: map,
  });
};
