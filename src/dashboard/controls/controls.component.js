import template from './controls.component.html';
import './controls.component.less';

const component = function() {

    const controller = [function() {
        const ctrl = this;

    }];

    return {
        controller: controller,
        template: template
    }
}

angular.module('app').component('controls', component());