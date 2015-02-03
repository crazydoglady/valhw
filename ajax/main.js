
$(document).ready(function(){
  happy.init();

});

var happy = {
  init: function () {
    happy.initStyling();
    happy.initEvents();
  },

  initStyling: function () {
    console.log('init styling');
  },
  config: {
    // had to add &jsonp=data to return jsonp instead of json
    baseUrl: "http://www.reddit.com/r/aww/.json?limit=10&jsonp=data",
  },
  initEvents: function () {
    $('.cute').on('click', happy.getAww());
  },
  getAww: function () {
    event.preventDefault();
    $.ajax ({
      url: happy.config.baseUrl,
      type: 'GET',
      dataType: 'JSONP',
      // had to add the next line because the function returned is "callback".  Rename to jsonp.
      // http://stackoverflow.com/questions/20075292/getting-json-from-the-reddit-search-api
      jsonp: "jsonp",
      success: function (jsonpCallback) {
        console.log("inside data function");
        console.log(jsonpCallback);
        var awwws = jsonpCallback.data.children;
        var markup= "";
        console.log(awwws);
        awwws.forEach(function (item, idx, arr) {
          console.log (item);
          $('.cute').closest('section').append('<img src="' +item.data.thumbnail + '">');
        });
      },
      error: function (error) {
        console.log('error');
      }
    })
  },
};
