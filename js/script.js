var pitElement = document.querySelector('#pit');
var vatElement = document.querySelector("#vat");
var zusElement = document.querySelector("#zus");
var zdrowotneElement = document.querySelector("#zdrowotne");
var nettoElement = document.querySelector("#netto");
var calculateButton = document.querySelector("#calculate-btn");
var profitElement = document.querySelector("#profit");

//calculate value in the table

calculateButton.addEventListener("click", function () {
    var nettoValue = nettoElement.value;
    var incomeValue = 0.19;
    var zusValue = 843.45;
    var zdrowotneValue = 319.94;
    var goodtax = 0.23;
    var zdrowotneDoOdjęciaValue = (Math.round(zdrowotneValue * 7.75 / 9 * 100)) / 100;
    var pitValue = Math.round((nettoValue * incomeValue) - zdrowotneDoOdjęciaValue);
    var vatValue = nettoValue * goodtax;
    var profitValue = (nettoValue - (pitValue + zusValue + zdrowotneValue));

    pitElement.innerText = pitValue;
    vatElement.innerText = vatValue;
    zusElement.innerText = zusValue;
    zdrowotneElement.innerText = zdrowotneValue;
    profitElement.innerText = profitValue;

});




