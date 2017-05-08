'use strict';
module.exports = function (app) {
  var presentation = require('../controllers/presentation-controller');

  app.route('/presentations')
    .get(presentation.list_all_presentations)
    .post(presentation.create_presentation);

  app.route('/presentations/:presentationId')
    .get(presentation.read_presentation)
    .put(presentation.update_presentation)
    .delete(presentation.delete_presentation);
};
