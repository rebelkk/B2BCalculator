var pitElement = document.querySelector('#pit');
var vatElement = document.querySelector("#vat");
var zusElement = document.querySelector("#zus");
var zdrowotneElement = document.querySelector("#zdrowotne");
var nettoElement = document.querySelector("#netto");

var calculateButton = document.querySelector("#calculate-btn");
var profitElement = document.querySelector("#profit");


var error = document.querySelector("#info");

//value in nettoEElement should be bigger then 0



//calculate value in the table

calculateButton.addEventListener("click", function () {
    var nettoValue = nettoElement.value;

    if (nettoElement < 0) {
        error.classList.remove("hidden");
    }
    else {
    
    var incomeValue = 0.19;
    var zusValue = 843.45;
    var zdrowotneValue = 319.94;
    var goodtax = 0.23;
    var zdrowotneDoOdjęciaValue = (Math.round(zdrowotneValue * 7.75 / 9 * 100)) / 100;
    var pitValue = (Math.round((nettoValue * incomeValue) - zdrowotneDoOdjęciaValue)).toFixed(2);
    var vatValue = (Math.round(nettoValue * goodtax)).toFixed(2);
    var profitValue = (nettoValue - (pitValue + zusValue + zdrowotneValue)).toFixed(2);

    pitElement.innerText = pitValue + " zł";
    vatElement.innerText = vatValue + " zł";
    zusElement.innerText = zusValue + " zł";
    zdrowotneElement.innerText = zdrowotneValue + " zł";
    profitElement.innerText = profitValue + " zł";
}
});




