var fs = require('fs')
  , reverse = require('./index');

['eagle', 't-rex', 'pig', 'wolf', 'bear'].forEach(function(name) {
  var file = './tests/' + name + '.txt';
  reverse.reverseArtFile(file, function(err, art, orig) {
    if (err) throw err;
    console.log(orig);
    console.log(art);
  });
});
