"use strict";

// URL:er till API:er
const companyurl = "https://dt191g-projekt.azurewebsites.net/api/APICompany";

// HTML-ELEMENT
// Startsidan
const sitetitleEl = document.getElementById("sitetitle");           // Sidtitel
const heroh1El = document.getElementById("heroh1");                 // H1 på startsidan
const logoEl = document.getElementById("logo");                     // Logotyp

// Gör fetch-anrop vid inläsning av sidan
window.onload = function() {
    // Gör fetch-anrop mot API
    fetch(companyurl)
        .then(response => response.json())
        .then(data => print(data));
}

// Funktion för att skriva ut hämtad data
function print(data) {
    // Lagra medskickad data
    let items = data[0];

    // Skriv ut till HTML-element
    logoEl.innerHTML += items.companyName;                          // Logotyp
    sitetitleEl.innerHTML = items.companyName;                      // Sidtitel
    heroh1El.innerHTML += items.companyName += "!";                 // H1 på startsidan
}