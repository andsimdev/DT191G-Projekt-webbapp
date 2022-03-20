"use strict";

// URL:er till API:er
const companyurl = "https://dt191g-projekt.azurewebsites.net/api/APICompany";
const staffurl = "https://dt191g-projekt.azurewebsites.net/api/APIStaffs";

// HTML-ELEMENT
// Startsidan
const logoEl = document.getElementById("logo");                     // Logotyp
const sitetitleEl = document.getElementById("sitetitle");           // Sidtitel

// Om oss-sidan
const aboutpEl = document.getElementById("aboutp");                 // Företagsbeskrivning
const stafftableEl = document.getElementById("stafftable");         // Personaltabell

// Gör fetch-anrop vid inläsning av sidan
window.onload = function() {
    // Hämta företagsdata
    fetch(companyurl)
        .then(response => response.json())
        .then(data => print(data));

    // Hämta personaldata
    fetch(staffurl)
        .then(response => response.json())
        .then(staffdata => printStaff(staffdata));
}

// Funktion för att skriva ut hämtad data
function print(data) {
    // Lagra medskickad data
    let items = data[0];

    // Skriv ut till HTML-element
    logoEl.innerHTML += items.companyName;                          // Logotyp
    sitetitleEl.innerHTML = items.companyName;                      // Sidtitel
    aboutpEl.innerHTML = items.companyDescription;                  // Företagsbeskrivning
}

// Skriv ut personaldata
function printStaff(staffdata) {
    // Lagra medskickad data
    let items = staffdata;

    // Skriv ut till HTML-element
    for (let i = 0; i < items.length; i++) {
        stafftableEl.innerHTML +=
        `
        <tr>
        <td class="td1">
            <img src="${staffurl}/${items[i].staffImageName}" alt="" width="100">
        </td>
        <td>
            <h3>${items[i].staffName}</h3>
        </td>
        <td>
            <p>${items[i].staffRole}</p>
        </td>
        <td class="td4">
            <a href="mailto:${items[i].staffMail}">Mejla mig</a>
        </td>
        </tr>
        `
    }
}