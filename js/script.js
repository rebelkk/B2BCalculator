var incomeTaxElement = document.querySelector('#incomeTax');
var vatTaxElement = document.querySelector("#vatTax");
var socialInsuraneElement = document.querySelector("#socialInsurane");
var healthInsuranceElement = document.querySelector("#healthInsurance");
var nettoElement = document.querySelector("#netto");
var profitElement = document.querySelector("#profit");
var errorElement = document.querySelector("#warning");
var calculateButton = document.querySelector("#calculate-btn");

//calculate value in the table

calculateButton.addEventListener("click", function () {
    var nettoValue = nettoElement.value;

    if (nettoValue <= 0) {
        errorElement.classList.remove("hidden");
    }

    else {
        var incomeTaxRate = 0.19;
        var socialInsuraneValue = 843.45;
        var healthInsuranceValue = 319.94;
        var vatTaxRate = 0.23;
        var partofHealthInsuranceValue = (Math.round(healthInsuranceValue * 7.75 / 9 * 100)) / 100;
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

        incomeTaxElement.innerText = incomeTaxValue.toFixed(2) + " zł";
        vatTaxElement.innerText = vatTaxValue.toFixed(2) + " zł";
        socialInsuraneElement.innerText = socialInsuraneValue + " zł";
        healthInsuranceElement.innerText = healthInsuranceValue + " zł";
        profitElement.innerText = profitValue.toFixed(2) + " zł";

        errorElement.classList.add("hidden");
    }
});