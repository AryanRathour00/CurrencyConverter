const convertButton = document.getElementById("convert-btn");
const inputOne = document.getElementById("currencyinput1");
const inputTwo = document.getElementById("currencyinput2");
const swapButton = document.getElementById("swap-btn");
const selectCurrencyOne = document.getElementById("selectCurrency1");
const selectCurrencyTwo = document.getElementById("selectCurrency2");

// window.onload = function(){
//   selectCurrency();
// }

function selectCurrency() {
  let url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_p5ShIP4QNBmwDRlssYKTEX2QuwssAAxxJthCmKwe`;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = function () {
    let currency = JSON.parse(this.responseText);
    let selecthtml = "";
    let selectValue = 0
    for (let element in currency["data"]) {
      //  console.log(currency["data"][element])
       let currencyName = currency["data"][element];
       
       selecthtml += `<option value='${selectValue + 1}'>${currencyName["code"]}</option>`
    }
    selectCurrencyOne.innerHTML = selecthtml;
    selectCurrencyTwo.innerHTML = selecthtml;
  };
  xhr.send();
};


