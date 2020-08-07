import template from './logs-view.component.html';
import './logs-view.component.less';
import { $inject } from 'file-loader';

const component = function() {

    const controller = ['$http', function($http) {

        const ctrl = this;

        ctrl.logs = [];


        setInterval(function() {
            requestLogs();
        }, 5000);


        const requestLogs = function () {
            $http.get('http://localhost:1880/log_update/')
            .then(
                function success(res) {
                    ctrl.logs = res.data;
                },
                function error(res) {
                }
            );
        };



    }];

    return {
        controller: controller,
        template: template
    }
}

angular.module('app').component('logsView', component());