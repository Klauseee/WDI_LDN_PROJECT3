UsersShowCtrl.$inject = ['Bathroom', 'User', '$state', '$auth', '$location', '$anchorScroll'];
function UsersShowCtrl(Bathroom, User, $state, $auth, $location, $anchorScroll) {
  const vm = this;
  vm.user = { users: [] };
  vm.user.requests = [];
  vm.newRating = null;

  Bathroom.find()
    .then(res => {
      res.data.forEach(bathroom => {
        //find all bathrooms, check if they have any requests and if the request is owned by the current user
        if(bathroom.requests[0] && bathroom.requests[0].user === $auth.getPayload().sub) {
          vm.user.requests.push(bathroom);
        }
      });
    });

  function getUserData() {
    User.findById($auth.getPayload().sub)
      .then(res => {
        vm.user = res.data;
        findPreviousUsers();
      });
  }

  function findPreviousUsers() {
    User.find()
      .then(res => {
        //filter all users to check if their id matches those in the current user's previous users
        vm.user.previousUsersObject = res.data.filter(user => vm.user.previousUsers.includes(user._id));
      });
  }

  function acceptRequest(bathroom, request) {
    bathroom.isAvailable = true;
    bathroom.previousUsers.push(request.user._id); // add the user into the bathroom's previous users array
    vm.user.previousUsers.push(request.user._id); // add the user into the bathroom owner's previous users array
    Bathroom.update(bathroom)
      .then(() => {
        Bathroom.acceptRequest(bathroom, request)
          .then(() => request.status = 'accepted');
      })
      .then(() => User.update(vm.user))
      .then(() => $state.go($state.current, {id: $state.params.id}, {reload: true}));
  }

  function rejectRequest(bathroom, request) {
    Bathroom.rejectRequest(bathroom, request)
      .then(() => request.status = 'rejected');
  }


  //owner can post a rating to the user after they have used their bathroom
  function handleComment(id) {
    User.commentCreate(id, { rating: vm.newRating })
      .then(() => $state.go($state.current, {id: $state.params.id}, {reload: true}))
      .then(() => {
        vm.newRating = '';
        getUserData();
      });
    vm.user.previousUsers.splice(id, 1); //removes the user's id from the owner's previous users so that only one rating can be made
    User.update(vm.user);
  }


  function gotoTop(){
    $location.hash('top');
    $anchorScroll();

  }

  this.gotoTop = gotoTop;
  this.acceptRequest = acceptRequest;
  this.rejectRequest = rejectRequest;
  this.handleComment = handleComment;

  getUserData();

}

export default UsersShowCtrl;
