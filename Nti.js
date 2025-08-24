let display = document.getElementById('display');

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function changeSign() {
  if (display.value.charAt(0) === '-') {
    display.value = display.value.slice(1);
  } else {
    display.value = '-' + display.value;
  }
}

function calculate() {
  try {
    display.value = eval(display.value.replace(/×/g, '*').replace(/÷/g, '/'));
  } catch (e) {
    display.value = 'Error';
  }
}
