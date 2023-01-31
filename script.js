function start() {
  const input = document.getElementById("operation");
  input.value = "";

  const btns = document.querySelectorAll("button[id^=btn]");
  console.log(btns);

  btns.forEach((btn) => {
    if (btn.innerText === "=") {
      btn.addEventListener("click", () => {
        input.value = input.value + "=" + eval(input.value);
      });
    } else if (btn.innerText === "C") {
      btn.addEventListener("click", () => {
        input.value = "";
      });
    } else if (btn.innerText === "x") {
      btn.addEventListener("click", () => (input.value = input.value + "*"));
    } else {
      btn.addEventListener("click", () => {
        if (input.value.indexOf("=") > 1) {
          input.value = "";
        }
        input.value = input.value + btn.innerHTML;
      });
    }
  });
}

document.addEventListener("DOMContentLoaded", start);
