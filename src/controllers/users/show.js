UsersShowCtrl.$inject = ['Bathroom', 'User', '$state', '$auth', '$location', '$anchorScroll'];
function UsersShowCtrl(Bathroom, User, $state, $auth, $location, $anchorScroll) {
  const vm = this;
  vm.user = { users: [] };
  vm.user.requests = [];
  vm.newRating = null;


  //find any requests made by current user, the bathroom they requested and the status of the request.
  Bathroom.find()
    .then(res => {
      res.data.forEach(bathroom => {
        //find all bathrooms, check if they have any requests and if the request is owned by the current user
        //find if there are any requests and if that request matches the user's payload
        if(bathroom.requests[0] && bathroom.requests[0].user === $auth.getPayload().sub) {
          vm.user.requests.push(bathroom);
        }
      });
    });

  function getUserData() {
    //When a user clicks on the link for their profile page, their ID is passed into thr findById function using $auth. This holds the current user's ID in the jsonwebtoken which is available while anyone is logged in.
    User.findById($auth.getPayload().sub)
      .then(res => {
        vm.user = res.data;
        findPreviousUsers();
      });
  }

  //search all users to see if they have used the current user's bathroom
  function findPreviousUsers() {
    User.find() //returns all users in database
      .then(res => {
        //filter all users to check if their id matches those in the current user's previous users
        vm.user.previousUsersObject = res.data.filter(user => vm.user.previousUsers.includes(user._id));
      });
  }

  function acceptRequest(bathroom, request) {
    bathroom.isAvailable = true; //users can now request the bathroom again
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
    bathroom.isAvailable = true; //users can now request the bathroom again
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
