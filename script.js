const productsContainer = document.getElementById('products-container');

const products = [
    { id: 1, name: 'Produto 1', price: 50, image: 'product1.jpg' },
    { id: 2, name: 'Produto 2', price: 70, image: 'product2.jpg' },
    { id: 3, name: 'Produto 3', price: 100, image: 'product3.jpg' }
];

function renderProducts() {
    productsContainer.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>R$ ${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Adicionar ao carrinho</button>
        `;
        productsContainer.appendChild(productElement);
    });
}

function addToCart(productId) {
    // Aqui você pode implementar a lógica para adicionar o produto ao carrinho
    // Por exemplo: redirecionar para a página do carrinho ou exibir uma mensagem de sucesso
    alert(`Produto ${productId} adicionado ao carrinho!`);
}

renderProducts();
