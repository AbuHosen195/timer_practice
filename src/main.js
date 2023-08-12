
const button1 = document.querySelector(".card-body .start");
const button2 = document.querySelector(".card-body .stop");
const button3 = document.querySelector(".card-body .reset");
const h1 = document.querySelector(".card-body h1")


let count = 0;
let counter;
button1.onclick = () => {
    

    setTimeout(() => {
        h1.innerHTML = count;
       counter = setInterval(() => {
            count++;
            h1.innerHTML = count;
        }, 1000);
    });
}
button2.onclick = () => {
    clearInterval(counter);
};

button3.onclick = () => { 
    clearInterval(counter);
    count = 0;
    h1.innerHTML = 0;
};