let fromCurrency = document.getElementById("from-currency");
let toCurrency = document.getElementById("to-currency");
let fromAmount = document.getElementById("from-amount");
let toAmount = document.getElementById("to-amount");
let rateInfo = document.getElementById("rate-info");
let buttonStylingEl = document.getElementById('buttonStyling');



function convertCurrency() {
    let base = fromCurrency.value;
    let target = toCurrency.value;
    let amount = parseFloat(fromAmount.value);
    fetch("https://api.exchangerate-api.com/v4/latest/" + base)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let rate = data.rates[target];
            toAmount.value = amount * rate; // No toFixed
            let currencyAmount = toAmount.value
            rateInfo.textContent = amount + " " + base + " = " + currencyAmount + " " + target;
            console.log(data)
        })
        .catch(function(error) {
            rateInfo.textContent = "Error fetching data.";
            console.error("Fetch error:", error);

        });
}
buttonStylingEl.addEventListener("click", convertCurrency)
// fromCurrency.addEventListener("change", convertCurrency);
// toCurrency.addEventListener("change", convertCurrency);
// fromAmount.addEventListener("input", convertCurrency);

// // Initial conversion
// convertCurrency();