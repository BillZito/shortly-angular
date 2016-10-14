angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function(url) {
    Links.addOne(url)
      .then(function(resp) {
      });
  };
});



// angular.module('shortly.links', [])

// .controller('LinksController', function ($scope, Links) {
//   // Your code here
//   $scope.data = {};

//   $scope.getAll = function() {
//     Links.getAll()
//       .then(function(resp) {
//         $scope.data.links = resp;
//       });
//   };

//   $scope.getAll();

// });
