/**
 * Created by Diimiegbo on 16/02/2017.
 */

'use strict';


angular.module('ToDoApp')

    .directive('header', function () {

    return {

        controller : "MainctrlController",
        templateUrl: "template/caption.html"
        };
    });