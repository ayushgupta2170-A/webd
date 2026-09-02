function oddEvenTest(request) {
    if(request == "odd") {
        return function(n) {
            console.log(!(n%2 == 0));
        }
    } else if(request == "even") {
        return function(n) {
            console.log(n%2 == 0);
        }
    } else {
        console.log("wrong request");
    }
}



const calculator = {
    num:55,
    add: function(a, b) {
        return a + b;
    },
    sub: function(a, b) {
        return a - b;
    },
    mul: function(a, b) {
        return a * b;
    }
};