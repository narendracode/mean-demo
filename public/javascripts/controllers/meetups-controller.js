

meetupApp.controller('meetupsController',['$scope','$resource','$routeParams','$location','MeetupUpdateService',
        function($scope,$resource,$routeParams,$location,MeetupUpdateService){
            var MeetupResource = $resource('/meetup/:id'); //this will be the base URL for our rest express rout.
          //  var SaveMeetupResource = $resource('meetup/:id/edit');
            $scope.appname = "Mean Demo";
            
            var loadMeetups = function(){
                return MeetupResource.query(function(results){
                $scope.meetups = results;
                    if($routeParams.id){
                        console.log("### check id:"+$routeParams.id);
                        $scope.findMeetup($routeParams.id);
                        //$scope.meetup = $scope.meetups[$routeParams.id]; //for edit and show details views
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
               
            
            $scope.findMeetup = function(_id){
                $scope.meetupUpdateService = new MeetupUpdateService();
                $scope.meetupUpdateService.$get({id:_id},function(result){
                     $scope.meetup = result;
                }); 
            }
            
            $scope.updateMeetup = function(_id){
                $scope.meetupUpdateService = new MeetupUpdateService();
                $scope.meetupUpdateService.name = $scope.meetup.name;
                $scope.meetupUpdateService.$update({id:_id},function(result){
                    $location.path("/")
                });
            }//updateMeetup
            
            $scope.getMeetup = function(_id){
                $scope.meetupUpdateService = new MeetupUpdateService();
                $scope.meetupUpdateService.$get({id : _id},function(result){
                    $scope.meetup = result;
                    $location.path("/"+_id)
                });
                $scope.meetup
            }//getMeetup
            
            
            
            $scope.deleteMeetup = function(_id){
                $scope.meetupUpdateService = new MeetupUpdateService();
                $scope.meetupUpdateService.$delete({id: _id},function(result){
                    if(result){
                      MeetupResource.query(function(results){
                        $scope.meetups = results;
                        $location.path("/")
                      });
                    }
                });
            }//deleteMeetup
            
        }  
]);

