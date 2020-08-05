import template from './about.component.html';
import './about.component.less';

const component = function() {

    const controller = [function(){

        const ctrl = this;

    }];

    return {
        controller: controller,
        template: template
    }
}

angular.module('app').component('about', component());