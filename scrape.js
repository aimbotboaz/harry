const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const fileshit = fs.createWriteStream('ding.csv');
//------------------------------------------------------------------------------
fileshit.write(`name,price \n`)
var i ="https://www.mtggoldfish.com/metagame/modern/full#paper";
request(i, function(err, respone, html){
if(!err){
  var $ = cheerio.load(html);
  $('.archetype-tile').each((i, bla) => {
    var name = $(bla)
    .find('a')
    .text();
    var price = $(bla)
    .find('.text-right')
    .text();
fileshit.write(`${name}, ${price} \n`);
});
}
});
