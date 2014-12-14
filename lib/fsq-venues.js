var unirest = require('unirest');
var qs      = require('querystring');

var FourSquare = function(config) {

  var fsq = {

    config: config || null,
    locale: config.locale || 'en',

    _request: function(method, path, callback) {

      url     = "https://api.foursquare.com:443/v2" + path;
      headers = {
        'Accept':          'application/json',
        'Accept-Language': this.locale,
        'Content-Type':    'application/x-www-form-urlencoded',
        'Content-Length':  '0'
      };

      req = unirest(method, url, headers);
      this._response(req, callback);
    },

    _response: function(req, callback) {
      req.end(function (res) {
        meta = res.body.meta;
        code = meta.code;
        resp = res.body;

        // Error
        if (code >= 300)
          return callback(code, null);

        // Success
        callback(null, resp);
      });
    },

    constructquery: function(path, params) {
      params = params || {};
      path  += "?";
      path  += qs.stringify(this.config) + "&";
      path  += qs.stringify(params);
      return path;
    },

    get: function(query, callback) {
      this._request('GET', query, callback);
    }

  };

  /*
  * @params resource, venueId, params, callback
  * Takes a resource and venueId and/or params and
  * makes a request to the foursquare api and returns
  * the data through the callback
  * 
  * The resource param, venueId or params and the callback
  * are mandatory
  */
  this.get = function(resource, venueId, params, callback) {
    path = '/venues/';

    if (typeof resource != 'string') {
      return new Error('Invalid parameters');

    // resource, venueId, params, callback
    } else if (typeof venueId === 'string' && typeof params != 'function') {
      path += venueId + "/";

    // resource, params, callback
    } else if (typeof venueId != 'string' && typeof params === 'function') {
      callback = params;
      params   = venueId;

    // resource, venueId, callback
    } else if (typeof venueId === 'string' && typeof params === 'function') {
      path     += venueId + "/";
      callback = params;
      params   = {}; 

    // Invalid parameters
    } else {
      return new Error('Invalid parameters');
    }

    resource = resource.toLowerCase();

    // This endpoint doesn't exist in the foursquare api
    if (resource != 'venue')
      path += resource;

    fsq.get(fsq.constructquery(path, params), callback);
  }
};

/*
* @params config
* config contains: client_id, client_secret, v (version), m (mode)
* mode can be either swarm or foursquare
* version is a date in the format yyyymmdd (use a fixed date)
*/
module.exports.client = function(config) {
  return new FourSquare(config);
}