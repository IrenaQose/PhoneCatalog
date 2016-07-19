angular.module('DetailsController',[])
.controller('PhoneDetailsCtrl', function($scope, $http, $stateParams){
  $scope.id = $stateParams.phoneId;
  $http.get('json/' + $scope.id + '.json').then(function(response) {
    $scope.phone = response.data;
    $scope.setImage($scope.phone.images[0]);
    console.log($scope.phone);
  });
  $scope.setImage = function setImage(imageUrl) {
    $scope.mainImageUrl = imageUrl;
   };
  $scope.setImage($scope.mainImageUrl);
  
  $scope.model = {
  name: 'Tabs'
};
 $scope.rate = 0;
 $scope.max = 10;
 $scope.isReadonly = false;

 $scope.hoveringOver = function(value) {
   $scope.overStar = value;
   $scope.percent = 100 * (value / $scope.max);
 };

 $scope.ratingStates = [
   {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
   {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
   {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
   {stateOn: 'glyphicon-heart'},
   {stateOff: 'glyphicon-off'}
 ];
});
