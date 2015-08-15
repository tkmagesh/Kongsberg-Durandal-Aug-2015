define("Person", [],function(){

    function Person(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Person;
});


define("Greeter", ["Person"], function(Person){
    function Greeter(){
        this.person = new Person();
        this.greetMsg = '';
        this.greet = function(){
            this.greetMsg = "Hi " + this.person.firstName + " " +this.person.lastName + "!"
        };
    }
    return Greeter;
});

require.config({
    paths: {
        myDummy: 'Dummy'
    },
    shim : {
        "myDummy" : {
            exports : "Dummy"
        }
    }
});

require(["jquery", "Greeter", "myDummy"], function($, Greeter, dummy){
    dummy();
            $(function(){
                var greeter = new Greeter();

                $("#btnGreet").click(function(){
                    greeter.person.firstName = $("#txtFirstName").val();
                    greeter.person.lastName = $("#txtLastName").val();
                    greeter.greet();
                    $("#divMessage").html(greeter.greetMsg);
                });
            });
        });
