// Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import AppController from 'src/AppController';
import Cases from 'src/cases/Cases';

export default angular.module( 'starter-app', [ 'ngMaterial', Cases.name ] )
  .config(($mdIconProvider, $mdThemingProvider) => {
    // Register the user `avatar` icons
    $mdIconProvider
      .defaultIconSet("./assets/svg/avatars.svg", 128)
      .icon("menu", "./assets/svg/menu.svg", 24)
      
    $mdThemingProvider.theme('default')
      .primaryPalette('orange')
      .accentPalette('deep-orange');
  })
  .controller('AppController', AppController);
