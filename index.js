// I wanted to avoid using JS but there is no way to "uncheck" a radio button with CSS alone :(
// uncheck radio buttons
document.querySelectorAll('input[type="radio"]').forEach((radio) => {
  radio.addEventListener("click", (e) => {
    e.preventDefault();
    // setting a timeout enables this hack to work
    setTimeout(() => (radio.checked = !radio.checked), 0);
  });
});
