"use strict";

// URL:er till API:er
const companyurl = "https://dt191g-projekt.azurewebsites.net/api/APICompany";

// HTML-ELEMENT
// Startsidan
const logoEl = document.getElementById("logo");                     // Logotyp
const sitetitleEl = document.getElementById("sitetitle");           // Sidtitel

// Öppet och kontakt-sidan
const openmondayEl = document.getElementById("openmonday");         // Öppet mån
const opentuesdayEl = document.getElementById("opentuesday");       // Öppet tis
const openwednesdayEl = document.getElementById("openwednesday");   // Öppet ons
const openthursdayEl = document.getElementById("openthursday");     // Öppet tors
const openfridayEl = document.getElementById("openfriday");         // Öppet fre
const opensaturdayEl = document.getElementById("opensaturday");     // Öppet lör
const opensundayEl = document.getElementById("opensunday");         // Öppet sön
const phonepEl = document.getElementById("phonep");                 // Telefon
const emailEl = document.getElementById("email");                   // E-post
const addressEl = document.getElementById("address");               // Adress

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
    openmondayEl.innerHTML = items.openMonday;                      // Öppet mån
    opentuesdayEl.innerHTML = items.openTuesday;                    // Öppet tis
    openwednesdayEl.innerHTML = items.openWednedsay;                // Öppet ons
    openthursdayEl.innerHTML = items.openThursday;                  // Öppet tors
    openfridayEl.innerHTML = items.openFriday;                      // Öppet fre
    opensaturdayEl.innerHTML = items.openSaturday;                  // Öppet lör
    opensundayEl.innerHTML = items.openSunday;                      // Öppet sön
    phonepEl.innerHTML = items.companyPhone;                        // Telefon
    emailEl.innerHTML = items.companyMail;                          // E-post
    addressEl.innerHTML = items.companyName +
    "<br>" + items.companyAddress;                                  // Adress

}