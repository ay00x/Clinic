(function () {
  'use strict';

  angular.module('harmonyClinicApp', [])
    .controller('WelcomeController', ['$http', '$window', function ($http, $window) {
      var vm = this;
      vm.welcomeMessage = 'Loading welcome message...';

      var configuredUrl = $window.localStorage.getItem('harmonyClinicWelcomeUrl');
      var apiUrl = configuredUrl || 'http://localhost:8000/welcome';

      $http.get(apiUrl, { timeout: 5000 }).then(function (response) {
        if (response && response.data) {
          if (typeof response.data === 'string') {
            vm.welcomeMessage = response.data;
          } else if (response.data.message) {
            vm.welcomeMessage = response.data.message;
          } else {
            vm.welcomeMessage = 'Welcome to Harmony Health Clinic!';
          }
        } else {
          vm.welcomeMessage = 'Welcome to Harmony Health Clinic!';
        }
      }).catch(function () {
        vm.welcomeMessage = 'Welcome to Harmony Health Clinic! (Start the API to see live updates.)';
      });
    }]);
})();
