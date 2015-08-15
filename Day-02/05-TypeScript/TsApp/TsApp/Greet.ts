/// <reference path="references/jquery.d.ts" />
module myApp.models {
    class Greeter {
        name: string;
        age: number;
        isEmployed: boolean;

        constructor(name: string, age: number, isEmployed: boolean) {
            this.name = name;
            this.age = age;
            this.isEmployed = isEmployed;
        }

        display() {
            console.log(this.name, this.age, this.isEmployed);
        }
    }
}

var fn = () => {
    console.log("fn is invoked");
}
