import template from './cr-header.component.html';
import './cr-header.component.less';

const component = function() {

    const controller = [function(){

        const ctrl = this;

    }];

    return {
        controller: controller,
        template: template
    }

}

angular.module('app').component('crHeader', component());