;(function () {

  var app = window.angular.module('app', [ 'angularInputEnhancer' ]);

  app.controller('ctrl', [ '$scope', function ($scope) {
    $scope.data = {
      firstName: null,

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
