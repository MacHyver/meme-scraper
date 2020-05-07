const request = require('request');
const getUrls = require('get-urls');

request('https://memegen.link/examples', function (error, response, body) {
  //console.log('body:', body);
  //console.log('body:', body); // Print the HTML for the Google homepage.
  //getUrls(body);
  //console.log(getUrls(body));

  var re = /<img[^>]+src="([^">]+)/g;
  var results = body.match(re);

  //var onlyTen = results.slice(10, results.length);
  // somehow https://memegen.link/examples + everything after src=" until'
  //.TrimStart("<img class="meme-img" src=")

  var str = '<img class="meme-img" src=';
  var res = str.replace(/<img class="meme-img" src=/g, 'https://memegen.link');

  console.log(res);

  //const userNames = ['Rhaisa', 'Sara', 'Sari', 'Tamara'];
  //const newUserNames = userNames.filter((userName, index) => index !== 1);
  //console.log(results.slice(1, 11);
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
