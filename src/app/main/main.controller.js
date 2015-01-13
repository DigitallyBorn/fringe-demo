'use strict';

angular.module('googleCalTest')
  .controller('MainCtrl', function ($scope, CalendarEvents) {
    $scope.events = CalendarEvents.query();
  })
  .factory('CalendarEvents', function($resource) {
    return $resource('/api/calendar');
  });
