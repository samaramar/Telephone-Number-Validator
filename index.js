const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

//regex para validar número dos EUA
const usPhoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-])?\d{3}([\s-])?\d{4}$/;


checkBtn.addEventListener("click", function(){
  const inputValue = userInput.value.trim();


//se estiver vazio
if(inputValue === "") {
  alert("please provide a phone number");
  return;
}

//testar com regex
if(usPhoneRegex.test(inputValue)){
     resultsDiv.textContent = `Valid US number: ${inputValue}`;
}else{
     resultsDiv.textContent = `Invalid US number: ${inputValue}`;

}
});

//botão para limpar resultados
clearBtn.addEventListener("click",function (){
  resultsDiv.textContent = "";
});

