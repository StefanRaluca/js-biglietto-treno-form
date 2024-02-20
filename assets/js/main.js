
//Stabiliamo i input per richiedere i dati al utente
//Generiamo i dati tramite il pulsante 

document.getElementById("genera").addEventListener("click", function () {

    userName = document.getElementById("inputName").value;
    kilometers = document.getElementById("inputKm").value;
    age = document.getElementById("inputAge").value;
    
    //Stabiliamo il prezzo del biglietto e i valori dello sconto
    let price_km = 0.21;
    const discount_child = 0.2;
    const discount_senior = 0.4;

    //Eseguiamo delle operazioni math con delle condizioni:
    //Usare il document.writeIn per stampare il prezzo 
    //Il prezzo sarà generato tramite questa condizione
    if (age <= 18) {
        let price_passenger = (kilometers * price_km);
        let price_total = price_passenger - (price_passenger * discount_child);
        console.log(price_total);
        document.writeln(`Total Price: ${price_total.toFixed(2)} €`);
    }

    else if (age >= 65) {
        let price_passenger = (kilometers * price_km);
        let price_total = price_passenger - (price_passenger * discount_senior)
        console.log(price_total);
        document.writeln(`Total Price: ${price_total.toFixed(2)} €`);
    }

    else {
        let price_total = (kilometers * price_km);
        console.log(price_total);
        document.writeln(`Total Price: ${price_total.toFixed(2)} €`);
    }
})