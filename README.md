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

resource = 'photos'
venueId  = 12345678asdfghj
params   = {limit: 100}

fsq.get(resource, venueId, params, callback)
```

####Documentation
For further api documentation please see: https://developer.foursquare.com/docs/venues/venues

For further version and mode documentation please see: https://developer.foursquare.com/overview/versioning