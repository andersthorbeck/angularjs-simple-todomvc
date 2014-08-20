(function() {
  var appDependencies = [];
  var app = angular.module('todoapp', appDependencies);

  app.controller("TodoCtrl", TodoCtrl);
})();

function TodoCtrl($scope) {

  $scope.todos = [
    {text:"Learn AngularJs", done:false},
    {text:"Complete Todo-App", done:false}
  ];

  $scope.totalTodos = function() {
    return $scope.todos.length;
  };

  $scope.addTodo = function() {
    $scope.todos.push({text: $scope.newTodoText, done:false});
    $scope.newTodoText = "";
  }

  var todosNotDone = function () {
    return _.filter($scope.todos, function(todo) {
      return !todo.done;
    });
  }

  $scope.clearCompleted= function() {
    $scope.todos = todosNotDone();
  }

  $scope.numCompletedTodos = function() {
    return $scope.todos.length - todosNotDone().length;
  }
}
