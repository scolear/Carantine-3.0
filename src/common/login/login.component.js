import template from './login.component.html';
import './login.component.less';

const component = function() {

    const controller = ['$http' , function($http) {

        const ctrl = this;

        ctrl.user = {
            email: "", 
            password: ""
        };

        ctrl.submitLogin = function () 
        {
            if (ctrl.user.email != "" && ctrl.user.password != "") {
                postCommand(ctrl.user);
            } 
        };

        const postCommand = function (userInfo) 
        {
            userInfo.returnSecureToken = "true";

            $http.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDg6ZazQiE--1GenRyZHwazpj-2OnrG_9o', userInfo)
            .then(
                function success(res) {
                    console.log("Login successful");
                },
                function error(res) {
                    console.log("Login failed.");
                }
            );
        };

    }];

    return {
        controller: controller,
        template: template
    }
}

angular.module('app').component('login', component());