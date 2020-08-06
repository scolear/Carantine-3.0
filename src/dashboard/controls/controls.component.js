import template from './controls.component.html';
import './controls.component.less';

const component = function() {

    const controller = ['$http', function($http) {
        
        const ctrl = this;
        
        let commandData = {
            command: "undefined"
        };

        const sendRequest = function (data) {
            $http.post('http://localhost:1880/command/', data)
            .then(
                function success(res) {
                    console.log(data.command + " command sent successfully.");
                },
                function error(res) {
                    console.log(data.command + " command request failed.");
                }
            );
        };

        ctrl.forward = function () {
            commandData.command = "forward";
            sendRequest(commandData);
        };

        ctrl.backward = function () {
            commandData.command = "backward";
            sendRequest(commandData);
        };

        ctrl.left = function () {
            commandData.command = "left";
            sendRequest(commandData);
        };

        ctrl.right = function () {
            commandData.command = "right";
            sendRequest(commandData);
        };

        ctrl.allStop = function () {
            commandData.command = "stop";
            sendRequest(commandData);
        };

        ctrl.auto = function () {
            commandData.command = "auto";
            sendRequest(commandData);
        };

    }];

    return {
        controller: controller,
        template: template
    }
}

angular.module('app').component('controls', component());