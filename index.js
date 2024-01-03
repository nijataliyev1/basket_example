if (!localStorage.getItem("basket")) {
    localStorage.setItem("basket",JSON.stringify([]))
}

let pruducts = [{
    id: 1,
    name: "car",
    price: 10
},
{
    id: 2,
    name: "phone",
    price: 30
},
{
    id: 3,
    name: "book",
    price: 15
}]      

const container = document.querySelector(".container");


pruducts.forEach(pruduct => {
    let pruductDiv = document.createElement("div");
    let pruductNameP = document.createElement("p");
    let pruductPriceP = document.createElement("p");
    let addToBasket = document.createElement("button");

    addToBasket.addEventListener("click", (e) => {
        let basket = JSON.parse(localStorage.getItem("basket"))
        if (!basket.find(b => b.id == pruduct.id)) {
            basket.push(pruduct)
        }
        localStorage.setItem("basket",JSON.stringify(basket))
        console.log(localStorage);
    })

    pruductNameP.innerText = pruduct.name;
    pruductPriceP.innerText = pruduct.price;
    addToBasket.innerText = "Add to basket";


    pruductDiv.appendChild(pruductNameP)
    pruductDiv.appendChild(pruductPriceP)
    pruductDiv.appendChild(addToBasket)
    container.appendChild(pruductDiv)
})