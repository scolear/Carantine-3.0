import template from './controls.component.html';
import './controls.component.less';

const component = function() {

    const controller = ['AuthSvc', '$http', '$scope', function(AuthSvc, $http, $scope) {
        
        const ctrl = this;

        // Watch authentication status changes:
        $scope.$watch(
            function () {     
                return AuthSvc.isAuthenticated; }, 
            function (data) {
                ctrl.isAuthenticated = data;

                // Stop motors on user logout:
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

        ctrl.up = function () {
            commandData.command = "up";
            postCommand(commandData);
        };

        ctrl.down = function () {
            commandData.command = "down";
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
                    ctrl.up();
                    break;
                case 39:
                    ctrl.right();
                    break;
                case 40:
                    ctrl.down();
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