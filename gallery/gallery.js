$(document).ready(function() {
  var $menu = $('nav a').eq(0);
  var $album1 = $('nav a').eq(1);
  var $album2 = $('nav a').eq(2);
  var $album3 = $('nav a').eq(3);
  var $album4 = $('nav a').eq(4);
  var $album5 = $('nav a').eq(5);
  var $album6 = $('nav a').eq(6);

  //var $sideNav = $('aside').eq(0);


  $("nav a").click(function(event) {
    event.preventDefault();
    var relatedClass = "." + $(this).attr('rel');
    $(this).closest("li").siblings().removeClass("activeNav");
    $(this).closest("li").siblings().addClass("activeNav");
    $(relatedClass).siblings().removeClass("active");
    $(relatedClass).addClass('active');

      console.log(relatedClass);
      if(relatedClass === ".menu") {
          $('aside').hide();
          console.log("hide");
        } else{
          $('aside').show();
          console.log("show");
        };

      });


  $('img').click(function(event) {
    event.preventDefault();

    $(this).toggleClass("enlarge");

    if ( $(this).hasClass("enlarge")) {
      $(this).siblings().hide();
      $("aside").hide();
    } else {
      $(this).siblings().show();
      $("aside").show();
    };
  });

});
