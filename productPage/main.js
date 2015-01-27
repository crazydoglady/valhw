var productsPost = {
  init: function () {
    productsPost.initStyling();
    productsPost.initEvents();
    productsPost.addAllProducts(products);
  },

  initStyling: function() {

  },

  initEvents: function() {

  },

  addProducts: function(product) {
    console.log(product);
    $("section").append(
      "<article>" + "<h2>" + product.name +"</h2>" + product.image + "<p>" + product.description + "</p>" + "<button>" + product.price + "</button>" + "</article>"
  );
},

  addAllProducts: function (productsData) {
    productsData.forEach(productsPost.addProducts);
    }

}; //end productsPost



$(document).ready(function () {
  productsPost.init();


});
