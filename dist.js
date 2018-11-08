window.onload = function() {
    ({
        testfunc: function c(a) {
            if ("test1" === a) var b = function() {
                    console.log(), console.log("this is scope func 2")
                };
            scopefunc1(), b(), scopefunc3()
        }
    }).testfunc("value")
};
