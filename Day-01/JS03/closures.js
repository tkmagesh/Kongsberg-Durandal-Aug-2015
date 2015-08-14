function getSpinner(){
    var count = 0;
    return {
        up : function(){ return ++count; },
        down : function(){ return --count; }
    }
}

function Spinner(){
    var count = 0;
    this.up = function(){ return ++count; }
    this.down = function(){ return --count; }
}


function getPrimeFinder(){

    var cache = {};

    function isPrime(n){
        console.log("executing algorithm for ", n);
        if (n <= 3) return true;
        for(var i=2; i<=(n/2); i++)
            if (n % i === 0) return false;
        return true;
    }

    return function(n){
        if (typeof cache[n] === "undefined")
            cache[n] = isPrime(n);
        return cache[n];
    }

}


function memoize(fn){

    var cache = {};
    return function(){
        var key = JSON.stringify(arguments);
        if (typeof cache[key] === "undefined")
            cache[key] = fn.apply(this,arguments);
        return cache[key];
    }

}

function isPrime(n){
        console.log("executing algorithm for ", n);
        if (n <= 3) return true;
        for(var i=2; i<=(n/2); i++)
            if (n % i === 0) return false;
        return true;
    }

var memoizedPrimeFinder = memoize(isPrime);


