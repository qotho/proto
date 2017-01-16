// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'articles' module routes
angular.module('articles').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$stateProvider.
		state('app', {
			abstract: true,
			views: {
				'nav': {
        			templateUrl: 'articles/views/common-nav.client.view.html'
				}
			}
		}).
		state('app.articles', {
			url: '/articles',
			views: {
				// Absolute view name targeting unnamed view in 'index.ejs'
				"@" : { 
					templateUrl: 'articles/views/list-articles.client.view.html'
				},
				'menu@app': {
        			templateUrl: 'articles/views/menu1.client.view.html'
				}
			}
		}).
		state('app.create', {
			url: '/articles/create',
			views: {
				"@" : { 
					templateUrl: 'articles/views/create-article.client.view.html'
				},
				'menu@app': {
        			templateUrl: 'articles/views/menu2.client.view.html'
				}
			}
		}).
		state('app.view', {
			url: '/articles/:articleId',
			views: {
				"@" : { 
					templateUrl: 'articles/views/view-article.client.view.html'
				},
				'menu@app': {
        			templateUrl: 'articles/views/menu2.client.view.html'
				}
			}
		}).
		state('app.edit', {
			url: '/articles/:articleId/edit',
			views: {
				"@" : { 
					templateUrl: 'articles/views/edit-article.client.view.html'
				},
				'menu@app': {
        			templateUrl: 'articles/views/menu2.client.view.html'
				}
			}
		}).
		state({
			name: 'app.comments',
			url: '/articles/:articleId/comments', 
			templateUrl: 'articles/views/list-comments.client.view.html'
		});

		/* If the path doesn't match any of the URLs above, route to the specified to root. */
		$urlRouterProvider.otherwise('/articles');
	}
]); 