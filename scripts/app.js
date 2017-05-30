angular.module("MyApp", ["ngMaterial"],
    function($interpolateProvider) {
        $interpolateProvider.startSymbol('[[{').endSymbol('}]]');
    })

  .config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('blue-grey');
  })
  .controller("TabOne", function($scope) {
    $scope.btnProj = "Projects";
  })
  .controller("TabTwo", function($scope) {
      $scope.btnBlog = "Articles";
  });
