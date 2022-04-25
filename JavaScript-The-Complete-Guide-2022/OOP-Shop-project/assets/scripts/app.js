class Product {
  //   title = "DEFAULT";
  //   imageURL;
  //   description;
  //   price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageURL = image;
    this.description = desc;
    this.price = price;
  }
}

class ProductItem {
  constructor(product) {
      this.product = product; 
  }

  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
        <div>
          <img src="${this.product.imageURL}" alt="${this.product.title}">
          <div class="product-item__content">
          <h2>${this.product.title}</h2>;
          <h3>\$${this.product.price}</h3>
          <p>${this.product.description}</p>
          <button>Add to cart</button>
          </div>
          </div>
          `;
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      "A Chease",
      "https://cdn.shopify.com/s/files/1/2836/2982/products/brie-recipe_678x.jpg?v=1533088694",
      "bri",
      19.99
    ),
    new Product(
      "A Carpet",
      "https://media.istockphoto.com/photos/carpet-texture-picture-id122366121?s=612x612",
      "A sellout carpet from 'kilimworld'",
      89.99
    ),
  ];
  constructor() {}

  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
     const productItem = new ProductItem(prod);
     const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();
