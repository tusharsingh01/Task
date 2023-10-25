var number = 71;
if (number == 1) {
    console.log("".concat(number, " is neither prime nor composite"));
}
else if (number < 1) {
    console.log("".concat(number, " is not a prime"));
}
else {
    for (var i = 2; i < number; i++) {
        if (number % 2 == 0) {
            var res = "".concat(number, " is not prime number");
            break;
        }
        else {
            var res = "".concat(number, "is a prime number");
        }
    }
    console.log(res);
}