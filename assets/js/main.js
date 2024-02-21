
//Stabiliamo i input per richiedere i dati al utente
//Generiamo i dati tramite il pulsante 



document.getElementById("genera").addEventListener("click", function () {

    userName = document.getElementById("inputName").value;
    kilometers = document.getElementById("inputKm").value;
    age = document.getElementById("inputAge").value;
Offerta = document.getElementById("offerta").value
    // Aggiorniamo il contenuto del div "carriage" con il nuovo numero random
    const randomNum = Math.floor(Math.random() * 9) + 1;

    // numero della carrozza
    document.getElementById("carriage").textContent = randomNum;

    // numero del codice CP
    let cp = Math.floor((Math.random() * 99999) + 1);
    document.getElementById('code_cp').innerHTML = cp;
    //il nome del passagero 

    document.getElementById('passaggero').innerHTML = userName;
    console.log(userName);


    //offerta
    document.getElementById("offerta").innerHTML = Offerta



    //Stabiliamo il prezzo del biglietto e i valori dello sconto
    const priceKm = 0.21;
    const discountChild = 0.2;
    const discountSenior = 0.4;

 

    //Eseguiamo delle operazioni math con delle condizioni:
    //Usare il document.writeIn per stampare il prezzo 
    //Il prezzo sarà generato tramite questa condizione
    if (age <= 18) {
        let price_passenger = (kilometers * priceKm);
        let price_total = price_passenger - (price_passenger * discountChild);

        console.log(price_total);

        function genera() {
            document.getElementById("carriage").textContent = randomNum;
            console.log(randomNum);
        }
        final_price.innerHTML = price_total + '€';


    }

    else if (age >= 65) {
        let price_passenger = (kilometers * priceKm);
        let price_total = price_passenger - (price_passenger * discountSenior)
        console.log(price_total);
        function genera() {
            document.getElementById("carriage").textContent = randomNum;

        }
        final_price.innerHTML = price_total + '€';

    }

    else {
        let price_total = (kilometers * priceKm);
        console.log(price_total);
        function genera() {
            document.getElementById("carriage").textContent = randomNum;
            console.log(randomNum);
        }
        final_price.innerHTML = price_total + '€';

    }

})



document.getElementById("refreshPage").addEventListener("click", function () {
    location.reload();
    //console.log('user aggiorna la pagina');
});




