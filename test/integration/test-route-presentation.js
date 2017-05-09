var supertest = require('supertest'),
  assert = require('assert'),
  app = require('../../server');

exports.should_return_404_for_nonexistent_path = function (done) {
  supertest(app)
    .get('/nonexistent_path')
    .expect(404)
    .end(done);
};

exports.get_method_should_return_array = function (done) {
  supertest(app)
    .get('/presentations')
    .expect(200)
    .end(function (err, response) {
      assert.ok(!err);
      assert.ok(typeof response.body !== 'undefined' && response.body.length >= 0);
      return done();
    });
};

exports.post_method_should_return_registered_values = function (done) {
  var data = {
    title: "test",
    speaker: "test"
  };

  supertest(app)
    .post('/presentations')
    .set('Accept', /application\/json/)
    .type('form')
    .send(data)
    .expect(201)
    .end(function (err, response) {
      assert.ok(!err);
      assert.ok(response.body['title'] === data.title && response.body['speaker'] === data.speaker);
      return done();
    });
};
