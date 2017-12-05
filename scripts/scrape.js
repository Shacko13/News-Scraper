// scrape script
// ==================

// Require request, cheerio to make scrapes possible
var request = require("request");
var cheerio = require("cheerio");

var scrape = function (cb) {

	request("http://www.bbc.com/", function(err, res, body) {

		var $ = cheerio.load(body);

		var articles = [];

		$(".media__content").each(function(i, element) {

			var title = $(this).children(".media__title").text().trim();
			var sum = $(this).children(".media__summary").text().trim();

			if(title && sum){
				var titleNeat = title.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
				var sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

				var dataToAdd = {
					title: titleNeat,
					summary: sumNeat
				};

				articles.push(dataToAdd);
			}
		});
		cb(articles);
	});
};

module.exports = scrape;