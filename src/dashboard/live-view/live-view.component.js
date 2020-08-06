import template from './live-view.component.html';
import './live-view.component.less';

const component = function() {

    const controller = [function() {
        const ctrl = this;

    }];

    return {
        controller: controller,
        template: template
    }
}

angular.module('app').component('liveView', component());