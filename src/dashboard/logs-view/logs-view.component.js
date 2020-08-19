import template from './logs-view.component.html';
import './logs-view.component.less';
import { $inject } from 'file-loader';

const component = function() {

    const controller = ['$http', function($http) {

        const ctrl = this;

        ctrl.logs = [];

        ctrl.requestLogs = function () {
            $http.get('http://localhost:1880/log_update/')
            .then(
                function success(res) {
                    ctrl.logs = res.data;
                    ctrl.grid.setDataSource(ctrl.logs);
                },
                function error(res) {
                }
            );
        };

        ctrl.requestLogs();

        ctrl.gridOptions = {
            columns: [
                {
                    field: "time",
                    title: "Time",
                    width: "115px"
                },
                {
                    field: "event",
                    title: "Event",
                    width: "105px"
                },
                {
                    field: "state",
                    title: "State",
                    width: "60px"
                },
                {
                    field: "M1",
                    title: "M1",
                    width: "40px"
                },
                {
                    field: "M2",
                    title: "M2",
                    width: "40px"
                },
                {
                    field: "S1",
                    title: "S1",
                    width: "50px"
                },
                {
                    field: "S2",
                    title: "S2",
                    width: "50px"
                },
                {
                    field: "S3",
                    title: "S3",
                    width: "50px"
                },
            ]
        };

        ctrl.timer = setInterval(function() {
            ctrl.requestLogs();
        }, 5000);

        ctrl.$onDestroy = () => {
            console.log("destroy");
            clearInterval(ctrl.timer);
        };

    }];

    return {
        controller: controller,
        template: template
    }
}

angular.module('app').component('logsView', component());