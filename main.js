var productPage ={

  init: function() {
    productPage.addAllProducts(products);
  },

  initStyling: function () {
    console.log("called init styling");
  },

  initEvents: function () {
    console.log("called int events");
  },

  addProduct: function(product) {
    $('section').append(
      "<article>" +
      "<img src = '" + product.image + "' alt=''>"
      + "<h3>" + product.productName + "</h3>"
      + "<h3>" + product.price + "</h3>"
      + "<p>" + product.productDescription + "</p>"
      + "</article>"
    );
  },

  addAllProducts: function(productsData) {
    productsData.forEach(productPage.addProduct);

  }

};



$(document).ready(function () {
  productPage.init();
});
