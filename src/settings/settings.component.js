import template from './settings.component.html';
import './settings.component.less';

const component = function() {

    const controller = [function(){

        const ctrl = this;

    }];

    return {
        controller: controller,
        template: template
    }
}

angular.module('app').component('settingsPage',component());