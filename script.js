let form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    let output = document.querySelector('output');
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    let operator = document.querySelector('#operator').value;
    output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));
let counter = 0;
errorBtns[0].addEventListener('click', function() {
    console.log("Console Log Demo");
});
errorBtns[1].addEventListener('click', function() {
    console.error("Console Error Demo");
});
errorBtns[2].addEventListener('click', function() {
    ++counter;
    console.log(`Count Button: ${counter}`);
});
errorBtns[3].addEventListener('click', function() {
    console.warn("Console Warn Button");
});
errorBtns[4].addEventListener('click', function() {
    console.assert(2 === 3, 'The number does not equal 3'); //try again
});
errorBtns[5].addEventListener('click', function() {
    console.clear();
});
errorBtns[6].addEventListener('click', function() {
    console.dir(errorBtns[6]);
});
errorBtns[7].addEventListener('click', function() {
    console.dirxml(errorBtns[7]);
});
errorBtns[8].addEventListener('click', function() {
    console.group("console.group");
});
errorBtns[9].addEventListener('click', function() {
    console.groupEnd();
});
errorBtns[10].addEventListener('click', function() {
    
    console.table(); // FILL TABLE
});
errorBtns[11].addEventListener('click', function() {
    console.time();
});
errorBtns[12].addEventListener('click', function() {
    console.log(console.timeEnd());
});
errorBtns[13].addEventListener('click', function() {
    console.trace();
});