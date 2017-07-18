var app = angular.module("myApp", []);
app.controller("toDoCtrl", function($scope) {
    $scope.toDoList = [{toDoText:'Feed Murphy', done:false}];
    $scope.toDoList.push({toDoText:'Feed Nugget', done:false});
    $scope.toDoList.push({toDoText:'Wash Dishes', done:false});

    $scope.toDoAdd = function() {
        $scope.toDoList.push({toDoText:$scope.toDoInput, done:false});
        $scope.toDoInput = "";
    };
    $scope.remove = function() {
        var oldList = $scope.toDoList;
        $scope.toDoList = [];
        angular.forEach(oldList, function(task) {
            if (!task.done) $scope.toDoList.push(task);
        });
    };
});
