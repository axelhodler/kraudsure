/**
 * Main App Controller for the Angular Material Starter App
 * @param CasesDataService
 * @param $mdSidenav
 * @constructor
 */
function AppController($mdSidenav) {
  var self = this;

  self.selected     = 'home';
  self.toggleList   = toggleMenuList;
  self.selectPage   = selectPage;

  // *********************************
  // Internal methods
  // *********************************

  /**
   * Hide or Show the 'left' sideNav area
   */
  function toggleMenuList() {
    $mdSidenav('left').toggle();
  }

  function selectPage ( page ) {
    self.selected = page;
  }
}

export default [ '$mdSidenav', AppController ];