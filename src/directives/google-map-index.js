/* global google */

function googleMapIndex() {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="google-map-index is-full-desktop"></div>',
    scope: {
      center: '=',
      bathroom: '='
    },
    link($scope, $element) {

      const map = new google.maps.Map($element[0], {
        zoom: 16,
        center: $scope.center,
        minZoom: 10,
        styles: [
          {
            'featureType': 'all',
            'elementType': 'labels',
            'stylers': [
              {
                'visibility': 'on'
              }
            ]
          },
          {
            'featureType': 'all',
            'elementType': 'labels.text',
            'stylers': [
              {
                'visibility': 'on'
              }
            ]
          },
          {
            'featureType': 'all',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'saturation': 36
              },
              {
                'color': '#dee6f0'
              },
              {
                'lightness': 40
              },
              {
                'visibility': 'on'
              }
            ]
          },
          {
            'featureType': 'all',
            'elementType': 'labels.text.stroke',
            'stylers': [
              {
                'visibility': 'off'
              },
              {
                'color': '#000000'
              },
              {
                'lightness': 16
              }
            ]
          },
          {
            'featureType': 'all',
            'elementType': 'labels.icon',
            'stylers': [
              {
                'visibility': 'off'
              },
              {
                'hue': '#ff0000'
              }
            ]
          },
          {
            'featureType': 'administrative',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'color': '#353c44'
              },
              {
                'lightness': 20
              }
            ]
          },
          {
            'featureType': 'administrative',
            'elementType': 'geometry.stroke',
            'stylers': [
              {
                'color': '#000000'
              },
              {
                'lightness': 17
              },
              {
                'weight': 1.2
              }
            ]
          },
          {
            'featureType': 'landscape',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#000000'
              },
              {
                'lightness': 20
              }
            ]
          },
          {
            'featureType': 'landscape',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'color': '#1c1e25'
              }
            ]
          },
          {
            'featureType': 'landscape.man_made',
            'elementType': 'labels.text',
            'stylers': [
              {
                'visibility': 'on'
              }
            ]
          },
          {
            'featureType': 'landscape.man_made',
            'elementType': 'labels.icon',
            'stylers': [
              {
                'visibility': 'on'
              },
              {
                'hue': '#e0ff00'
              }
            ]
          },
          {
            'featureType': 'poi',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#000000'
              },
              {
                'lightness': 21
              }
            ]
          },
          {
            'featureType': 'poi',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'color': '#1e212b'
              }
            ]
          },
          {
            'featureType': 'poi',
            'elementType': 'labels.text',
            'stylers': [
              {
                'visibility': 'on'
              }
            ]
          },
          {
            'featureType': 'poi',
            'elementType': 'labels.icon',
            'stylers': [
              {
                'visibility': 'on'
              }
            ]
          },
          {
            'featureType': 'road.highway',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'color': '#00cebd'
              },
              {
                'lightness': 17
              },
              {
                'saturation': '11'
              }
            ]
          },
          {
            'featureType': 'road.highway',
            'elementType': 'geometry.stroke',
            'stylers': [
              {
                'color': '#000000'
              },
              {
                'lightness': 29
              },
              {
                'weight': 0.2
              }
            ]
          },
          {
            'featureType': 'road.highway',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'visibility': 'simplified'
              }
            ]
          },
          {
            'featureType': 'road.highway',
            'elementType': 'labels.icon',
            'stylers': [
              {
                'hue': '#ff7a00'
              },
              {
                'saturation': '79'
              },
              {
                'visibility': 'on'
              },
              {
                'lightness': '-33'
              },
              {
                'gamma': '0.63'
              }
            ]
          },
          {
            'featureType': 'road.arterial',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#000000'
              },
              {
                'lightness': 18
              }
            ]
          },
          {
            'featureType': 'road.arterial',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'color': '#256a72'
              },
              {
                'saturation': '61'
              }
            ]
          },
          {
            'featureType': 'road.local',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#000000'
              },
              {
                'lightness': 16
              }
            ]
          },
          {
            'featureType': 'road.local',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'gamma': '1'
              },
              {
                'lightness': '0'
              },
              {
                'color': '#2d414b'
              }
            ]
          },
          {
            'featureType': 'transit',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#000000'
              },
              {
                'lightness': 19
              }
            ]
          },
          {
            'featureType': 'transit.line',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'color': '#eb0202'
              }
            ]
          },
          {
            'featureType': 'transit.station',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'color': '#ff1d00'
              },
              {
                'saturation': '-35'
              },
              {
                'lightness': '-47'
              }
            ]
          },
          {
            'featureType': 'transit.station',
            'elementType': 'labels.icon',
            'stylers': [
              {
                'hue': '#00d4ff'
              },
              {
                'visibility': 'simplified'
              },
              {
                'lightness': '0'
              },
              {
                'saturation': '0'
              },
              {
                'gamma': '0.5'
              }
            ]
          },
          {
            'featureType': 'water',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#000000'
              },
              {
                'lightness': 17
              }
            ]
          }
        ]
      });

      let infoWindow = null;
      const mapMarkers = [];

      $scope.$watch('center', () => map.setCenter($scope.center), true);

      $scope.$watch('bathroom', () => {
        $scope.bathroom;
        console.log('bathrooms scope', $scope.bathroom);
        infoWindow = new google.maps.InfoWindow();
        mapMarkers.forEach(marker => marker.setMap(null));
        $scope.bathroom.forEach(bathroom => showMarkers(bathroom));
      });

      function showMarkers(bathroom){
        const marker = new google.maps.Marker({
          position: {lat: bathroom.location.lat, lng: bathroom.location.lng},
          icon: '../assets/images/toilets.png',
          map: map
        });
        mapMarkers.push(marker);
        marker.addListener('click', () => {
          showInfoWindow(bathroom, marker);
        });
      }
      function showInfoWindow(bathroom, marker){
        infoWindow.close();
        infoWindow.setContent(`<div><img class='info-marker' src=${bathroom.image}><h1>${bathroom.name}</h1><h1>${bathroom.description}</h1><h1>${bathroom.address}</h1><a href='/#!/bathrooms/${bathroom._id}'>Show More</a></div>`);
        infoWindow.open(map, marker);
        map.setCenter(marker.getPosition());
      }
    }
  };
}

export default googleMapIndex;
