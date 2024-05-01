const display = document.getElementById("display");
const numericbButtons = document.querySelector(".numeric-buttons");
const operatorButtons = document.querySelector(".operator-buttons");
const funcButtons = document.querySelector(".func-buttons");

[...numericbButtons.children].forEach((btn) => {
  if (btn.classList.contains("dot")) {
    btn.addEventListener("click", () => {
      if (display.innerHTML === "") {
        display.innerHTML = "0.";
      } else {
        display.innerHTML += ".";
      }
    });
  } else
    btn.addEventListener("click", (event) => {
      if (display.innerHTML.length > 16 - 1) return;
      if (
        ["Error", "Infinity", "NaN"].includes(display.innerHTML) ||
        display.innerHTML === "0"
      ) {
        display.innerHTML = event.target.innerHTML;
      } else display.innerHTML += event.target.innerHTML;
    });
});

[...operatorButtons.children].forEach((btn) => {
  if (btn.classList.contains("inverse")) {
    btn.addEventListener("click", () => {
      display.innerHTML = `1/${display.innerHTML}`;
    });
  } else
    btn.addEventListener("click", (event) => {
      if (
        ["Error", "Infinity", "NaN"].includes(display.innerHTML) ||
        display.innerHTML.length > 16 - 1
      )
        return;
      const latestIsNumber = !isNaN(
        Number(display.innerHTML[display.innerHTML.length - 1])
      );
      if (latestIsNumber) display.innerHTML += event.target.innerHTML;
    });
});

[...funcButtons.children].forEach((btn) => {
  // Equal button
  if (btn.classList.contains("equal")) {
    btn.addEventListener("click", () => {
      if (
        ["Error", "Infinity", "NaN"].includes(display.innerHTML) ||
        isNaN(Number(display.innerHTML[display.innerHTML.length - 1]))
      )
        return;
      const rawResult = eval(display.innerHTML);
      let result = rawResult;
      if (result.toString().includes(".")) {
        result = Number(result.toFixed(5));
      }
      if (result.toString().length > 16) {
        display.innerHTML = "Error";
        return;
      }
      display.innerHTML = result.toString();
    });
  }
  // Clear button
  else if (btn.classList.contains("clear")) {
    btn.addEventListener("click", () => {
      display.innerHTML = "0";
    });
  }
  // Delete button
  else if (btn.classList.contains("delete")) {
    btn.addEventListener("click", () => {
      if (
        ["Error", "Infinity", "NaN"].includes(display.innerHTML) ||
        display.innerHTML === "0"
      )
        return;
      display.innerHTML = display.innerHTML.slice(0, -1);
    });
  }
});
