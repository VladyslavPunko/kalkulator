const result = document.getElementById("result");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let operator = "";
let previousInput = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (!isNaN(value) || value === ".") {
      // Обробка цифр та крапки
      currentInput += value;
      result.textContent = currentInput;
    } else if (value === "C") {
      // Очистка
      currentInput = "";
      previousInput = "";
      operator = "";
      result.textContent = "0";
    } else if (value === "=") {
      // Обчислення
      if (currentInput && operator && previousInput) {
        try {
          currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
          result.textContent = currentInput;
          previousInput = "";
          operator = "";
        } catch {
          result.textContent = "Error";
        }
      }
    } else if (value === "+/-") {
      // Зміна знаку
      currentInput = currentInput ? -parseFloat(currentInput) : 0;
      result.textContent = currentInput;
    } else if (value === "%") {
      // Відсоток
      currentInput = currentInput ? parseFloat(currentInput) / 100 : 0;
      result.textContent = currentInput;
    } else {
      // Оператори (+, -, ×, ÷)
      if (value === "×") operator = "*";
      else if (value === "÷") operator = "/";
      else operator = value;

      previousInput = currentInput;
      currentInput = "";
    }
  });
});
