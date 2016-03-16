app.controller('MainController', function($scope, $http) { 
	$http.get('http://wc-dev09.cl.adap.tv:4310/sessions/login?un=admin@adap.tv&pw=admin').then(function (response) {
  		$scope.title = 'session id';
  		$scope.mangodata = response.data;
	});
});

