import template from './controls.component.html';
import './controls.component.less';

const component = function() {

    const controller = ['AuthSvc', '$http', '$scope', function(AuthSvc, $http, $scope) {
        
        const ctrl = this;

        $scope.$watch(
            function () {     
                return AuthSvc.isAuthenticated; }, 
            function (data) {
                ctrl.isAuthenticated = data;
                if (AuthSvc.sessionEnded) {ctrl.allStop();};
             }, true
        );
        
        let commandData = {
            command: "undefined"
        };

        const postCommand = function (data) {
            $http.post('http://localhost:1880/command/', data)
            .then(
                function success(res) {
                    console.log(data.command + " command sent successfully.");
                },
                function error(res) {
                    window.alert("Command request failed");
                    console.log(data.command + " command request failed.");
                }
            );
        };

        ctrl.forward = function () {
            commandData.command = "forward";
            postCommand(commandData);
        };

        ctrl.backward = function () {
            commandData.command = "backward";
            postCommand(commandData);
        };

        ctrl.left = function () {
            commandData.command = "left";
            postCommand(commandData);
        };

        ctrl.right = function () {
            commandData.command = "right";
            postCommand(commandData);
        };

        ctrl.allStop = function () {
            commandData.command = "stop";
            postCommand(commandData);
        };

        ctrl.auto = function () {
            commandData.command = "auto";
            postCommand(commandData);
        };

        $scope.keypress = ($event) => {
            switch($event.keyCode) {
                case 32: 
                    ctrl.allStop();
                    break;
                case 37:
                    ctrl.left();
                    break;
                case 38:
                    ctrl.forward();
                    break;
                case 39:
                    ctrl.right();
                    break;
                case 40:
                    ctrl.backward();
                    break;
                case 65:
                    ctrl.auto();
                    break;
            }
        };

    }];

    return {
        controller: controller,
        template: template
    }
}

angular.module('app').component('controls', component());