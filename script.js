const convertButton = document.getElementById("convert-btn");
const inputOne = document.getElementById("currencyinput1");
const inputTwo = document.getElementById("currencyinput2");
const swapButton = document.getElementById("swap-btn");
const selectCurrencyOne = document.getElementById("selectCurrency1");
const selectCurrencyTwo = document.getElementById("selectCurrency2");
const loading = document.getElementById("spinner")

// calling all the functions 
window.onload = function(){
  selectCurrency(); // selectcurrency function
}
selectCurrencyOne.addEventListener("change", convertButtonHTML); // convert button appeared value function
selectCurrencyTwo.addEventListener("change", convertButtonHTML); // convert button appeared value function
swapButton.addEventListener("click", swapOptions); // swap button function
convertButton.addEventListener("click", () => {
  currencyConverter(selectCurrencyOne.value);// convert currency function
});

// function for creating a select option for currencies
function selectCurrency() {
  let url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_p5ShIP4QNBmwDRlssYKTEX2QuwssAAxxJthCmKwe`;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);

  xhr.onprogress = function(){
     loading.classList.remove('d-none');
  }

  xhr.onload = function () {

    let currency = JSON.parse(this.responseText);
    let selecthtml = "";
    let selectValue = 0;
    for (let element in currency["data"]) {
      let currencyName = currency["data"][element];
      selecthtml += `<option value='${currencyName["code"]}'>${currencyName["code"]}</option>`;
    }
    selectCurrencyOne.innerHTML = selecthtml;
    selectCurrencyTwo.innerHTML = selecthtml;
    convertButtonHTML();
    loading.classList.add('d-none');
  };
  xhr.send();
}

// function for convert button text to show selected currencies
function convertButtonHTML() {
  let selectOne = selectCurrencyOne.value;
  let selectTwo = selectCurrencyTwo.value;
  convertButton.innerHTML = `Convert ${selectOne} to ${selectTwo}`;
}
convertButtonHTML();

// function for swap button
function swapOptions() {
  let aTemp = selectCurrencyOne.value;
  let bTemp = selectCurrencyTwo.value;
  let temp;
  if (convertButton.innerHTML === `Convert ${aTemp} to ${bTemp}`) {
    convertButton.innerHTML = `Convert ${bTemp} to ${aTemp}`;
  }
  selectCurrencyOne.value = bTemp;
  selectCurrencyTwo.value = aTemp;
}

//function for currency converter
function currencyConverter(currency) {
  let url = `https://v6.exchangerate-api.com/v6/4434297f60f4c9fb95561a61/latest/${currency}`;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);

  xhr.onprogress = function(){
    loading.classList.remove('d-none');
 }

  xhr.onload = function () {
    let currencySelected = JSON.parse(this.responseText);
    let toCurrency = selectCurrencyTwo.value;
    let fromValue = Number.parseInt(inputOne.value);
    let currencyValue ; 
    // console.log(typeof currencySelected['conversion_rates']);
    for(let element in currencySelected['conversion_rates']){
        if(element === toCurrency){
           currencyValue = currencySelected['conversion_rates'][element]
          }
    }
   let convertedValue = fromValue * currencyValue;
   inputTwo.value = convertedValue;
   loading.classList.add('d-none')
  };
  xhr.send();
}
