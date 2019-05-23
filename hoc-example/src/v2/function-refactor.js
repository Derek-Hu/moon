function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

function withLogging(wrappedFunction) {
    return function (x, y) {
        var result = wrappedFunction(x, y);
        console.log('result:', result);
        return result;
    };
}

// Equivalent to writing addAndLog by hand:
var addAndLog = withLogging(add);

// Equivalent to writing multiplyAndLog by hand:
var multiplyAndLog = withLogging(multiply);