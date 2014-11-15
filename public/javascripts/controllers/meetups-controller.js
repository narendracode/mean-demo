meetupApp.controller('meetupsController',['$scope','$resource',
        function($scope,$resource){
            var MeetupResource = $resource('/meetup'); //this will be the base URL for our rest express rout.
            
            MeetupResource.query(function(results){
                $scope.meetups = results;
            });
            
            $scope.createMeetup = function(){
                var createMeetupResource = new MeetupResource();
                createMeetupResource.name = $scope.meetupName;
                createMeetupResource.$save(function(result){
                    $scope.meetupName = '';
                    $scope.meetups.push(result);
                });
            }  
        }  
]);
