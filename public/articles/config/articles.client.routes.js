// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'articles' module routes
angular.module('articles').config(['$stateProvider',
	function($stateProvider) {
		$stateProvider.
		state({
			name: 'articles',
			url: '/articles', 
			templateUrl: 'articles/views/list-articles.client.view.html'
		}).
		state({
			name: 'create',
			url: '/articles/create', 
			templateUrl: 'articles/views/create-article.client.view.html'
		}).
		state({
			name: 'view',
			url: '/articles/:articleId', 
			templateUrl: 'articles/views/view-article.client.view.html'
		}).
		state({
			name: 'edit',
			url: '/articles/:articleId/edit', 
			templateUrl: 'articles/views/edit-article.client.view.html'
		}).
		state({
			name: 'comments',
			url: '/articles/:articleId/comments', 
			templateUrl: 'articles/views/list-comments.client.view.html'
		});
	}
]); 