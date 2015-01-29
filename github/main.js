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

  renderRepo: function (){
    var repo = _.template(templates.repo);
    $('section').append(repo(repoData));
    console.log("renderrepo");
  },

  renderAllRepos: function(array) {
    _.each(array, gitPage.renderRepo);
    }
};


$(document).ready( function() {
  gitPage.init();

 $('.activity').on('click', (function() {
   $(this).toggle('active');
   $('.repositories').hide();
   //make repo invisible and view activity
 });

});
