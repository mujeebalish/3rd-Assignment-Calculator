var display = document.getElementById('display');


function press(num) {
    
display.value += num;
}

function calculate() {
try {
display.value = eval(display.value);
} catch (e) {
display.value = 'Error';
}
}

function clearAllDisplay() {
display.value = '';
}

function clearDisplay() {
    display.value.splice(-1,1)
}
