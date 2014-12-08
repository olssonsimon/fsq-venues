var unirest = require('unirest');
var qs      = require('querystring');

var FourSquare = function(config) {

  var fsq = {

    config: config || null,
    locale: config.locale || 'en',

    _request: function(method, query, callback) {

      url     = "https://api.foursquare.com:443/v2" + query;
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
        resp = res.body.response;

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
    },

    invalidparams: function(callback) {
      callback(new Error("Invalid params"), null);
    },

  };

  var functions = {
    search: function(params, callback) {
      if (!params || !callback) return fsq.invalidparams();
      fsq.get(fsq.constructquery('/venues/search/', params), callback);
    },

    venue: function(venueId, callback) {
      if (!venueId || !callback) return fsq.invalidparams();
      fsq.get(fsq.constructquery('/venues/' + venueId), callback);
    },

    photos: function(venueId, callback) {
      if (!venueId || !callback) return fsq.invalidparams();
      fsq.get(fsq.constructquery('/venues/' + venueId + '/photos'), callback);
    },

    tips: function(venueId, callback) {
      if (!venueId || !callback) return fsq.invalidparams();
      fsq.get(fsq.constructquery('/venues/' + venueId + '/tips'), callback);
    },

    hours: function(venueId, callback) {
      if (!venueId || !callback) return fsq.invalidparams();
      fsq.get(fsq.constructquery('/venues/' + venueId + '/hours'), callback);
    },

    menu: function(venueId, callback) {
      if (!venueId || !callback) return fsq.invalidparams();
      fsq.get(fsq.constructquery('/venues/' + venueId + '/menu'), callback);
    },

    events: function(venueId, callback) {
      if (!venueId || !callback) return fsq.invalidparams();
      fsq.get(fsq.constructquery('/venues/' + venueId + '/events'), callback);
    },

    likes: function(venueId, callback) {
      if (!venueId || !callback) return fsq.invalidparams();
      fsq.get(fsq.constructquery('/venues/' + venueId + '/likes'), callback);
    },

    links: function(venueId, callback) {
      if (!venueId || !callback) return fsq.invalidparams();
      fsq.get(fsq.constructquery('/venues/' + venueId + '/links'), callback);
    },
  };

  return functions;
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