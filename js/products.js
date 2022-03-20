"use strict";

// URL:er till API:er
const companyurl = "https://dt191g-projekt.azurewebsites.net/api/APICompany";
const producturl = "https://dt191g-projekt.azurewebsites.net/api/APIProducts";
const productcategoryurl = "https://dt191g-projekt.azurewebsites.net/api/APIProductCategories";

// HTML-ELEMENT
// Startsidan
const sitetitleEl = document.getElementById("sitetitle");           // Sidtitel
const logoEl = document.getElementById("logo");                     // Logotyp

// Produktsidan
const categoriesulEl = document.getElementById("categoriesul");     // Ul-lista med kategorier
const categoryh2El = document.getElementById("categoryh2");         // H2 över produktlistan
const productstableEl = document.getElementById("productstable");   // Produkttabellen

// Gör fetch-anrop vid inläsning av sidan
window.onload = function () {
    // Hämta företagsdata
    fetch(companyurl)
        .then(response => response.json())
        .then(companydata => printCompany(companydata));

    // Hämta produktkategoridata
    fetch(productcategoryurl)
        .then(response => response.json())
        .then(productcategoriesdata => printProductCategories(productcategoriesdata));

    // Hämta produkter
    fetch(producturl)
        .then(response => response.json())
        .then(productsdata => printProducts(productsdata));
}

// Skriv ut hämtad företagsdata
function printCompany(companydata) {
    // Lagra medskickad data
    let items = companydata[0];

    // Skriv ut till HTML-element
    logoEl.innerHTML += items.companyName;                          // Logotyp
    sitetitleEl.innerHTML = items.companyName;                      // Sidtitel
}

// Skriv ut produktkategorier
function printProductCategories(productcategoriesdata) {
    // Lagra medskickad data
    let items = productcategoriesdata;

    // Skriv ut kategorier till listan
    for (let i = 0; i < items.length; i++) {
        categoriesulEl.innerHTML += `<li> <button onclick="printProductsByCategory(${items[i].productCategoryId}, '${items[i].productCategoryName}')"> ${items[i].productCategoryName} </button></li> `;
    }
}

// Skriv ut produkter
function printProducts(productsdata) {
    // Lagra medskickad data
    let items = productsdata;

    // Ange underrubrik
    categoryh2El.innerHTML = "Alla kategorier";

    // Skriv ut produkter till tabellen
    for (let i = 0; i < items.length; i++) {
        productstableEl.innerHTML +=
            `
        <tr>
        <td class="producttd1">
            <img src="${producturl}/${items[i].productImageName}" alt="" width="100">
        </td>
        <td class="producttd2">
            <h3>${items[i].productName}</h3>
            <p>${items[i].productDescription}</p>
        </td>
        <td class="producttd3">
            <p>${items[i].productPrice} kr</p>
        </td>
        <td class="producttd4">
            <a href="${producturl}/${items[i].productImageName}" target="_blank">Se bild</a>
        </td>
        `
    }
}

// Funktion för att skriva ut vald kategori
function printProductsByCategory(category, categoryName) {
    console.log("Medskickad kategori: " + category);
    fetch(producturl)
    .then(response => response.json())
    .then(productsdata => printProductsCategory(productsdata, category, categoryName));
}

// Skriv ut produkter efter kategori
function printProductsCategory(productsdata, category, categoryName) {
    // Ändra underrubrik
    categoryh2El.innerHTML = categoryName;

    // Rensa tabellen
    productstableEl.innerHTML = "";

    // Lagra medskickad data
    let items = productsdata;

    // Lagra medskickad kategory
    let askedCategory = category;

    // Filtrera arrayen och skapa ny för medskickad kategori
    items = items.filter(item => item.productCategoryId == askedCategory);

    // Skriv ut produkter i kategorin till tabellen
    for (let i = 0; i < items.length; i++) {
        productstableEl.innerHTML +=
            `
        <tr>
        <td class="producttd1">
            <img src="${producturl}/${items[i].productImageName}" alt="" width="100">
        </td>
        <td class="producttd2">
            <h3>${items[i].productName}</h3>
            <p>${items[i].productDescription}</p>
        </td>
        <td class="producttd3">
            <p>${items[i].productPrice} kr</p>
        </td>
        <td class="producttd4">
            <a href="${producturl}/${items[i].productImageName}" target="_blank">Se bild</a>
        </td>
        `
    }
}