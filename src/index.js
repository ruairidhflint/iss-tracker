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
  renderToMap();
};

function renderToMap() {
  issLocation().then((res) => {
    const options = {
      zoom: 4,
      center: { lat: Number(res.latitude), lng: Number(res.longitude) },
      scrollwheel: false,
      streetViewControl: false,
      fullscreenControl: true,
      styles,
    };

    let map = new google.maps.Map(document.getElementById('map'), options);

    const initialMarker = new google.maps.Marker({
      position: {
        lat: Number(res.latitude),
        lng: Number(res.longitude),
      },
      icon: 'src/images/marker1.png',
      map: map
    });

    setInterval(() => {
      issLocation().then((res) => {
        createMarker(res);
      });
    }, 3000);

    function createMarker(position) {
      const marker = new google.maps.Marker({
        position: {
          lat: Number(position.latitude),
          lng: Number(position.longitude),
        },
        icon: 'src/images/marker1.png',
      });

      return marker.setMap(map);
    }
  });
}
