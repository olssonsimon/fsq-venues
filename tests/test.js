var assert = require('chai').assert;

var fsq = require('.././lib/fsq-venues').client({
  "client_id":     "YOUR CLIENT ID",
  "client_secret": "YOUR CLIENT SECRET",
  "v":             "20141201",
  "m":             "foursquare"
});

describe('Foursquare Api', function() {
  this.timeout(5000);

  describe('venues#search', function(){
    it('gets venues based off of the given params', function(done){
      var params = {
        ll:         '40.7,-74', 
        radius:     1,
        categoryId: '4d4b7105d754a06374d81259',
        limit:      10,
        intent:     'browse'
      };
      fsq.search(params, function(err, res){
        assert.isNull(err);
        assert.isObject(res);
        done();
      });
    });
  });

  describe('venues#venue', function(){
    it('gets a venue given a venueId', function(done){
      var venueId = "4ba9c430f964a52053373ae3";
      fsq.venue(venueId, function(err, res){
        assert.isNull(err);
        assert.isObject(res);
        done();
      });
    });
  });

  describe('venues#photos', function(){
    it('gets photos for a venue given a venueId', function(done){
      var venueId = "4ba9c430f964a52053373ae3";
      fsq.photos(venueId, function(err, res){
        assert.isNull(err);
        assert.isObject(res);
        done();
      });
    });
  });

  describe('venues#tips', function(){
    it('gets tips for a venue given a venueId', function(done){
      var venueId = "4ba9c430f964a52053373ae3";
      fsq.tips(venueId, function(err, res){
        assert.isNull(err);
        assert.isObject(res);
        done();
      });
    });
  });

  describe('venues#hours', function(){
    it('gets hours for a venue given a venueId', function(done){
      var venueId = "4ba9c430f964a52053373ae3";
      fsq.hours(venueId, function(err, res){
        assert.isNull(err);
        assert.isObject(res);
        done();
      });
    });
  });

  describe('venues#menu', function(){
    it('gets the menu for a venue given a venueId', function(done){
      var venueId = "4ba9c430f964a52053373ae3";
      fsq.menu(venueId, function(err, res){
        assert.isNull(err);
        assert.isObject(res);
        done();
      });
    });
  });

  describe('venues#events', function(){
    it('gets the events for a venue given a venueId', function(done){
      var venueId = "4ba9c430f964a52053373ae3";
      fsq.events(venueId, function(err, res){
        assert.isNull(err);
        assert.isObject(res);
        done();
      });
    });
  });

  describe('venues#likes', function(){
    it('gets the likes for a venue given a venueId', function(done){
      var venueId = "4ba9c430f964a52053373ae3";
      fsq.likes(venueId, function(err, res){
        assert.isNull(err);
        assert.isObject(res);
        done();
      });
    });
  });

  describe('venues#links', function(){
    it('gets the links for a venue given a venueId', function(done){
      var venueId = "4ba9c430f964a52053373ae3";
      fsq.links(venueId, function(err, res){
        assert.isNull(err);
        assert.isObject(res);
        done();
      });
    });
  });

});