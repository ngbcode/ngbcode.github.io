angular.module("AboutApp", ["ngMaterial"])

  .config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('blue-grey');
  });
