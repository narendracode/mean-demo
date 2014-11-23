
angular.module('meetupApp.services',['ngResource']).factory('MeetupUpdateService',function($resource) {
return $resource('meetup/:id/edit', 
    {
        id: '@id'
    },
    {
        'update': { method:'PUT' }
    });
});