var gitPage = {
  init: function() {
    gitPage.initStyling();
    gitPage.initEvents();
    console.log("initruns");

  },
  initStyling: function() {
    console.log("stylish");
  },

  initEvents: function() {
    gitPage.renderUser();
    gitPage.renderAllRepos(repoData);
    gitPage.renderAllEvents(eventsData);
    console.log("event");
  },
  // renderPost: function (post, index, array) {
  //   repo.idx = index;
  //   var compiled = _.template(templates.repo);
  //   console.log(compiled(repo));
  //   $("section").prepend(compiled(repo));
  // },

  renderUser: function() {
  var user = _.template(templates.userInfo);
  $('aside').prepend(user(userData));
  console.log("renderuser");
  },

  renderRepo: function (currentItem, index, array){
    var repo = _.template(templates.repo);
    // var html = "";
    $('.repoPost').append(repo(currentItem));
    console.log("renderrepo");
  },
  renderAllRepos: function (array) {
    _.each(array, gitPage.renderRepo);
    console.log("renderallrepo");
  },

  renderEvent: function (currentItem, index, array){
  var events = _.template(templates.activity);
  $('.activity').append(events(currentItem));
  console.log("renderevent");
},

   renderAllEvents: function (array) {
     _.each(array, gitPage.renderEvent);
     console.log("renderallevents");
   }

    // var event =_.template(templates.activity);
    //
    // if( 'type' === 'PushEvent') {
    //
    // } else if (type === forked){
    //
    // } else if(type === Created){
    //
    // }


};


$(document).ready( function() {
  gitPage.init();

 $('.activitymenu').click( function(event) {
   event.preventDefault();
   $('.activity').toggle('active');
   $(this).sibling().removeClass('active');
   console.log("toggle");

 });

 $('.repomenu').click( function(event){
   event.preventDefault();
   $('.repopost').toggle('active');

 });

});
