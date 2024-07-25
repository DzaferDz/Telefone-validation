const output = document.getElementById("results-div");

const clear = () => {
  txtInput.value = "";
  output.textContent = "";
}

clearBtn.addEventListener("click", clear);

const strictRegex = /^1?[-.\s]?(\([2-9]\d{2}\)|[2-9]\d{2})[-.\s]?\d{3}[-.\s]?\d{4}$/;

const result = () => {
  const userInput = txtInput.value;
  const cleanedNumber = userInput.trim().replace(/[^\d]/g, ''); 

  if (userInput === "") {
    alert("Please provide a phone number");
    return;
  }


  if (strictRegex.test(userInput)) {
    output.textContent = `Valid US number: ${userInput}`;
  } else {
    output.textContent = `Invalid US number: ${userInput}`;
  }
}

checkBtn.addEventListener("click", result);