$(document).ready(function() {
//q1
  $(".circle").eq(0).click(function (event) {
    event.preventDefault();
    $(this).removeClass("circle");
    $(this).addClass("square");
    $(this).html("Star Wars: A New Hope");
    $(this).css("background", "url('images/HanSolo.png')");
  });
//q2
  $(".square").eq(0).hover(function (event) {
        event.preventDefault();
        $(this).css("background", "red");
        $(this).removeClass("circle");
        $(this).addClass("square");
        $(this).html("The Congo");
        $(this).css("background", "url('images/congoriver.jpeg')");
        console.log("Answer: The congo");
  });
//q3
  $(".circle").eq(1).find("select").change(function () {
    $(this).parent().css("background", "url('http://www.placecage.com/200/200')", "no-repeat");
    $(this).parent().css("color", "transparent");
    $(this).hide();
    console.log("Answer: Nicolas Cage");
  });
//q4
  $(".square").eq(1).dblclick(function(event) {
    event.preventDefault();
    $(this).text("Indonesia");
    $(this).removeClass("circle");
    $(this).addClass("square");
    $(this).css("background", "url('images/indonesiaflag.png')");
    console.log("Q3: Indonesia");
});
//q5
  $(".circle").eq(2).mousedown(function() {
    event.preventDefault();
    $(this).html("John Lennon");
    $(this).removeClass("circle");
    $(this).addClass("square");
    $(this).css("background", "url('images/johnlennon.jpg')");
    console.log("Q4: John Lennon")
  });
//q6
  $(".square").eq(2).mouseenter(function() {
    event.preventDefault();
    $(this).html("1986");
    $(this).css("background", "url('images/zelda-1986.jpg')");
    console.log("1986")
  });

//q7
  $(".circle").eq(3).mouseup(function (event) {
    event.preventDefault();
    $(this).removeClass("circle");
    $(this).addClass("square");
    $(this).html("Captain Morgan was a Welsh Pirate before being knighted");
    $(this).css("background", "url('images/captainmorgan.jpeg')");
  });
//q8
  $(".square").eq(3).mouseout(function (event) {
    $(this).html("A Boy Named Sue");
    $(this).css("background", "url('images/album.jpg')");
  });
//q9
$("form").submit(function( event ) {
    event.preventDefault();
    $(this).parent().css("background", "url('images/forty.png')");
    $("form").hide();
  });

//q10
  $("body").on("click","button", function () {
    $(this).parent().css("background", "url('images/prii.jpg')");
    $(this).parent().css("color", "white");
    $(this).parent().html("Prii");
    $(this).hide();
  });



});
