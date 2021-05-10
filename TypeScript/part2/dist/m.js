"use strict";
{
    let b = 20;
    console.log(b);
    function fn(a, b) {
        return a + b;
    }
    ;
    function fn2() {
        console.log(this);
    }
    ;
    let box1 = document.getElementById('box1');
    box1?.addEventListener('click', function () {
        console.log('hello');
    });
}
