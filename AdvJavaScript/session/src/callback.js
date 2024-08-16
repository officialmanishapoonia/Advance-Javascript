var iseven = function (num, callback) {
    setTimeout(function () {
        if (num % 2 === 0) {
            callback(true);
        }
        else {
            callback(false);
        }
    }, 3000);
};
iseven(12, function (result) {
    console.log(result);
});
