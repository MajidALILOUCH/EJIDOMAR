// filter products

let filterButtons = document.querySelectorAll(".filter-list .filter-btn");
let productItems = document.querySelectorAll(".product-list .product-item");

filterButtons.forEach(function (button) {
  button.onclick = function () {
    // remove active class from all buttons
    filterButtons.forEach(function (button) {
      button.classList.remove("active");
    });
    // add active class to the current one
    this.classList.add("active");
    // manage productItems
    productItems.forEach(function (item) {
      item.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((item) => {
      item.style.display = "block";
    });
  };
});
