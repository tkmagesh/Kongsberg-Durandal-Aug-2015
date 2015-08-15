/* Sync */
function add(x,y){
    console.log("[SP] processing ", x , " and ", y);
    var result = x + y;
    console.log("[SP] returning result");
    return result;
}

function addClient(x,y){
    console.log("[SC] triggering add");
    var result = add(x,y);
    console.log("[SC] result = ", result);
}

/* Async - callbacks*/
function addAsync(x,y, onResult){
    console.log("[SP] processing ", x , " and ", y);
    setTimeout(function(){
        var result = x + y;
        console.log("[SP] returning result");
        onResult(result);
    },4000);
}

function addAsyncClient(x,y){
    console.log("[SC] triggering add");
    var result = addAsync(x,y, function(result){
        console.log("[SC] result = ", result);
    });
}

/* Async - Events*/
function getAdder(){
    var _handlers = [];
    return {
        add : function(x,y){
            console.log("[SP] processing ", x , " and ", y);
            setTimeout(function(){
                var result = x + y;
                console.log("[SP] returning result");
                _handlers.forEach(function(handler){
                    handler(result);
                })
            },4000);
        },
        addSubscriber : function(handlerFn){
            _handlers.push(handlerFn);
        }
    }
}


//Client



/*Async - Promise*/
function add(x,y){
    console.log("[SP] processing ", x , " and ", y);
    var promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            var result = x + y;
            console.log("[SP] returning result");
            resolve(result)
        },4000);
    });
    return promise;
}

//client
var p = add(100,200);
p.then(function(result){
    var deferred = Q.defer();
    //trigger async operation passing the deferred
    asyncOperation(deferred);ht
    return deferred.promise;

}).then(function(){

})
/*
p.catch(function(err){
})
*/
p.then().then().then()












