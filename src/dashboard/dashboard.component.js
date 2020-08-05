import template from './dashboard.component.html';
import './dashboard.component.less';

const component = function() {

    const controller = [function() {

        const ctrl = this;

    }];

    return {
        controller: controller,
        template: template
    }
}

angular.module('app').component('dashboard', component());