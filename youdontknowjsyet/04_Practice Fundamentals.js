

function myFunction (a,b,c,d,e,f) {
    var a = 4;
    var b = 5;
    var c = 6;
    var d = 1;
    var e = 9;
    var f = 10;
    a.splice(0,2)
    return(a);
}

export function arrayDone(a) {
    var publicAPI = {
        print() {
            myFunction(a);
        }
    };

    return publicAPI;
}
