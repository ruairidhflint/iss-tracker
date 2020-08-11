import { issLocation } from './helpers/fetch';
import { styles } from './helpers/styles';

window.onload = function initMap() {
  renderToMap();
};

function renderToMap() {
  issLocation().then((res) => {
    const options = {
      zoom: 3.7,
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
      map: map,
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



// Adjust 100vh to match phone screen size
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
