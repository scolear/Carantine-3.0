const app = angular.module('app',[require('angular-route')]);

require('./app.component');

// Routing
require('./app.route');

// Header module
require('./common/header/cr-header.component');

// Dashboard modules
require('./dashboard/dashboard.component');

// Additional pages
require('./settings/settings.component');
require('./about/about.component');