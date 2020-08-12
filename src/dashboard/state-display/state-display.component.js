import template from './state-display.component.html';
import './state-display.component.less';

const component = function() {

    const controller = [function() {
        const ctrl = this;

        // TODO: Get this information from the server:

        ctrl.state = "LT";

        ctrl.sensor_1 = 15;
        ctrl.sensor_2 = 122;
        ctrl.sensor_3 = 30;

        ctrl.motor_1 = 3;
        ctrl.motor_2 = 5;

        const motorSteps = 10;
        const warningDistance = 40;
        const dangerDistance = 20;

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
                data: [ctrl.sensor_2, ctrl.sensor_3, 0, 0, 0, ctrl.sensor_1],
                color: function(distance) {
                    if (distance.value < dangerDistance) {
                        return "red";
                    } else if (distance.value < warningDistance) {
                        return "yellow";
                    }
                }
            }],
            categoryAxis: {
                categories: ["S2", "S3", "", "", "", "S1"],
                visible: false
            },
            valueAxis: {
                labels: {
                    format: "{0} cm"
                },
                  max: 100
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
            value: ctrl.motor_1,
            scale: {
                startAngle: -75,
                endAngle: 45,
                rangeLineCap: "butt",
                rangeSize: 20,
                labels: {
                    visible: true
                },
                max: motorSteps
            }
            
        };

        ctrl.motorGauge2Options = {
            theme: "bootstrap",
            seriesDefaults: {
                type: "arcGauge"
            },
            value: ctrl.motor_2,
            scale: {
                startAngle: 135,
                endAngle: 255,
                rangeLineCap: "butt",
                rangeSize: 20,
                labels: {
                    visible: true
                },
                max: motorSteps,
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