/**
 * Created by Diimiegbo on 16/02/2017.
 */

'use strict';


angular.module('ToDoApp')

    .service('dataService', function ($http) {

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

        this.saveTodos = function (todos) {
            console.log(todos.length + " has been saved successfuly!");

            //other logic depending on call from the server.
        }
    });