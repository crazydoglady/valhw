currentIndex = 0;



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
  config1: {
    // had to add &jsonp=data to return jsonp instead of json
    awwBaseUrl: "http://www.reddit.com/r/aww/.json?limit=100&jsonp=data",
  },
  config2: {
    baBaseUrl: "http://www.reddit.com/r/babyanimals/.json?limit=100&jsonp=data",
  },
  config3: {
    vacationBaseUrl:"http://www.reddit.com/r/EarthPorn/.json?limit=100&jsonp=data",
  },
  config4:{
    foodBaseUrl: "http://www.reddit.com/r/foodPorn/.json?limit=100&jsonp=data",
  },
  initEvents: function () {
    $('#cuteButton').on('click', happy.getAww);
    $('#animalsButton').on('click', happy.getAnimal);
    $('#vacationButton').on('click', happy.getVacation);
    $('#foodButton').on('click', happy.getFood);
    $('#randomButton').on('click', happy.getRandom);

  },

  getAww: function () {
    $.ajax ({
      url: happy.config1.awwBaseUrl,
      type: 'GET',
      dataType: 'JSONP',
      // had to add the next line because the function returned is "callback".  Rename to jsonp.
      // http://stackoverflow.com/questions/20075292/getting-json-from-the-reddit-search-api
      jsonp: "jsonp",
      success: function (jsonpCallback) {
        console.log("inside data function");
        console.log(jsonpCallback);
        var reddit = jsonpCallback.data.children;
        console.log(reddit);
        reddit.forEach(function (item, i, arr) {
          console.log (item);
            if (i === currentIndex) {
            $('.display').prepend('<img src="' + item.data.thumbnail + '">');
          }
        });
        currentIndex ++;
      },
      error: function (error) {
        console.log('error');
      }
    });
  },
  getAnimal: function () {
    $.ajax ({
      url: happy.config2.baBaseUrl,
      type: 'GET',
      dataType: 'JSONP',
      jsonp: "jsonp",
      success: function (jsonpCallback) {
        console.log("inside data function");
        console.log(jsonpCallback);
        var reddit = jsonpCallback.data.children;
        console.log(reddit);
        reddit.forEach(function (item, i, arr) {
          console.log (item);
            if (i === currentIndex) {
            $('.display').prepend('<img src="' + item.data.thumbnail + '">');
          }
        });
        currentIndex ++;
      },
      error: function (error) {
        console.log('error');
      }
    });
  },
  getFood: function () {
    $.ajax ({
      url: happy.config4.foodBaseUrl,
      type: 'GET',
      dataType: 'JSONP',
      // had to add the next line because the function returned is "callback".  Rename to jsonp.
      // http://stackoverflow.com/questions/20075292/getting-json-from-the-reddit-search-api
      jsonp: "jsonp",
      success: function (jsonpCallback) {
        console.log("inside data function");
        console.log(jsonpCallback);
        var reddit = jsonpCallback.data.children;
        console.log(reddit);
        reddit.forEach(function (item, i, arr) {
          console.log (item);
            if (i === currentIndex) {
            $('.display').prepend('<img src="' + item.data.thumbnail + '">');
          }
        });
        currentIndex ++;
      },
      error: function (error) {
        console.log('error');
      }
    });
  },
  getVacation: function () {
    $.ajax ({
      url: happy.config3.vacationBaseUrl,
      type: 'GET',
      dataType: 'JSONP',
      jsonp: "jsonp",
      success: function (jsonpCallback) {
        console.log("inside data function");
        console.log(jsonpCallback);
        var reddit = jsonpCallback.data.children;
        console.log(reddit);
        reddit.forEach(function (item, i, arr) {
          console.log (item);
            if (i === currentIndex) {
            $('.display').prepend('<img src="' + item.data.thumbnail + '">');
          }
        });
        currentIndex ++;
      },
      error: function (error) {
        console.log('error');
      }
    });
  },
};
