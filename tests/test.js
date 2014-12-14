var assert = require('chai').assert;
var keys   = require('./keys'); 

var fsq = require('.././lib/fsq-venues').client({
  "client_id":     keys.client_id,
  "client_secret": keys.client_secret,
  "v":             "20141201",
  "m":             "foursquare"
});

describe('Foursquare Api', function() {
  this.timeout(5000);

  describe('get venues', function() {
    it ('gets fitting venues', function(done) {
      params = {
        ll:         '40.7,-74', 
        radius:     10000,
        categoryId: '4d4b7105d754a06374d81259',
        limit:      10,
        intent:     'browse'
      };

      fsq.get('search', params, function(err, res){
        assert.isNull(err);
        assert.isObject(res);
        done();
      });
    });
  });

  describe('get photos', function() {
    it ('gets photos for a venue', function(done) {
      venueId = "4ba9c430f964a52053373ae3";

      fsq.get('photos', venueId, function(err, res){
        assert.isNull(err);
        assert.isObject(res);
        done();
      });
    });
  });

  describe('get tips', function(){
    it('gets tips for a venue', function(done){
      venueId = "4ba9c430f964a52053373ae3";
      params = {
        limit: 100
      };

      fsq.get('tips', venueId, params, function(err, res){
        assert.isNull(err);
        assert.isObject(res);
        done();
      });
    });
  });

  describe('get a venue', function(){
    it('gets a venue given a venueId', function(done){
      venueId = "4ba9c430f964a52053373ae3";
      
      fsq.get('venue', venueId, function(err, res){
        assert.isNull(err);
        assert.isObject(res);
        done();
      });
    });
  });

  describe('get hours', function(){
    it('gets hours for a venue given a venueId', function(done){
      venueId = "5243025411d2d9eddc11ec70"; // Butcher's Market

      fsq.get('hours', venueId, function(err, res){
        assert.isNull(err);
        assert.isObject(res);
        done();
      });
    });
  });

  describe('get menu', function(){
    it('gets the menu for a venue given a venueId', function(done){
      venueId = "4ba9c430f964a52053373ae3";

      fsq.get('menu', venueId, function(err, res){
        assert.isNull(err);
        assert.isObject(res);
        done();
      });
    });
  });

  describe('get events', function(){
    it('gets the events for a venue given a venueId', function(done){
      venueId = "4ba9c430f964a52053373ae3";

      fsq.get('events', venueId, function(err, res){
        assert.isNull(err);
        assert.isObject(res);
        done();
      });
    });
  });

  describe('get likes', function(){
    it('gets the likes for a venue given a venueId', function(done){
      venueId = "4ba9c430f964a52053373ae3";

      fsq.get('likes', venueId, function(err, res){
        assert.isNull(err);
        assert.isObject(res);
        done();
      });
    });
  });

  describe('get links', function(){
    it('gets the links for a venue given a venueId', function(done){
      venueId = "4ba9c430f964a52053373ae3";

      fsq.get('links', venueId, function(err, res){
        assert.isNull(err);
        assert.isObject(res);
        done();
      });
    });
  });

});