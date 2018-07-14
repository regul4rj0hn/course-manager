import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

// Allowing console calls below since this is a build file
/*eslint-disable no-console*/

fs.readFile('src/index.html', 'utf8', (err, markup) => {
  if (err) {
    return console.log(err);
  }

  const $ = cheerio.load(markup);

  // Separate spreadsheet is used for the production build, need to dynamically
  $('head').prepend('<link rel="stylesheet" href="styles.css">');

  fs.writeFile('dist/index.html', $.html(), 'utf8', function (err) {
    if (err) {
      return console.log(err);
    }
    console.log('index.html written to /dist'.green);
  });
});
