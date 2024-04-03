const select = document.getElementById('Product');
const cardProduct = document.querySelector('.container');
const searchInput = document.getElementById('search');

//all product
const filteringCard = {
    allProduct: [{
        nameProduct: "Jordan Flight MVP",
        description: "Is a range of athletic shoes made by Nike that began with Air Force 1. It was created by designer Bruce Kilgore and was the first basketball shoe to use Nike's 'Air' technology.",
        typeProduct: ['Man', 'TopWear', null],
        image: "image/jordanMVP1.jpeg"
    }, {
        nameProduct: "Nike Blazer Low '77",
        description: "Is a range of athletic shoes made by Nike that began with Air Force 1. It was created by designer Bruce Kilgore and was the first basketball shoe to use Nike's 'Air' technology.",
        typeProduct: ['Unisex', 'Bottom', null],
        image: "image/blazerLow"
    }, {
        nameProduct: "nike solo swoosh",
        description: "Is a range of athletic shoes made by Nike that began with Air Force 1. It was created by designer Bruce Kilgore and was the first basketball shoe to use Nike's 'Air' technology.",
        typeProduct: ['Man','TopWear', null],
        image: "image/nikeSoloSw.jpeg"
    }, {
        nameProduct: "nike revolution",
        description: "Is a range of athletic shoes made by Nike that began with Air Force 1. It was created by designer Bruce Kilgore and was the first basketball shoe to use Nike's 'Air' technology.",
        typeProduct: ['Kids', 'Bottom', 'Unisex'],
        image: "image/revolution.jpeg"
    }, {
        nameProduct: "Pants MVP",
        description: "Is a range of athletic shoes made by Nike that began with Air Force 1. It was created by designer Bruce Kilgore and was the first basketball shoe to use Nike's 'Air' technology.",
        typeProduct: ['Man','BottomWear', null],
        image: "image/pantsMVP.jpeg"
    }, 
    {
        nameProduct: "jordan max aura 5",
        description: "Is a range of athletic shoes made by Nike that began with Air Force 1. It was created by designer Bruce Kilgore and was the first basketball shoe to use Nike's 'Air' technology.",
        typeProduct: ['Kids','Bottom', 'Unisex'],
        image: "image/maxAura5.jpeg"
    },
    {
        nameProduct: "jordan flight fleece",
        description: "Is a range of athletic shoes made by Nike that began with Air Force 1. It was created by designer Bruce Kilgore and was the first basketball shoe to use Nike's 'Air' technology.",
        typeProduct: ['Women', 'TopWear', null],
        image: "image/womanFlece.jpeg"
    },
    {
        nameProduct: "adidas kawa",
        description: "Is a range of athletic shoes made by Nike that began with Air Force 1. It was created by designer Bruce Kilgore and was the first basketball shoe to use Nike's 'Air' technology.",
        typeProduct: ['Kids', 'Unisex', 'Bottom'],
        image: "image/kawa.jpeg"
    },
    {
        nameProduct: "SportsWear Solo",
        description: "Is a range of athletic shoes made by Nike that began with Air Force 1. It was created by designer Bruce Kilgore and was the first basketball shoe to use Nike's 'Air' technology.",
        typeProduct: ['Women', 'TopWear', null],
        image: "image/sportsWear.jpeg"
    },
    {
        nameProduct: "sandals kids",
        description: "Is a range of athletic shoes made by Nike that began with Air Force 1. It was created by designer Bruce Kilgore and was the first basketball shoe to use Nike's 'Air' technology.",
        typeProduct: ['Kids', 'Women', 'Bottom'],
        image: "image/Sandals Kids",
    },
    {
        nameProduct: "Hoodie Esential",
        description: "Is a range of athletic shoes made by Nike that began with Air Force 1. It was created by designer Bruce Kilgore and was the first basketball shoe to use Nike's 'Air' technology.",
        typeProduct: ['Women', 'TopWear', null],
        image: "image/hoodiewo.jpeg",
    },
    {
        nameProduct: "Nike air force 1",
        description: "Is a range of athletic shoes made by Nike that began with Air Force 1. It was created by designer Bruce Kilgore and was the first basketball shoe to use Nike's 'Air' technology.",
        typeProduct: ['Unisex', 'Bottom', null],
        image: "image/air force 1.png",
    },
]
}

//fitur search product
searchInput.addEventListener('input', ()=> {
    const productCards = document.querySelectorAll('.product-card');
    const regex = /[\W_]/g 
    const searchTerm = searchInput.value.toLowerCase().replace(regex, "");
    
    productCards.forEach(card => {
        const productName = card.querySelector('.name-product').textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
})


Object.freeze(filteringCard)
//destructuring object
const { allProduct } = filteringCard

// template manipulation DOM
const filteringProduct = (all = allProduct) => {
    cardProduct.innerHTML = all.map(({nameProduct, description, typeProduct, image}) => 
        `<div class="product-card">
            <div class="image">
                <img src="${image}">
            </div>
            <h2 class="name-product">${nameProduct}</h2>
            <p>${description}</p>
            <p class="Kategori" id="capek">Kategori: <span>${typeProduct[0]},</span> <span>${typeProduct[1]}</span>, <span>${typeProduct[2] === null ? '' : typeProduct[2]}</span></span></p>
            <button>Add to chart</button>
        </div>   
        `
    ).join("")
};

//filtering by value from select using switch statment
select.addEventListener('change', (e) => {
    cardProduct.innerHTML = "";
    searchInput.value = "";
    switch (e.target.value){
        case 'man': 
            filteringProduct(allProduct.filter((product) => product.typeProduct[0] === 'Man'));
            break
        case 'women':
            filteringProduct(allProduct.filter((product) => product.typeProduct[0] === 'Women' || product.typeProduct[1] === 'Women'));
            break
        case 'top':
            filteringProduct(allProduct.filter((product) => product.typeProduct[1] === 'TopWear'));
            break
        case 'bottom':
            filteringProduct(allProduct.filter((product) => product.typeProduct[1] === 'Bottom' || product.typeProduct[1] === 'BottomWear'));
            break
        case 'kids':
            filteringProduct(allProduct.filter((product) => product.typeProduct[0] === 'Kids'));
            break
        default:
            filteringProduct()
            break
    }
})