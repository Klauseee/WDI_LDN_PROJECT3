const Bathroom =

require('../models/bathroom');

function updateRoute(req, res, next) {
  Bathroom.findById(req.params.id)
    .then(bathroom =>
      Object.assign(bathroom, req.body))
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

function createRoute(req, res, next) {
  Bathroom.create(req.body)
    .then(bathroom => res.status(201).json(bathroom))
    .catch(next);
}

module.exports = {
  update: updateRoute,
  delete: deleteRoute,
  create: createRoute
};
