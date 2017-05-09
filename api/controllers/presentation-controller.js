'use strict';
var mongoose = require('mongoose'),
  Presentation = mongoose.model('Presentations');

exports.list_all_presentations = function (req, res) {
  Presentation.find({}, function (err, presentation) {
    if (err)
      res.send(err);
    res.json(presentation);
  });
};

exports.create_presentation = function (req, res) {
  var new_presentation = new Presentation(req.body);
  new_presentation.save(function (err, presentation) {
    if (err)
      res.send(err);
    res.status(201);
    res.json(presentation);
  });
};

exports.read_presentation = function (req, res) {
  Presentation.findById(req.params.presentationId, function (err, presentation) {
    if (err)
      res.send(err);
    res.json(presentation);
  });
};

exports.update_presentation = function (req, res) {
  Presentation.findOneAndUpdate(req.params.presentationId, req.body, {new: true}, function (err, presentation) {
    if (err)
      res.send(err);
    res.json(presentation);
  });
};

exports.delete_presentation = function (req, res) {
  Presentation.remove({
    _id: req.params.presentationId
  }, function (err, presentation) {
    if (err)
      res.send(err);
    res.json({message: 'Presentation successfully deleted'});
  });
};

