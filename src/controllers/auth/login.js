AuthLoginCtrl.$inject = ['User','$auth', '$state', '$rootScope'];

function AuthLoginCtrl(User, $auth, $state, $rootScope){
  const vm = this;
  vm.credentials = {};
  vm.userId = '';

  function authenticate(provider) {
    $auth.authenticate(provider)
      .then(()=> {
        $rootScope.$broadcast('flashMessage', {
          type: 'info',
          content: 'You\'ve successfully logged in with Facebook'
        });
        $state.go('bathroomsMapIndex');
      })
      .catch(err => console.log(err));
  }


  function handleSubmit(){
    $auth.login(vm.credentials)
      .then(res => {
        $rootScope.$broadcast('flashMessage', {
          type: 'info',
          content: res.data.message
        });
        $state.go('bathroomsMapIndex');
      })
      .then(() => {
        User.findById($auth.getPayload().sub)
          .then(res => vm.userId = res.data);
      })
      .catch(() => {
        $rootScope.$broadcast('flashMessage', {
          type: 'info',
          content: 'Incorrect email or password!'
        });
        $state.go('login');
      });
  }
  vm.authenticate = authenticate;
  vm.handleSubmit = handleSubmit;
}

export default AuthLoginCtrl;
