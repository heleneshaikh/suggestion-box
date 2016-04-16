'use strict';

(function (app) {


  app.factory('suggestions', function () {
    var dummySuggestions = {
      posts: [
        {
          title: 'Free pizza at club meetings',
          upvotes: 15,
          comments: ['Power, beauty, and adventure']

        },
        {
          title: 'End all club emails with Laffy Taffy jokes',
          upvotes: 9,
          comments: ['Grow awkwardly like a warm kraken.']
        },
        {
          title: 'Retrofit water fountain with Gatorade',
          upvotes: 7,
          comments: ['Mark me codfish, ye fine wench!']
        },
        {
          title: 'Sing Bon Jovi\'s "Living on a Prayer" halfway through meetings',
          upvotes: 3,
          comments: ['Oh, yer not hoisting me without a grace!']
        }
      ]

    };
    return dummySuggestions;

  });


})(app);
