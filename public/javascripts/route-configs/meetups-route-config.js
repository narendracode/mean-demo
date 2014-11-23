
meetupApp.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: '/templates/main.html',
        controller: 'meetupsController'
    })
    .when('/create',{
        templateUrl : '/templates/create.html',
        controller: 'meetupsController'
    })
    .when('/:id',{
        templateUrl: '/templates/details.html',
        controller: 'meetupsController'
    })
    .when('/:id/edit',{
        templateUrl: '/templates/edit.html',
        controller: 'meetupsController'
    })
    .otherwise({redirectTo: '/'})
    ;
});