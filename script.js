const display = document.getElementById('display');

// Function that displays the value of numbers on the calculator display.
function appendToDisplay(input) {
  display.value += input;
}

// Function for empty value when display is cleared on calculator.
function clearDisplay() {
  display.value = '';
}

// Function that calculates the value.
function calculate() {
  display.value = eval(display.value);
}
