// 1. chiedi all’utente il cognome
var surname = prompt("Insert your surname");
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
var surnameArray = ["Bianchi", "Neri", "Rossi", "Gialli", "Verdi"]
surnameArray.push(surname)
// 3. stampa la lista ordinata alfabeticamente
var ordered = surnameArray.sort()
var content = document.getElementById("list").innerHTML

for (var i=0; i<ordered.length; i++){
    content += "<li>" + ordered[i] + "</li>" + "<br>";
    document.getElementById("list").innerHTML = content
}
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
var userPosition = ordered.indexOf(surname)
document.getElementById("surname_position").innerHTML = "Il tuo cognome è il numero " + (userPosition +1)