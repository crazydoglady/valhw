var productsPost = {
  init: function () {
    productsPost.initStyling();
    productsPost.initEvents();
  },

  initStyling: function() {
    productsPost.renderAllProducts(products);

  },

  initEvents: function() {
    $('.form').on('submit', function (event) {
      event.preventDefault();
      productsPost.createProduct();
    });

    $('section').on('click', '.deleteProduct', productsPost.deleteProduct);

  },

  createProduct: function() {
    var newProduct = {
      name: $('.form input[name="name"]').val(),
      image: $('.form input[name="image"]').val(),
      description: $('.form input[description="description"]').val(),
      price: $('.form input[price="price"]').val(),
    };

    products.push(newProduct);

    productsPost.renderProduct(newProduct,        products.indexOf(newProduct));
  },

  updateProduct: function() {
    //add code here

  },

  deleteProduct: function(event) {
    var productIndex = $(this).closest('article').data('index');

    console.log(productIndex);
    products.splice(productIndex, 1);

    $(this).closest('article').remove();
  },

  //replaces 'addProduct function' from previous notes, just changed name
  renderProduct: function(product, index, array) {
    product.idx = index;
    var compiled = _.template(templates.product);

    console.log(compiled(product));
    $("section").prepend(compiled(product));

  },

  renderAllProducts: function (allProducts) {
    //productsData.forEach(productsPost.renderProducts);
      _.each(allProducts, productsPost.renderProduct);
  }

}; //end productsPost



$(document).ready(function () {
  productsPost.init();


});
