
angular.module('meetupApp.services',['ngResource']).factory('MeetupUpdateService',function($resource) {
return $resource('meetup/:id', 
    {
        id: '@id'
    },
    {
        'update': { method:'PUT' }
    },
    {
        'get': { method: 'GET', isArray: false }
    },
    {
        'delete': { method: 'DELETE'}
    }
);
});
var meetupApp = angular.module('meetupApp',['ngResource','ngRoute','meetupApp.services']);