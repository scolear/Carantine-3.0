import template from './state-display.component.html';
import './state-display.component.less';

const component = function() {

    const controller = [function() {
        const ctrl = this;

        // TODO: Get this information from the server:

        ctrl.state = "IDLE";
        ctrl.sensor_1 = 123;
        ctrl.sensor_2 = 456;
        ctrl.sensor_3 = 789;
        ctrl.motor_1 = 0;
        ctrl.motor_2 = 0;
    }];

    return {
        controller: controller,
        template: template
    }
}

angular.module('app').component('stateDisplay', component());