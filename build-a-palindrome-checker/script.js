document.addEventListener("DOMContentLoaded", function () {
  const checkBtn = document.getElementById("check-btn");
  const textInput = document.getElementById("text-input");
  const result = document.getElementById("result");

  checkBtn.addEventListener("click", function () {
    const inputValue = textInput.value;

    if (!inputValue.trim()) {
      alert("Please input a value.");
      return;
    }

    const cleaned = inputValue.toLowerCase().replace(/[^a-z0-9]/gi, '');
    const reversed = cleaned.split('').reverse().join('');

    const message = cleaned === reversed
      ? `${inputValue} is a palindrome.`
      : `${inputValue} is not a palindrome.`;

    result.textContent = message;
  });
});
