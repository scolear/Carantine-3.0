import template from './login.component.html';
import './login.component.less';

const component = function() {

    const controller = ['AuthSvc', '$http', '$sessionStorage', function(AuthSvc, $http, $sessionStorage) {

        const ctrl = this;

        ctrl.user = {
            email: "", 
            password: ""
        };

        ctrl.submitLogin = () =>
        {
            AuthSvc.login(ctrl.user.email, ctrl.user.password)
            .then(response => {
                ctrl.user.email = "";
                ctrl.user.password = "";
                window.alert("Login success");
            }, error => {
                window.alert("Unsuccessful");

            });
        };

        

    }];

    return {
        controller: controller,
        template: template
    }
}

angular.module('app').component('login', component());