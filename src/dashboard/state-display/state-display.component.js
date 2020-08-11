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

        ctrl.distanceOptions = {
            title: {
                text: "Ultrasonic distance",
                visible: false
            },
            legend: {
                visible: false
            },
            theme: "bootstrap",
            seriesDefaults: {
                type: "radarColumn"
            },
            series: [{
                name: "Distance",
                data: [116, 165, 0, 0, 0, 120]
            }],
            categoryAxis: {
                categories: ["S2", "S3", "", "", "", "S1"]
            },
            valueAxis: {
                labels: {
                    format: "{0} cm"
                },
                  max: 200
            },
            tooltip: {
                visible: true,
                format: "{0} cm"
            }
        };

        ctrl.motorGauge1Options = {
            theme: "bootstrap",
            seriesDefaults: {
                type: "arcGauge"
            },
            value: 1,
            scale: {
                startAngle: -90,
                endAngle: 90,
                rangeLineCap: "butt",
                rangeSize: 20,
                labels: {
                    visible: true
                },
                max: 10
            },
            
        };

        ctrl.motorGauge2Options = {
            theme: "bootstrap",
            seriesDefaults: {
                type: "arcGauge"
            },
            value: 1,
            scale: {
                startAngle: 90,
                endAngle: 270,
                rangeLineCap: "butt",
                rangeSize: 20,
                labels: {
                    visible: true
                },
                max: 10,
                reverse: true
            },
            
        };
    }];

    return {
        controller: controller,
        template: template
    }
}

angular.module('app').component('stateDisplay', component());