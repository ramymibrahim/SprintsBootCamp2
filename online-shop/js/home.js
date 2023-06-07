(function () {
  console.log(0);

  const response = fetch("http://localhost:5000/api/categories/");
  response.then((data) => {
    data.json().then((d) => {
      let list = "";
      d.data.forEach((element) => {
        list =
          list +
          `<a data-id="${element._id}" onclick="getCities(${element._id})" href="products.php?cat_id=${element._id}" class="nav-item nav-link">${element.name}</a>`;
      });
      document.getElementById("categories-menu").innerHTML = list;
      console.log(d.data);
    });
  });

  console.log(1);
})();

const products = [
  {
    _id: "1",
    name: "Product 1",
    price: 100,
    discount: 0.1,
    image: "",
    rating: 3.5,
    rating_count: 100,
  },
  {
    _id: "2",
    name: "Product 2",
    price: 150,
    discount: 0.1,
    image: "",
    rating: 3.5,
    rating_count: 100,
  },
  {
    _id: "3",
    name: "Product 3",
    price: 80,
    discount: 0.1,
    image: "",
    rating: 3.5,
    rating_count: 100,
  },
  {
    _id: "1",
    name: "Product 1",
    price: 100,
    discount: 0.1,
    image: "",
    rating: 3.5,
    rating_count: 100,
  },
];

class Product {
  id;
  name;
  price;
  discount;
  image;
  rating;
  rating_count;
  constructor(obj) {
    this.id = obj._id;
    this.name = obj.name;
    this.price = obj.price;
    this.discount = obj.discount;
    this.rating = obj.rating;
    this.rating_count = obj.rating_count;
  }

  getPriceAfterDiscount() {
    return this.price - this.price * this.discount;
  }

  getRatingHTML() {
    return `<div class="d-flex align-items-center justify-content-center mb-1">
    <small class="fa fa-star text-primary mr-1"></small>
    <small class="fa fa-star text-primary mr-1"></small>
    <small class="fa fa-star text-primary mr-1"></small>
    <small class="fa fa-star text-primary mr-1"></small>
    <small class="fa fa-star text-primary mr-1"></small>
    <small>(99)</small>
  </div>`;
  }

  getHomeHTML() {
    return `<div class="col-lg-3 col-md-4 col-sm-6 pb-1">
    <div class="product-item bg-light mb-4">
      <div class="product-img position-relative overflow-hidden">
        <img class="img-fluid w-100" src="${this.image}" alt="">
        <div class="product-action">
          <a class="btn btn-outline-dark btn-square" href="#" onclick=""><i class="fa fa-shopping-cart"></i></a>
          <a class="btn btn-outline-dark btn-square" href="#"><i class="far fa-heart"></i></a>
          <a class="btn btn-outline-dark btn-square" href="#"><i class="fa fa-sync-alt"></i></a>
          <a class="btn btn-outline-dark btn-square" href="#"><i class="fa fa-search"></i></a>
        </div>
      </div>
      <div class="text-center py-4">
        <a class="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
        <div class="d-flex align-items-center justify-content-center mt-2">
          <h5>$${this.getPriceAfterDiscount()}</h5>
          <h6 class="text-muted ml-2"><del>$${this.price}</del></h6>
        </div>
        <div class="d-flex align-items-center justify-content-center mb-1">
          ${this.getRatingHTML()}
        </div>
      </div>
    </div>
  </div>`;
  }

  getHTML() {
    return ``;
  }
}

class CartLine {
  product;
  quantity;
  constructor(product, quantity = 1) {
    this.product = product;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.product.getPriceAfterDiscount() * this.quantity;
  }

  increment() {
    this.quantity++;
  }

  decrement() {
    if (this.quantity > 1) this.quantity--;
  }
}

class Cart {
  cartlines;
  constructor(productsArray) {
    this.cartlines = [];
    //loop to add products into cartlines array
  }

  remove(productId) {}

  getTotal() {}

  getSubTotal() {}
}
//Cart
//CartLine
//Product
//Category
