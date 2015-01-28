var productsPost = {
  init: function () {
    productsPost.initStyling();
    productsPost.initEvents();
    productsPost.renderAllProducts(products);
  },

  initStyling: function() {
    console.log("styling loaded");

  },

  initEvents: function() {
    $('.form').on('submit', function (event) {
      event.preventDefault();
      productsPost.createProduct();
    });

    $('section').on('click', '.deleteProduct',productsPost.deleteProduct);

    $('section').on('click', '.edit',productsPost.updateProduct);

    console.log("events loaded");

  },

  createProduct: function() {
    var newProduct = {
      name: $('.form input[name="name"]').val(),
      image: $('.form input[name="image"]').val(),
      description: $('.form input[description="description"]').val(),
      price: $('.form input[price="price"]').val(),
    };

    products.push(newProduct);
    // productsPost.renderPost(newProduct, products.indexOf(newProduct));
    // $('.box input').val('');         WHAT DOES THIS DO??
    // $('.box textarea').val('');
  },

  updateProduct: function(event) {
    event.preventDefault();
    var editIndex = $(this).closest('article').data('index');
    var productName = products[editIndex].name;
    var productImage = products[editIndex].image;
    var productDescription = products[editIndex].description;
    var productPrice = products[editIndex].price;

    var newTitle = prompt("New name for product", productName); //empty field
      console.log(newTitle);
      var newImage = prompt("new image", productImage);
      console.log(newImage);
      var newDescription = prompt("New Description", productDescription);
      console.log(newDescription);
      var newPrice = prompt("New Price", productPrice);
      console.log(newPrice);


    // products[editIndex].name=newTitle;

    var editProduct = {
    name:  newTitle,
    image:  newImage,
    description:  newDescription,
    price: newPrice,
  };

  products.splice(editIndex, 1);
  console.log(editProduct);

  productsPost.renderProduct(editProduct);


    // console.log($(this).val(name) ); doesnt work
    // console.log($(this).closest('article').val(name) ); doesn't work
    // console.log($(this).closest('article').data(name) ); doesn't work
    // console.log($(this).closest('article').val() ); doesn't work
    // console.log(products[editIndex] ); //finds object at index

    //var productImage = products[editIndex].image;
    // var productName = products[editIndex].name; //finds name
    // var productImage = products[editIndex].image;
    // var productDescription= products[editIndex].description;

    // var form= {
    //   name: $('.form input[name="name"]').val(),
    //   image: $('.form input[name="image"]').val(),
    //   description: $('.form input[description="description"]').val(),
    //   price: $('.form input[price="price"]').val(),
    // // };
    // console.log($(this).closest('article'));
    // $(this).closest('article').replaceWith().innerHTML();

     //form fields
    //now need to have form with var values instead of blank fields
    //submit or save infoto render all Posts


    //show $(this) form data
    //

    // productPag.renderAllProducts(products);

    //submit and refresh page with new text
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
    $("section").prepend(compiled(product));

  },
  renderAllProducts: function (allProducts) {
    //productsData.forEach(productsPost.renderProducts); .forEach notation replaced with underscore function
      _.each(allProducts, productsPost.renderProduct);
  }

}; //end productsPost



$(document).ready(function () {
  productsPost.init();


});
