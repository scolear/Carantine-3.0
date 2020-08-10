const app = angular.module('app',['ngRoute', 'swxSessionStorage']);

require('./app.component');

// Additional AngularJS modules
require('./app.route');

// Services

require('./services/auth.service');


// VIEW COMPONENTS

// Common modules
require('./common/login/login.component');
require('./common/header/cr-header.component');

// Dashboard modules
require('./dashboard/dashboard.component');
require('./dashboard/state-display/state-display.component');
require('./dashboard/logs-view/logs-view.component');
require('./dashboard/live-view/live-view.component');
require('./dashboard/controls/controls.component');

// Additional pages
require('./settings/settings.component');
require('./about/about.component');