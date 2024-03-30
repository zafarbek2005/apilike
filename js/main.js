const wrapper = document.querySelector('.wrapper');
const loading = document.querySelector('.loading');
const API_URL = "https://fakestoreapi.com/products";

async function fetchData(api) {
    try {
        const response = await fetch(api);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        createCard(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        loading.style.display = 'none';
    }
}

fetchData(API_URL);

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

const singleRoute = (id) => {
    window.open(`/pages/product.html?id=${id}`, "_self");
};  

const setWish = async (id) =>{
    let  getData = await fetch(`${API_URL}/${id}`)
    getData
    .json()
    .then((res) => {
        let wishes = JSON.parse(localStorage.getItem("wishes")) || [];
        let index = wishes.findIndex(el => el.id === +id);
        if (index < 0) {
         localStorage.setItem('wishes',JSON.stringify([...wishes,res]))
        } 
    })
    .catch((err) => {
        console.log(err);
    })
}

wrapper.addEventListener('click', (e) => {
    let {name} = e.target
    if (e.target.getAttribute('name') === 'product-image') {
        const id = e.target.closest('[data-id]').getAttribute('data-id');
        singleRoute(id);
    }else if  (name === "product-wish"){
        const id = e.target.closest('[data-id]').dataset.id
        setWish(id)
    } 
});


















// Navbar toggle
const navbarCollection = document.querySelector(".navbar__collection");
const navbarMenu = document.querySelector(".navbar__menu");

navbarMenu.addEventListener("click", () => {
    navbarCollection.classList.toggle('show');
});
