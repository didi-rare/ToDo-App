angular.module("ToDoApp", [])
    .controller("MainctrlController", function ($scope, dataService) {
        $scope.hello = function () {
            console.log("This prints out a message, and is a function that is triggered when its injected into a html element. :)");
        };
        $scope.todo = "";

        $scope.consolelogs = dataService.helloconsole;


        $scope.todos = [
            {"name" : "clean the house"},
            {"name" : "wash the car"},
            {"name" : "go and buy chaw"},
            {"name" : "buy toiletries"},
            {"name" : "go shop for clothes"},
            {"name" : "take a break"}
        ]
    })
    .service("dataService", function () {

        this.helloconsole = function () {
            console.log("This is an example of a Service in action!");
        }
    });
