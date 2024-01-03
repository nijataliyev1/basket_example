const container = document.querySelector(".container");
const basket = JSON.parse(localStorage.getItem("basket"));


basket.forEach(pruduct => {
    let pruductDiv = document.createElement("div");
    let pruductNameP = document.createElement("p");
    let pruductPriceP = document.createElement("p");

    

    pruductNameP.innerText = pruduct.name;
    pruductPriceP.innerText = pruduct.price;


    pruductDiv.appendChild(pruductNameP)
    pruductDiv.appendChild(pruductPriceP)
    container.appendChild(pruductDiv)
})