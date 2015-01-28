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

    $('section').on('click', '.editProduct', function (event) {
      event.preventDefault();
      $(this).closest('article').find('.editform').toggleClass('active');

    });

    $('section').on('click', '.UpdateWholeProduct', function(){

      var thisIndex = $(this).closest('article').data('index');

      var updatedProduct = {

        image: $(this).closest('article').find('input.editImage').val(),
        productName: $(this).closest('article').find('input.editproductName').val(),
        price: $(this).closest('article').find('input.editprice').val(),
        productDescription: $(this).closest('article').find('input.editproductDescription').val()
      };

      products.splice(thisIndex, 1, updatedProduct);

      productPage.renderAllProducts(products);





    });

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

    // var productIndex = $(this).closest('article').data('index');

    // var title = $(this).siblings('.title').val();
    //
    //
    //


    // $('.box input[name="productName"]').val(title);

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
