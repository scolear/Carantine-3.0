import template from './app.component.html';
import './app.component.less';

const component = function() {

    const controller = [function(){

        const ctrl = this;

    }];

    return {
        controller: controller,
        template: template
    }
}

angular.module('app').component('appRoot',component());