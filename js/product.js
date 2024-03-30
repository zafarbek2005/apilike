const API_URL = "https://fakestoreapi.com/products";
const productSingle = document.querySelector(".product__single");
const notFound = document.querySelector(".not_found");

async function fetchData(api) {
    let path =  new URLSearchParams(window.location.search);
    let id = path.get("id");

    let getData = await fetch(`${api}/ ${id}`);
    getData
         .json()
         .then((data) => {})
         .catch((err) => {
            notFound.computedStyleMap.diplay = "block";

         });
}
fetchData(API_URL)

function createSingle(data) {
    productSingle.innerHTML = `
    <div class="product__image">
    <img src="${data.image}" alt="">
</div>
<div class="product__content">
    <h1>${data.title}</h1>
    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
    <p>${data.description}</p>
</div>
    
    `
}
