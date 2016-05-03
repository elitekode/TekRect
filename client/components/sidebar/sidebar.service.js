'use strict';

angular.module('app1')
  .factory('Catalog', function ($resource) {
    return $resource('/api/catalogs/:id');
  });
