angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function() {
    Links.addOne($scope.link)
      .then(function(resp) {
        console.log('shorten resp is', resp);
      });
  };
});