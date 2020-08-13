import template from './login.component.html';
import './login.component.less';

const component = function() {

    const controller = ['AuthSvc', '$scope', function(AuthSvc, $scope) {

        const ctrl = this;

        ctrl.user = {
            email: "", 
            password: ""
        };

        $scope.$watch(
            function () {     
                return AuthSvc.isAuthenticated; }, 
            function (data) {
                ctrl.isAuthenticated = data;
             }, true
        );

        ctrl.submitLogin = () =>
        {
            AuthSvc.login(ctrl.user.email, ctrl.user.password)
            .then(response => {
                ctrl.user.password = "";
            }, error => {
                window.alert("Unsuccessful login");
            });
        };

        ctrl.submitLogout = () => 
        {
            AuthSvc.logout();
            ctrl.user = {
                email: "", 
                password: ""
            };
            $scope.form.$setPristine();
            $scope.form.$setUntouched();
            $scope.form.$setValidity();
            $scope.form.$error = {};
        };

    }];

    return {
        controller: controller,
        template: template
    }
}

angular.module('app').component('login', component());