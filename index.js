const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
//------------------------------------------------------------------------------
var i ="https://tweakers.net/categorie/49/videokaarten/producten/";
request(i, function(err, respone, html){
if(!err){
  var $ = cheerio.load(html);
  var price = $('.listing');//"master" container alles moet hier in zitten
  var output = price.find('.editionName').text();//specifieke shit
  var output2 = price.find('.price').text();
  console.log(output);

}
});
