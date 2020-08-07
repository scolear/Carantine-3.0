import template from './login.component.html';
import './login.component.less';

const component = function() {

    const controller = [function(){

        const ctrl = this;

    }];

    return {
        controller: controller,
        template: template
    }
}

angular.module('app').component('login', component());