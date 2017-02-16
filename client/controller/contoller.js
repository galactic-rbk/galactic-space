angular.module('myapp.AppCtlr', [])
.controller("appCtlr" ,function ($scope,$http){
console.log("hello world from ");
console.log($scope)
	$scope.info=function(num){
		console.log("hii "+ num)
		// $http.get('/')
	}

})