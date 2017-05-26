angular.module("PortfolioApp", ["ngMaterial"])

  .config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('blue-grey');
  });
