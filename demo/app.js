;(function () {

  var app = window.angular.module('app', [ 'angularInputEnhancer' ]);

  app.controller('ctrl', [ '$scope', function ($scope) {
    $scope.data = {
      email: null,

      genders: {
        available: [{
          type: "Male",
        }, {
          type: "Female"
        }],
        selected: null
      }
    }

    $scope.data.genders.selected = $scope.data.genders.available[0];
  }]);

})();
