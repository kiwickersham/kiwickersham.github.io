function leftButton() {
    let btn = document.querySelector("#left");
    if(btn.innerHTML === "Decrement") {
        decr();
    }
    else {
        incr();
    }
    swap();
}

function rightButton() {
    let btn = document.querySelector("#right");
    if(btn.innerHTML === "Increment") {
        incr();
    }
    else {
        decr();
    }
    swap();
}

function swap() {
    let left = document.querySelector("#left");
    let right = document.querySelector("#right");

    if(left.innerHTML === "Decrement") {
        left.innerHTML = "Increment";
        right.innerHTML = "Decrement";
    }
    else {
        left.innerHTML = "Decrement";
        right.innerHTML = "Increment";
    }
}

function incr() {
    let vol = document.querySelector("#current");
    let num = Number(vol.innerHTML);
    if(num === 100) {
        swap();
    }
    else {
        num ++;
        vol.innerHTML = num;
    }
}

function decr() {
    let vol = document.querySelector("#current");
    let num = Number(vol.innerHTML);
    if(num === 0) {
        swap();
    }
    else {
        num --;
        vol.innerHTML = num;
    }
}