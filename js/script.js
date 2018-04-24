var pitElement = document.querySelector('#pit');
var vatElement = document.querySelector("#vat");
var zusElement = document.querySelector("#zus");
var zdrowotneElement = document.querySelector("#zdrowotne");
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
        var incomeValue = 0.19;
        var zusValue = 843.45;
        var zdrowotneValue = 319.94;
        var goodtax = 0.23;
        var zdrowotneDoOdjęciaValue = (Math.round(zdrowotneValue * 7.75 / 9 * 100)) / 100;
        var taxbase = Math.round(nettoValue - zusValue);
        var vatValue = Math.round(nettoValue * goodtax);
        var pitValue = Math.round((taxbase * incomeValue) - zdrowotneDoOdjęciaValue);

        if (pitValue < 0) {
            pitValue = 0;
        }

        var profitValue = (nettoValue - (pitValue + zusValue + zdrowotneValue));

        if (profitValue < 0) {
            profitValue = 0;
        }

        pitElement.innerText = pitValue.toFixed(2) + " zł";
        vatElement.innerText = vatValue.toFixed(2) + " zł";
        zusElement.innerText = zusValue + " zł";
        zdrowotneElement.innerText = zdrowotneValue + " zł";
        profitElement.innerText = profitValue.toFixed(2) + " zł";

        errorElement.classList.add("hidden");
    }
});







