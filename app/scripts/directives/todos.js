/**
 * Created by Diimiegbo on 16/02/2017.
 */

'use strict';


angular.module('ToDoApp')

    .directive('todos', function () {

        return {

            templateUrl : "template/todos.html",
            controller : "MainctrlController"
        };
    });