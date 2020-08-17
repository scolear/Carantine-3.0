import template from './cr-header.component.html';
import './cr-header.component.less';

const component = function() {

    const controller = ['AuthSvc', '$scope', function(AuthSvc, $scope) {

        const ctrl = this;

        ctrl.showDropdown = false;

        $scope.$watch(
            function () {     
                return AuthSvc.isAuthenticated; }, 
            function (isAuth) {
                isAuth ? ctrl.signInButtonText = "Sign out" : ctrl.signInButtonText = "Sign in";
             }, true
        );

    }];

    return {
        controller: controller,
        template: template
    }

}

angular.module('app').component('crHeader', component());