let count = 0;

function throttleFunc (func, delay) {
    let flag = false;

    return function () {
        const context = this;
        const args = arguments;
        if(flag) {
            return;
        } 
        func.apply(context, args);
        flag = true;
        setTimeout(() => {
            flag = false;
        }, delay)
    }
}

window.addEventListener("resize", throttleFunc(() => {
    console.log("Resize", count++);
}, 3000))