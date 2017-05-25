angular.module("MyApp", ["ngMaterial"])

  .config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('blue-grey');
  })
  .controller("TabOne", function($scope) {
    $scope.title = "Count Upwards";
  });
