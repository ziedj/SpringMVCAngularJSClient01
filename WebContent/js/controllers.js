/**
 * 
 */
angular.module('myApp.controllers', []).controller('MyCtrl1',
		[ '$scope', 'AngularIssues', function($scope, AngularIssues) {
			// Instantiate an object to store your scope data in (Best
			// Practices)
			AngularIssues.get({}, function(AngularIssues) {
				$scope.name = AngularIssues.name;
				$scope.firstName = AngularIssues.firstName;
			})

			// AngularIssues.query(function(response) {
			// // Assign the response INSIDE the callback
			// $scope.data.issues = response;
			// });
		} ])

.controller('MyCtrl2', [ function() {
} ]);
