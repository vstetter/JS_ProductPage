var productPage ={

  init: function() {
    productPage.initStyling();
    productPage.initEvents();
  },

  initStyling: function () {
    productPage.renderAllProducts(products);
    // console.log("called init styling");
  },

  initEvents: function () {

    $('.box form').on('submit', function (event) {
      event.preventDefault();
      productPage.createProduct();
    });

    $('section').on('click', '.deleteProduct', productPage.deleteProduct);

    // console.log("called init events");
  },

  createProduct: function () {
    var newProduct = {
      image: $('.box input[name="image"]').val(),
      productName: $('.box input[name="productName"]').val(),
      price: $('.box input[name="price"]').val(),
      productDescription: $('.box textarea[name="productDescription"]').val()
    };

    products.push(newProduct);


    productPage.renderProduct(newProduct, products.indexOf(newProduct));

    $('.box input').val('');
    $('.box textarea').val('');

  },

  updateProduct: function () {

    // access values of current product
    // display in input fields (form?) to edit
    // on click of "edit" button, save new values to existing product on DOM
    // save new values to current product in products array (splice old values, )


  },

  deleteProduct: function (event) {

    var productIndex = $(this).closest('article').data('index');

    console.log(productIndex);
    products.splice(productIndex, 1);

    $(this).closest('article').remove();


  },

  renderProduct: function(product, index, array) {
    product.idx = index;
    var compiled = _.template(templates.product);

    $("section").prepend(compiled(product));


  },

  renderAllProducts: function(allProducts) {

    _.each(allProducts, productPage.renderProduct)

  }

};



$(document).ready(function () {
  productPage.init();
});
