/**
 * Created by i068959 on 15/4/16.
 */
var request = require("request"),
	cheerio = require("cheerio"),
	//httpProxy = require('http-proxy'),
	url = "http://www.wunderground.com/cgi-bin/findweather/getForecast?&query=" + 02888;

//httpProxy.createProxyServer({target:'http://proxy.pal.sap.corp:8080'}).listen(8000);
request=request.defaults({'proxy':'http://proxy.pal.sap.corp:8080'});
request(url, function (error, response, body) {
	if (!error) {
		var $ = cheerio.load(body),
			temperature = $("[data-variable='temperature'] .wx-value").html();

		console.log("It’s " + temperature + " degrees Fahrenheit.");
	} else {
		console.log("We’ve encountered an error: " + error);
	}
});