/**
 * 
 */
angular
		.module('myApp.services', [ 'ngResource' ])
		.factory(
				'AngularIssues',
				function($resource) {
					return $resource(
							'http://localhost:8080/SpringMVCAngularJSRESTAndClient01/rest/newJsonUser',
							{}, {
								query : {
									method : 'GET',
									params : {},
									isArray : false
								}
							})
				})
