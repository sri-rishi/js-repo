const inputBox = document.getElementById("inputBox");
let count = 0;

function debounceFunc (func, delay) {
    let debounceTimer;
    return function () {
        let context = this;
        let args = arguments;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            func.apply(context, args);
        }, delay)
    }
}
inputBox.addEventListener("input", debounceFunc(() => {
    console.log("clicked", count++);
}, 3000))

