var incomeElement = document.querySelector('#pit');
var goodstaxElement = document.querySelector("#vat");
var socialInsuraneElement = document.querySelector("#zus");
var healthInsuranceElement = document.querySelector("#zdrowotne");
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
        var incomeRate = 0.19;
        var socialInsuraneValue = 843.45;
        var healthInsuranceValue = 319.94;
        var goodTaxRate = 0.23;
        var partofHealthInsuranceValue = (Math.round(healthInsuranceValue * 7.75 / 9 * 100)) / 100;
        var taxbase = Math.round(nettoValue - socialInsuraneValue);
        var goodstaxValue = Math.round(nettoValue * goodTaxRate);
        var incomeValue = Math.round((taxbase * incomeRate) - partofHealthInsuranceValue);

        if (incomeValue < 0) {
            incomeValue = 0;
        }

        var profitValue = (nettoValue - (incomeValue + socialInsuraneValue + healthInsuranceValue));

        if (profitValue < 0) {
            profitValue = 0;
        }

        incomeElement.innerText = incomeValue.toFixed(2) + " zł";
        goodstaxElement.innerText = goodstaxValue.toFixed(2) + " zł";
        socialInsuraneElement.innerText = socialInsuraneValue + " zł";
        healthInsuranceElement.innerText = healthInsuranceValue + " zł";
        profitElement.innerText = profitValue.toFixed(2) + " zł";

        errorElement.classList.add("hidden");
    }
});