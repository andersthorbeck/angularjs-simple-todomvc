function TodoCtrl($scope) {
  $scope.todos = [
    {text:"Learn AngularJs", done:false},
    {text:"Complete Todo-App", done:false}
  ];

  $scope.totalTodos = function() {
    return $scope.todos.length;
  };
}
