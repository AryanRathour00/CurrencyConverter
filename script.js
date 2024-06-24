const convertButton = document.getElementById("convert-btn");
const inputOne = document.getElementById("currencyinput1");
const inputTwo = document.getElementById("currencyinput2");
const swapButton = document.getElementById("swap-btn");
const selectCurrencyOne = document.getElementById("selectCurrency1");
const selectCurrencyTwo = document.getElementById("selectCurrency2");

window.onload = function(){
  selectCurrency();
}

selectCurrencyOne.addEventListener("change", convertButtonHTML);
selectCurrencyTwo.addEventListener("change", convertButtonHTML);
swapButton.addEventListener('click',swapOptions);

// function for creating a select option for currencies 
function selectCurrency() {
  let url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_p5ShIP4QNBmwDRlssYKTEX2QuwssAAxxJthCmKwe`;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = function () {
    let currency = JSON.parse(this.responseText);
    let selecthtml = "";
    let selectValue = 0;
    for (let element in currency["data"]) {
      //  console.log(currency["data"][element])
      let currencyName = currency["data"][element];

      selecthtml += `<option value='${currencyName["code"]}'>${currencyName["code"]}</option>`;
    }
    selectCurrencyOne.innerHTML = selecthtml;
    selectCurrencyTwo.innerHTML = selecthtml;
    convertButtonHTML();
  };
  xhr.send();
}

// function for convert button text to show selected currencies
function convertButtonHTML() {
  let selectOne = selectCurrencyOne.value;
  let selectTwo = selectCurrencyTwo.value;
  convertButton.innerHTML = `Convert ${selectOne} to ${selectTwo}`;
}
// convertButtonHTML();

// function for swap button 
function swapOptions(){
   let aTemp = selectCurrencyOne.value;
   let bTemp = selectCurrencyTwo.value;
   let temp ; 
   if(convertButton.innerHTML === `Convert ${aTemp} to ${bTemp}`){
    convertButton.innerHTML = `Convert ${bTemp} to ${aTemp}`
   }
   selectCurrencyOne.value = bTemp;
   selectCurrencyTwo.value = aTemp;
}