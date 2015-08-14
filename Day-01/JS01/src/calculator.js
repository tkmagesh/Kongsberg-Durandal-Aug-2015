'use strict';

function add(x,y){
    function parseArg(n){
        if (Array.isArray(n)) return add.apply(this,n);
        /*{
            var result = 0;
            for(var i=0; i<n.length; i++)
                result += parseArg(n[i]);
            return result;
        }*/
        if (typeof n === "function") return parseArg(n());
        return isNaN(n) ? 0 : parseInt(n,10);
    }
    /*var result = 0;
    for(var i=0; i<arguments.length; i++)
        result += parseArg(arguments[i]);
    return result;*/

   return arguments.length <= 1 ? parseArg(arguments[0]) : parseArg(arguments[0]) + add([].slice.call(arguments,1));
}

/*
As a function - this -> window
As a method of obj - this -> obj



*/
