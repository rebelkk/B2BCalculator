var incomeTaxElement = document.querySelector('#incomeTax');
var vatTaxElement = document.querySelector("#vatTax");
var socialInsuraneElement = document.querySelector("#socialInsurane");
var healthInsuranceElement = document.querySelector("#healthInsurance");
var nettoElement = document.querySelector("#netto");
var profitElement = document.querySelector("#profit");
var errorElement = document.querySelector("#warning");
var calculateButton = document.querySelector("#calculate-btn");

var incomeTaxRate = 0.19;
var socialInsuraneValue = 843.45;
var healthInsuranceValue = 319.94;
var vatTaxRate = 0.23;

//calculate value in the table

function displayValueWithCurrency(valueToDisplay) {
    return valueToDisplay.toFixed(2) + " zł";
}

function roundDecimalPlaces(value, decimalPlaces) {
    var multiplier =  Math.pow(10, decimalPlaces);
    return Math.round(value * multiplier)/ multiplier;
}


calculateButton.addEventListener("click", function () {
    var nettoValue = nettoElement.value;

    if (nettoValue <= 0) {
        errorElement.classList.remove("hidden");
        return;
    }
    else {
        errorElement.classList.add("hidden")
    }

    var partofHealthInsuranceValue = roundDecimalPlaces((healthInsuranceValue * 7.75 / 9),2);
    var taxBase = Math.round(nettoValue - socialInsuraneValue);
    var vatTaxValue = Math.round(nettoValue * vatTaxRate);
    var incomeTaxValue = Math.round((taxBase * incomeTaxRate) - partofHealthInsuranceValue);

    if (incomeTaxValue < 0) {
        incomeTaxValue = 0;
    }

    var profitValue = (nettoValue - (incomeTaxValue + socialInsuraneValue + healthInsuranceValue));

    if (profitValue < 0) {
        profitValue = 0;
    }

    incomeTaxElement.innerText = displayValueWithCurrency(incomeTaxValue);
    vatTaxElement.innerText = displayValueWithCurrency(vatTaxValue);
    socialInsuraneElement.innerText = displayValueWithCurrency(socialInsuraneValue);
    healthInsuranceElement.innerText = displayValueWithCurrency(healthInsuranceValue);
    profitElement.innerText = displayValueWithCurrency(profitValue);
});