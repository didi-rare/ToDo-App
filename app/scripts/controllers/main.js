/**
 * Created by Diimiegbo on 16/02/2017.
 */

'use strict';


angular.module('ToDoApp')

    .controller('MainctrlController', function ($scope, dataService) {
        $scope.addTodo = function () {
            var todo = { name : "This is a new List Item to add"};
            $scope.todos.unshift(todo);
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

    });