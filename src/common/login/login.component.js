import template from './login.component.html';
import './login.component.less';

const component = function() {

    const controller = ['AuthSvc', '$http', '$sessionStorage', '$scope', function(AuthSvc, $http, $sessionStorage, $scope) {

        const ctrl = this;

        ctrl.user = {
            email: "", 
            password: ""
        };

        ctrl.isAuthenticated = AuthSvc.isAuthenticated;

        ctrl.submitLogin = () =>
        {
            AuthSvc.login(ctrl.user.email, ctrl.user.password)
            .then(response => {
                ctrl.user.password = "";
                ctrl.isAuthenticated = AuthSvc.isAuthenticated;
            }, error => {
                window.alert("Unsuccessful login");
            });
        };

        ctrl.submitLogout = () => 
        {
            AuthSvc.logout();
            ctrl.isAuthenticated = AuthSvc.isAuthenticated;
            ctrl.user = {
                email: "", 
                password: ""
            };
            $scope.form.$setPristine();
            $scope.form.$setUntouched();
            $scope.form.$setValidity();
            $scope.form.$error = {};
            $scope.apply();
        };

    }];

    return {
        controller: controller,
        template: template
    }
}

angular.module('app').component('login', component());