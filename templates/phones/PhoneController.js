angular.module('PhoneController',[])
.controller('PhoneCtrl', function($scope, $http){
  $http.get('http://localhost/PhotoCatalog/json/phones.json')
  .success(function(response){
    $scope.phones = response;
  });
  $scope.sortColumn = "age";
});
