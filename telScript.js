const txtInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const output = document.getElementById("results-div")
const clear = () => {
  txtInput.value="";
  output.textContent="";
}
clearBtn.addEventListener("click",clear);
const symbolRegex = /[()\-.\s]/g;
const regex = /^\d{10}$/;
const oneRegex = /^1\d{10}$/;
const result = () => {
   if(txtInput.value===""){
     alert("Please provide a phone number");
   }
    const cleanedNumber = txtInput.value.replace(symbolRegex, "");
  
    if (regex.test(cleanedNumber) || oneRegex.test(cleanedNumber)) {
      output.textContent = `Valid US number: ${txtInput.value}`;
    } else {
      output.textContent = `Invalid US number: ${txtInput.value}`;
    }
  }
checkBtn.addEventListener("click", result);