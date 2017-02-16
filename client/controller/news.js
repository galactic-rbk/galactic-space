var app = angular.module('myApp', []);
// getting the latest space news from raddit space api 
app.controller('myCtrl', function($scope, $http) {
  $http.get("https://www.reddit.com/r/space/.json")
  .then(function(response) {
      $scope.news = response.data.data.children;
  });
});