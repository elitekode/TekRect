'use strict';

angular.module('app1')
  .config(function($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminCtrl',
        authenticate: 'admin'
      })

      .state('onlyAdmin', {
        url: '/admin-access',
        templateUrl: 'app/admin/only-admin.html'
      });
  });
