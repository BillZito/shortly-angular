angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};

  $scope.getAll = function() {
    Links.getAll()
      .then(function(resp) {
        $scope.data.links = resp;
      });
  };

  $scope.getAll();

});
