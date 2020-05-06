const request = require('request');
const getUrls = require('get-urls');

request('https://memegen.link/examples', function (error, response, body) {
  //console.log('body:', body);
  //console.log('body:', body); // Print the HTML for the Google homepage.
  //getUrls(body);
  //console.log(getUrls(body));

  var re = /<img[^>]+src="([^">]+)/g;
  var results = body.match(re);

  console.log(results);
});

{
  /* var getImageUrls = require('get-image-urls');
getImageUrls(console.log('body:', body), function (err, images) 
if (!err)
    console.log('body:', body);
    console.log('Images found', images.length);
     console.log(images);
   } else {
    console.log('ERROR', err);
  }
});  */
}
