/**
 * 
 */
angular.module('todoApp', []).controller('TodoController',
		[ '$scope', function($scope) {

			// todos declaration + initialization
			$scope.todos = [ {
				text : 'learn angular',
				done : true
			}, {
				text : 'build an angular app',
				done : false
			} ];

			// add todo --> todos
			$scope.addTodo = function() {
				if (!$scope.todoText) {
					$scope.message = 'Text must be full';
				} else {
					$scope.todos.push({
						text : $scope.todoText,
						done : false
					});
					$scope.message = 'New ToDo added:' + $scope.todoText;
					$scope.todoText = '';
				}
			};

			// remaining todo to be done
			$scope.remaining = function() {
				var count = 0;
				angular.forEach($scope.todos, function(todo) {
					count += todo.done ? 0 : 1;
				});
				return count;
			};

			// archiving
			$scope.archive = function() {
				var oldTodos = $scope.todos;
				$scope.todos = [];
				angular.forEach(oldTodos, function(todo) {
					if (!todo.done)
						$scope.todos.push(todo);
				});
				$scope.message = 'archive is called';
			};

			$scope.message = 'start';
		} ]);

angular.module("homeapp", []).controller("HomeAppController",
		[ '$scope', function($scope) {
			$scope.test01 = "aaaaaa";
			// $scope.test = "aaaaaa";
		} ])
