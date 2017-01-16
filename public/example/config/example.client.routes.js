// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'example' module routes
angular.module('example').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$stateProvider.
		state({
			name: 'example',
			url: '/', 
			templateUrl: 'example/views/example.client.view.html'
		});

		$urlRouterProvider.otherwise('/');
	}
]); 
