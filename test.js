window.onload = () => {
    var obj = {
        testfunc: function(value){
            if(value === 'test1'){
                function scopefunc1(){
                    console.log('this is scope func 1');
                }
                var scopefunc2 = () => {
                    console.log();
                    console.log('this is scope func 2');
                }
                let scopefunc3 = () => {

                }
            }
            // that func should be exists
            scopefunc1();
            // if the if condition is true, also should be exists
            scopefunc2();
            // never exists whatever the condition result is
            scopefunc3();
        }
    }
    obj.testfunc("value");
}