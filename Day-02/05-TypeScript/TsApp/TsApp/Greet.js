/// <reference path="references/jquery.d.ts" />
var myApp;
(function (myApp) {
    var models;
    (function (models) {
        var Greeter = (function () {
            function Greeter(name, age, isEmployed) {
                this.name = name;
                this.age = age;
                this.isEmployed = isEmployed;
            }
            Greeter.prototype.display = function () {
                console.log(this.name, this.age, this.isEmployed);
            };
            return Greeter;
        })();
    })(models = myApp.models || (myApp.models = {}));
})(myApp || (myApp = {}));
var fn = function () {
    console.log("fn is invoked");
};
//# sourceMappingURL=Greet.js.map
