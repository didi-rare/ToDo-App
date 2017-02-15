angular.module('ToDoApp')
    .directive('helloworld', function () {

        return{
            template : "this is a hello world directive!",
            restrict : "A"
        };
    });