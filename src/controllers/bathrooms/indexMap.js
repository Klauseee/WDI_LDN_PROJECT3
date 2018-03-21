BathroomsIndexMapCtrl.$inject = ['Bathroom', 'filterFilter', '$scope'];

function BathroomsIndexMapCtrl(Bathroom, filterFilter, $scope) {

  const vm = this;
  vm.center = {lat: 51.5034, lng: 0.1276};
  vm.destination = {lat: 38.8977, lng: -76.0365};

  navigator.geolocation.getCurrentPosition(pos => {
    console.log(pos.coords.latitude);
    console.log(pos.coords.longitude);
    const userCurrentLat = pos.coords.latitude;
    const userCurrentLng = pos.coords.longitude;

    vm.center = {lat: userCurrentLat, lng: userCurrentLng};
    $scope.$apply();
  });

  vm.bathrooms = [];
  vm.bathroom = {};
  vm.filtered = [];
  let params = {};

  vm.toilet = false;
  vm.shower = false;
  vm.bidet = false;
  vm.sanitaryProducts = false;
  vm.babyChanging = false;

  Bathroom.find()
    .then(res => {
      vm.bathrooms = res.data;
    })
    .then(filterBathrooms);

  function filterBathrooms(){
    params = {};

    if(vm.toilet) params.toilet = vm.toilet;
    if(vm.shower) params.shower = vm.shower;
    if(vm.bidet) params.bidet = vm.bidet;
    if(vm.sanitaryProducts) params.sanitaryProducts = vm.sanitaryProducts;
    if(vm.babyChanging) params.babyChanging = vm.babyChanging;


    vm.filtered = filterFilter(vm.bathrooms, params);
    console.log('test', vm.filtered);
  }

  // function toggleAll() {
  //   vm.toilet = !vm.toilet;
  //   vm.shower = !vm.shower;
  //   vm.bidet = !vm.bidet;
  //   vm.sanitaryProducts = !vm.sanitaryProducts;
  //   vm.babyChanging = !vm.babyChanging;
  // }

  vm.filtered = filterFilter(vm.bathrooms, params);
  // $scope.$watch(() => vm.all, toggleAll);

  $scope.$watchGroup([
    () => vm.toilet,
    () => vm.shower,
    () => vm.bidet,
    () => vm.sanitaryProducts,
    () => vm.babyChanging
  ], filterBathrooms);

}


export default BathroomsIndexMapCtrl;
