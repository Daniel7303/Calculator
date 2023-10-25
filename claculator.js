const evalEl = document.querySelector('#evalEl')


evalEl.addEventListener('click', function() {
    display.value = eval(display.value)
})