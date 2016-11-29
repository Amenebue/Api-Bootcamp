console.log('The demo is starting');

var Twit = require('twit');

var access = require('./access');
console.log(access);
var T = new Twit(access);

var params ={ 
q: 'banana since:2011-07-11',
count: 100
 }

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
  console.log(data)
};
