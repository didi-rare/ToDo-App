angular.module("ToDoApp", [])
    .controller("MainctrlController", function ($scope, dataService) {
        $scope.addTodo = function () {
            var todo = { name : "This is a new List Item to add"};
            $scope.todos.push(todo);
        };

        $scope.consolelogs = dataService.helloconsole;

       dataService.getTodos((function (response) {
           $scope.todos = response.data;
       }));

        $scope.deleteTodo = function(todo, $index) {
            dataService.deleteTodo(todo);
            $scope.todos.splice($index, 1);
        };

        $scope.saveTodo = function (todo) {
            dataService.saveTodo(todo);
        }

    })
    .service("dataService", function ($http) {

        this.helloconsole = function () {
            console.log("This is an example of a Service in action!");
        };

        this.getTodos = function(callback){
            $http.get('data/todos.json')
                .then(callback);
        };

        this.deleteTodo = function (todo) {
            console.log("The " + todo.name + " has been deleted successfuly!");

            //other logic depending on call from the server.
        };

        this.saveTodo = function (todo) {
            console.log("The " + todo.name + " has been saved successfuly!");

            //other logic depending on call from the server.
        }
    });
