angular.module('app')
    .service('AuthSvc', ['$http', '$q', '$sessionStorage', function($http, $q, $sessionStorage) {

        let _this = this;

        _this.isAuthenticated = false;

        _this.login = (userName, password) => {
            // TODO: 
            // Set http interceptor settings and tokens

            let user = {
                email: userName,
                password: password
            };

            user.returnSecureToken = "true";

            return $q(function(resolve, reject) {

                $http.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDg6ZazQiE--1GenRyZHwazpj-2OnrG_9o', user)
                .then(
                    function success(res) {

                        $sessionStorage.put('idToken', res.data.idToken);

                        _this.isAuthenticated = true;

                        console.log("Login successful");
                        resolve(true);
                    },
                    function error(res) {
                        
                        console.log("Login failed.");
                        reject();
                    }
                );

            });


        };


}]);