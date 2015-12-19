var tasklistModule = angular.module('tasklist', ['ngRoute']);
tasklistModule.config(function($routeProvider) {
    $routeProvider.when('/', {
        controller : 'addTaskList',
        templateUrl : 'views/addtask.html'
    })
});

tasklistModule.controller('addTaskList', function ($scope) {
    $scope.tasklists = [{name:"Transfer Money"},{"name":"Pay Bills"}]
});