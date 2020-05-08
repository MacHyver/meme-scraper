const request = require('request');
const getUrls = require('get-urls');

request('https://memegen.link/examples', function (error, response, body) {
  //console.log('body:', body);
  //console.log('body:', body); // Print the HTML for the XYZ homepage.
  //getUrls(body);
  //console.log(getUrls(body));

  var re = /<img[^>]+src="([^">]+)/g;
  var results = body.match(re);

  // somehow https://memegen.link/examples + everything after src=" until'

  //.TrimStart("<img class="meme-img" src=") <-- didnt work because its the wrong language!

  results.forEach((tooLongThing, index) => {
    //var str = '<img class="meme-img" src='; //was useless for our purpose
    var shortLink = tooLongThing.replace(
      /<img class="meme-img" src="/g,
      'https://memegen.link',
    );

    //Loop for 1-10, has to be adjusted for my purpose
    // const cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
    // let info = 'My cats are called ';
    // const para = document.querySelector('p');

    // for (let i = 0; i < cats.length; i++) {
    //   info += cats[i] + ', ';
    // }

    console.log(index + ': ' + shortLink);
  });

  //console.log(res); //put in to test "res", not needed anymore I guess

  //We shall loop to get the first 10 and this should help ... I have to find out how it works!

  //const names = res + results;
  //console.log(names);

  //console.log(results.slice(1, 11); //<-- this one works, put out because I try the res thingy!!
});

//I forgot, but think it was a try to get images which didnt work
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
