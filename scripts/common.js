//function to get input

function getInputValueById(inputField){
    inputField = document.getElementById(inputField);
   const inputValueText = inputField.value;
   const inputValue = parseFloat(inputValueText);
   return inputValue;
}

// function to set the inner text of area

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}