'use strict';

angular.module('app1')
  .controller('MainCtrl', function($scope, $http, socket, Product) {
    $scope.products = Product.query();
  });
