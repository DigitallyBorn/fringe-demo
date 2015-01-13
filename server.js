var express = require('express');
var app = express();

var googleCalendarLib = require('public-google-calendar');
var googleCal = new googleCalendarLib({calendarId: 'ide9tql71plgquh0fig9brh9gs@group.calendar.google.com'});

app.use(function(req, res, next) {
  console.log(Date.now(), req.method, req.url);
  next();
});

app.get('/api/calendar', function(req, res) {
  googleCal.getEvents(function(err,events) {
    res.send(events);
  });
});

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 3000);
console.log('Express server running ...');
