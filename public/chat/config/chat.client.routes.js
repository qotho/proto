// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'chat' module routes
angular.module('chat').config(['$stateProvider',
	function($stateProvider) {
		$stateProvider.
		state({
			name: 'chat',
			url: '/chat', 
			templateUrl: 'chat/views/chat.client.view.html'
		});
	}
]); 
