import template from './logs-view.component.html';
import './logs-view.component.less';

const component = function() {

    const controller = [function() {
        const ctrl = this;

    }];

    return {
        controller: controller,
        template: template
    }
}

angular.module('app').component('logsView', component());