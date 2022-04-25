class Product {
  title = "DEFAULT";
  imageUrl;
  description;
  price;

  constructor(title, image, desc, price) {
    title;
    this.imageUrl = image;
    this.description = desc;
    price;
  }
}

const productList = {
  products: [
    new Product(
      "A Chease",
      "https://cdn.shopify.com/s/files/1/2836/2982/products/brie-recipe_678x.jpg?v=1533088694",
      "bri",
      19.99
    ),
    {
      title: "A Chease",
      imageURL:
        "https://cdn.shopify.com/s/files/1/2836/2982/products/brie-recipe_678x.jpg?v=1533088694",
      price: 19.99,
      description: "bri",
    },
    {
      title: "A Chease",
      imageURL:
        "https://media.istockphoto.com/photos/carpet-texture-picture-id122366121?s=612x612",
      price: 89.99,
      description: 'A sellout carpet from "kilimworld',
    },
  ],
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodList.append(prodEl);
      prodEl.innerHTML = `
      <div>
        <img src="${prod.imageURL}" alt="${prod.title}">
        <div class="product-item__content">
        <h2>${prod.title}</h2>;
        <h3>\$${prod.price}</h3>
        <p>${prod.description}</p>
        <button>Add to cart</button>
        </div>
        </div>
        `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();
