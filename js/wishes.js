const API_URL = "https://fakestoreapi.com/products";
const wrapper = document.querySelector('.wrapper');
const loading = document.querySelector('.loading');

let wishes = JSON.parse(localStorage.getItem("wishes"))


function createCard(data) {
    const fragment = document.createDocumentFragment();
    data.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <div data-id="${product.id}">
            <img name='product-image' class="card__image" src="${product.image}" alt="">
            <h2 class="card__title" title="${product.title}">${product.title}</h2>
            <p class="card__desc" title="${product.description}">${product.description}</p>
            <button name = "product-wish">Like</button>
            <button>Cart</button>
        </div>
        `;
        fragment.appendChild(card);
    });
    wrapper.appendChild(fragment);
}
createCard(wishes)