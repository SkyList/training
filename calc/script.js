
function addInDisplay(value) {
  const display = document.getElementById('display')
  display.value = display.value + value
}

function showResult() {
  const display = document.getElementById('display')
  if (display.value)
    display.value = eval(display.value)
}

function clearDisplay() {
  const display = document.getElementById('display')
  display.value = ''
}

function backspace() {
  const display = document.getElementById('display')
  display.value = display.value.substring(0, display.value.length - 1)
}
