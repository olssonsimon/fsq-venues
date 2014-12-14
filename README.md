####Credits
Inspired by: https://github.com/futuraio/Node-Foursquare-Venues

####Installation
```
npm install fsq-venues
```

####Usage
```
config = {
  client_id:     "THE CLIENT ID",
  client_secret: "THE CLIENT SECRET",
  v:             "THE VERSION NUMBER", (see documentation)
  m:             "THE MODE"            (see documentation)
}

var fsq = require('fsq-venues').client(config)

fsq.get(resource, venueId, params, callback)
```

####Examples

#####Get Venues
```
params = {
  ll:         '40.7,-74', 
  radius:     10000,
  categoryId: '4d4b7105d754a06374d81259',
  limit:      10,
  intent:     'browse'
};

fsq.get('search', params, function(err, res) {
  if (!err)
    // Do something
});
```

#####Get Photos
```
venueId = "4ba9c430f964a52053373ae3";
params  = {
  limit: 100,
}

fsq.get('photos', venueId, params, function(err, res){
  if (!err)
    // Do something
}
```

#####Get Hours
```
venueId = "5243025411d2d9eddc11ec70";

fsq.get('hours', venueId, function(err, res){
  if (!err)
    // Do something
}
```

#####Get Venue
```
venueId = "5243025411d2d9eddc11ec70";

fsq.get('venue', venueId, function(err, res){
  if (!err)
    // Do something
}
```

####Documentation
For further api documentation please see: https://developer.foursquare.com/docs/venues/venues

For further version and mode documentation please see: https://developer.foursquare.com/overview/versioning