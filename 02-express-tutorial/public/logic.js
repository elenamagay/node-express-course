const productsBtn = async (event) => {
    event.preventDefault();
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';

    try {
        const response = await fetch('/api/v1/products');
        const data = await response.json();
        console.log(data);
        data.forEach((product) => {
            const productElement = createProductElement(product);
            productContainer.appendChild(productElement);
            });
    } catch (err) {
        console.error('Error occured', err)
    }
};

const createProductElement = (product) => {
    const productElement = document.createElement('div');
    productElement.classList.add('product-card');

    const nameElement = document.createElement('h3');
    nameElement.textContent = product.name;
    productElement.appendChild(nameElement);

    const priceElement = document.createElement('p');
    priceElement.textContent = `Price: $${product.price}`;
    productElement.appendChild(priceElement);

    const descElement = document.createElement('p');
    descElement.textContent = product.desc;
    productElement.appendChild(descElement);

    return productElement;
}

document.addEventListener('DOMContentLoaded', () => {
    const showButton = document.getElementById('show-button');
    showButton.addEventListener('click', productsBtn);
});