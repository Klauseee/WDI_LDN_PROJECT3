const Bathroom = require('../models/bathroom');

function indexRoute(req, res, next){
  Bathroom.find()
    .then(bathrooms => res.json(bathrooms))
    .catch(next);
}

function indexMapRoute(req, res, next){
  Bathroom.find()
    .then(bathrooms => res.json(bathrooms))
    .catch(next);
}

function createRoute(req, res, next) {
  req.body.user = req.currentUser;
  Bathroom.create(req.body)
    .then(bathroom => res.status(201).json(bathroom))
    .catch(next);
}

function showRoute(req, res, next){
  Bathroom.findById(req.params.id)
    .populate('comments.user')
    .populate('user')
    .then(bathroom => res.json(bathroom))
    .catch(next);
}

function updateRoute(req, res, next) {
  Bathroom.findById(req.params.id)
    .then(bathroom => Object.assign(bathroom, req.body))
    .then(bathroom => bathroom.save())
    .then(bathroom => res.json(bathroom))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Bathroom.findById(req.params.id)
    .then(bathroom => bathroom.remove())
    .then(() => res.sendStatus(204))
    .catch(next);
}

function requestCreateRoute(req, res, next){
  req.body.user = req.currentUser;
  Bathroom.findById(req.params.id)
    .then(bathroom => {
      bathroom.requests.push(req.body);
      return bathroom.save();
    })
    .then(bathroom => res.json(bathroom))
    .catch(next);
}

function requestAcceptRoute(req, res, next) {
  Bathroom.findById(req.params.id)
    .populate('requests.user user')
    .then(bathroom => {
      const request = bathroom.requests.id(req.params.requestId);
      request.status = 'accepted';
      return bathroom.save();
    })
    .then(bathroom => res.json(bathroom))
    .catch(next);
}
function requestRejectRoute(req, res, next) {
  Bathroom.findById(req.params.id)
    .then(bathroom => {
      const request = bathroom.requests.id(req.params.requestId);
      request.status = 'rejected';
      return bathroom.save();
    })
    .then(bathroom => res.json(bathroom))
    .catch(next);
}

function commentCreateRoute(req, res, next){
  req.body.user = req.currentUser;
  Bathroom.findById(req.params.id)
    .then(bathroom => {
      bathroom.comments.push(req.body);
      bathroom.save();
    })
    .then(bathroom => res.json(bathroom))
    .catch(next);
}

function commentDeleteRoute(req, res, next){
  Bathroom.findById(req.params.id)
    .then(bathroom => {
      const comment = bathroom.comments.id(req.params.commentId);
      console.log(comment);
      comment.remove();
      bathroom.save();
    })
    .then(bathroom => res.json(bathroom))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  indexMap: indexMapRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute,
  requestCreate: requestCreateRoute,
  requestAccept: requestAcceptRoute,
  requestReject: requestRejectRoute,
  commentCreate: commentCreateRoute,
  commentDelete: commentDeleteRoute
};
