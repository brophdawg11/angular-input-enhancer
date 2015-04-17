;(function () {

window.angular.module('angularInputEnhancer', [])
              .directive('angularInputEnhancer', angularInputEnhancer );

function angularInputEnhancer() {

  function link(scope, element, attrs, formCtrl) {
    if (formCtrl) {
      scope.formCtrl = formCtrl;
    }
  }

  return {
    restrict: 'E',
    templateUrl: '../src/angular-input-enhancer.tpl.html',
    transclude: true,
    replace: true,
    require: '?^form',  // Containing form controller, if available
    link: link,
    scope: {
      name: '@',
      label: '@',
      id: '@',
      errorMessages: '='
    }
  }
}

})();
