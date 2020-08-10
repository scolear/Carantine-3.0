import template from './live-view.component.html';
import './live-view.component.less';

const component = function() {

    const controller = ['$timeout', '$scope', function($timeout, $scope) 
    {
        const ctrl = this;

        ctrl.$onInit = function () {
            console.log("lve view componenet oninit");
            $timeout(function(){
                console.log("$timeout");
            }, 2000);
            setTimeout(function(){
                console.log("setTimeout");

                ctrl.test = 10;
                $scope.$apply();
            }, 2000);
        };

        ctrl.test = 0;


    }];

    return {
        controller: controller,
        template: template
    }
}

angular.module('app').component('liveView', component());