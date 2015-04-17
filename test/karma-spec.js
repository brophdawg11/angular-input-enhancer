describe('angular-input-enhancer', function () {

  var $injector;

  beforeEach(function () {
    // Create shell app for the interceptor
    angular.module('app', [ 'angular-input-enhancer' ]);

    // Instantiate app
    module('app');

    // Inject test dependencies
    inject(function (_$injector_) {
      $injector = _$injector_;
    });

  });

});
