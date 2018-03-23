HomeCtrl.$inject = ['$state', '$location', '$anchorScroll', '$scope', '$auth'];

function HomeCtrl($state, $location, $anchorScroll, $scope, $auth){

  this.isAuthenticated = $auth.isAuthenticated;

  function homeLogin(){
    $state.go('login');
  }

  function homeRegister(){
    $state.go('register');
  }

  function gotoAbout(){
    $location.hash('about');
    // call $anchorScroll()
    $anchorScroll();

  }
  this.aboutIsActive = false;

  function toggleAbout() {
    this.aboutIsActive = !this.aboutIsActive;
    gotoAbout();
  }

  this.toggleAbout = toggleAbout;
  this.gotoAbout = gotoAbout;
  this.homeLogin = homeLogin;
  this.homeRegister = homeRegister;
}

export default HomeCtrl;
