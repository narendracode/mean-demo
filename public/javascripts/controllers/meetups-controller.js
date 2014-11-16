
meetupApp.controller('meetupsController',['$scope','$resource','$routeParams',
        function($scope,$resource,$routeParams){
            var MeetupResource = $resource('/meetup'); //this will be the base URL for our rest express rout.
            $scope.appname = "Mean Demo";
            
            var loadMeetups = function(){
                return MeetupResource.query(function(results){
                $scope.meetups = results;
                    if($routeParams.id){
                        console.log("### check id:"+$routeParams.id);
                        $scope.meetup = $scope.meetups[$routeParams.id]; //for edit and show details views
                    }
                });
            }
            if(!$scope.meetups)
                loadMeetups();

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

