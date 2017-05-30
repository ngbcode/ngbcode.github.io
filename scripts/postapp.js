angular.module("PostApp", ["ngMaterial"],
    function($interpolateProvider) {
        $interpolateProvider.startSymbol('[[{').endSymbol('}]]');
    })

  .config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('blue-grey');
  });
