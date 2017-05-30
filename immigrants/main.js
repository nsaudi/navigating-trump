//objects containing number of workers content that will be injected into each country and industry
var amounts = {
	agriculture: {
		libya: "N/A",
		iran: "1,347",
		syria: "473",
		yemen: "68",
		sudan: "123",
		somalia: "190"
	},

	construction: {
		libya: "N/A",
		iran: "8,755",
		syria: "1,616",
		yemen: "476",
		sudan: "492",
		somalia: "474"
	},

	manufacturing: {
		libya: "N/A",
		iran: "19,081",
		syria: "2,759",
		yemen: "1,378",
		sudan: "4,480",
		somalia: "7,067"
	},

	wholesaletrade: {
		libya: "N/A",
		iran: "8,306",
		syria: "1,656",
		yemen: "408",
		sudan: "443",
		somalia: "759"
	},

	retailtrade: {
		libya: "N/A",
		iran: "30,754",
		syria: "10,722",
		yemen: "9,286",
		sudan: "3,077",
		somalia: "3,984"
	},

	transportation: {
		libya: "N/A",
		iran: "8,530",
		syria: "1,656",
		yemen: "527",
		sudan: "3,815",
		somalia: "9,343"
	},

	information: {
		libya: "N/A",
		iran: "4,490",
		syria: "828",
		yemen: "119",
		sudan: "714",
		somalia: "427"
	},

	finance: {
		libya: "N/A",
		iran: "15,938",
		syria: "1,498",
		yemen: "340",
		sudan: "640",
		somalia: "2,371"
	},

	administrative: {
		libya: "N/A",
		iran: "27,836",
		syria: "2,720",
		yemen: "1,088",
		sudan: "1,600",
		somalia: "3,889"
	},

	education: {
		libya: "N/A",
		iran: "63,304",
		syria: "10,328",
		yemen: "1,310",
		sudan: "5,661",
		somalia: "13,090"
	},

	arts: {
		libya: "N/A",
		iran: "15,040",
		syria: "2,444",
		yemen: "1,446",
		sudan: "2,092",
		somalia: "3,178"
	},

	services: {
		libya: "N/A",
		iran: "12,122",
		syria: "1,971",
		yemen: "357",
		sudan: "714",
		somalia: "1,707"
	},

	public: {
		libya: "N/A",
		iran: "8,979",
		syria: "788",
		yemen: "221",
		sudan: "788",
		somalia: "949"
	},
};

//this content is injected into the .content div in the html containing percentage of workers
var responses = {
	agriculture: {
		libya: "<p class =\"inner\">The number of people who have immigrated to the U.S. from Libya in the past years has been too small. The American Community Survey will not publish their professional or demographic data to protect the identity and the personal information of the immigrants involved.</p>",
		iran: "<p class=\"inner\">This is <span class=\"percent\">0.6%</span> of the population of Iranian born immigrants working in the U.S.</p>",
		syria: "<p class=\"inner\">This is <span class=\"percent\">1.2%</span> of the population of Syrian born immigrants working in the U.S.</p>",
		yemen: "<p class=\"inner\">This is <span class=\"percent\">0.4%</span> of the population of Yemeni born immigrants working in the U.S.</p>",
		sudan: "<p class=\"inner\">This is <span class=\"percent\">0.5%</span> of the population of Sudanese born immigrants working in the U.S.</p>",
		somalia: "<p class=\"inner\">This is <span class=\"percent\">0.4%</span> of the population of Somali born immigrants working in the U.S.</p>"
	},

	construction: {
		libya: "<p class =\"inner\">The number of people who have immigrated to the U.S. from Libya in the past years has been too small. The American Community Survey will not publish their professional or demographic data to protect the identity and the personal information of the immigrants involved.</p>",
		iran: "<p class=\"inner\">This is <span class=\"percent\">3.9%</span> of the population of Iranian born immigrants working in the U.S.</p>",
		syria: "<p class=\"inner\">This is <span class=\"percent\">4.1%</span> of the population of Syrian born immigrants working in the U.S.</p>",
		yemen: "<p class=\"inner\">This is <span class=\"percent\">2.8%</span> of the population of Yemeni born immigrants working in the U.S.</p>",
		sudan: "<p class=\"inner\">This is <span class=\"percent\">2%</span> of the population of Sudanese born immigrants working in the U.S.</p>",
		somalia: "<p class=\"inner\">This is <span class=\"percent\">1%</span> of the population of Somali born immigrants working in the U.S.</p>"
	},

	manufacturing: {
		libya: "<p class =\"inner\">The number of people who have immigrated to the U.S. from Libya in the past years has been too small. The American Community Survey will not publish their professional or demographic data to protect the identity and the personal information of the immigrants involved.</p>",
		iran: "<p class=\"inner\">This is <span class=\"percent\">8.5%</span> of the population of Iranian born immigrants working in the U.S.</p>",
		syria: "<p class=\"inner\">This is <span class=\"percent\">7%</span> of the population of Syrian born immigrants working in the U.S.</p>",
		yemen: "<p class=\"inner\">This is <span class=\"percent\">8.1%</span> of the population of Yemeni born immigrants working in the U.S.</p>",
		sudan: "<p class=\"inner\">This is <span class=\"percent\">18.2%</span> of the population of Sudanese born immigrants working in the U.S.</p>",
		somalia: "<p class=\"inner\">This is <span class=\"percent\">14.9%</span> of the population of Somali born immigrants working in the U.S.</p>"
	},

	wholesaletrade: {
		libya: "<p class =\"inner\">The number of people who have immigrated to the U.S. from Libya in the past years has been too small. The American Community Survey will not publish their professional or demographic data to protect the identity and the personal information of the immigrants involved.</p>",
		iran: "<p class=\"inner\">This is <span class=\"percent\">3.7%</span> of the population of Iranian born immigrants working in the U.S.</p>",
		syria: "<p class=\"inner\">This is <span class=\"percent\">4.2%</span> of the population of Syrian born immigrants working in the U.S.</p>",
		yemen: "<p class=\"inner\">This is <span class=\"percent\">2.4%</span> of the population of Yemeni born immigrants working in the U.S.</p>",
		sudan: "<p class=\"inner\">This is <span class=\"percent\">1.8%</span> of the population of Sudanese born immigrants working in the U.S.</p>",
		somalia: "<p class=\"inner\">This is <span class=\"percent\">1.6%</span> of the population of Somali born immigrants working in the U.S.</p>"
	},

	retailtrade: {
		libya: "<p class =\"inner\">The number of people who have immigrated to the U.S. from Libya in the past years has been too small. The American Community Survey will not publish their professional or demographic data to protect the identity and the personal information of the immigrants involved.</p>",
		iran: "<p class=\"inner\">This is <span class=\"percent\">13.7%</span> of the population of Iranian born immigrants working in the U.S.</p>",
		syria: "<p class=\"inner\">This is <span class=\"percent\">27.2%</span> of the population of Syrian born immigrants working in the U.S.</p>",
		yemen: "<p class=\"inner\">This is <span class=\"percent\">54.6%</span> of the population of Yemeni born immigrants working in the U.S.</p>",
		sudan: "<p class=\"inner\">This is <span class=\"percent\">12.5%</span> of the population of Sudanese born immigrants working in the U.S.</p>",
		somalia: "<p class=\"inner\">This is <span class=\"percent\">8.4%</span> of the population of Somali born immigrants working in the U.S.</p>"
	},

	transportation: {
		libya: "<p class =\"inner\">The number of people who have immigrated to the U.S. from Libya in the past years has been too small. The American Community Survey will not publish their professional or demographic data to protect the identity and the personal information of the immigrants involved.</p>",
		iran: "<p class=\"inner\">This is <span class=\"percent\">3.8%</span> of the population of Iranian born immigrants working in the U.S.</p>",
		syria: "<p class=\"inner\">This is <span class=\"percent\">4.2%</span> of the population of Syrian born immigrants working in the U.S.</p>",
		yemen: "<p class=\"inner\">This is <span class=\"percent\">3.1%</span> of the population of Yemeni born immigrants working in the U.S.</p>",
		sudan: "<p class=\"inner\">This is <span class=\"percent\">15.5%</span> of the population of Sudanese born immigrants working in the U.S.</p>",
		somalia: "<p class=\"inner\">This is <span class=\"percent\">19.7%</span> of the population of Somali born immigrants working in the U.S.</p>"
	},

	information: {
		libya: "<p class =\"inner\">The number of people who have immigrated to the U.S. from Libya in the past years has been too small. The American Community Survey will not publish their professional or demographic data to protect the identity and the personal information of the immigrants involved.</p>",
		iran: "<p class=\"inner\">This is <span class=\"percent\">2%</span> of the population of Iranian born immigrants working in the U.S.</p>",
		syria: "<p class=\"inner\">This is <span class=\"percent\">2.1%</span> of the population of Syrian born immigrants working in the U.S.</p>",
		yemen: "<p class=\"inner\">This is <span class=\"percent\">0.7%</span> of the population of Yemeni born immigrants working in the U.S.</p>",
		sudan: "<p class=\"inner\">This is <span class=\"percent\">2.9%</span> of the population of Sudanese born immigrants working in the U.S.</p>",
		somalia: "<p class=\"inner\">This is <span class=\"percent\">0.9%</span> of the population of Somali born immigrants working in the U.S.</p>"
	},

	finance: {
		libya: "<p class =\"inner\">The number of people who have immigrated to the U.S. from Libya in the past years has been too small. The American Community Survey will not publish their professional or demographic data to protect the identity and the personal information of the immigrants involved.</p>",
		iran: "<p class=\"inner\">This is <span class=\"percent\">7.1%</span> of the population of Iranian born immigrants working in the U.S.</p>",
		syria: "<p class=\"inner\">This is <span class=\"percent\">3.8%</span> of the population of Syrian born immigrants working in the U.S.</p>",
		yemen: "<p class=\"inner\">This is <span class=\"percent\">2%</span> of the population of Yemeni born immigrants working in the U.S.</p>",
		sudan: "<p class=\"inner\">This is <span class=\"percent\">2.6%</span> of the population of Sudanese born immigrants working in the U.S.</p>",
		somalia: "<p class=\"inner\">This is <span class=\"percent\">5%</span> of the population of Somali born immigrants working in the U.S.</p>"
	},

	administrative: {
		libya: "<p class =\"inner\">The number of people who have immigrated to the U.S. from Libya in the past years has been too small. The American Community Survey will not publish their professional or demographic data to protect the identity and the personal information of the immigrants involved.</p>",
		iran: "<p class=\"inner\">This is <span class=\"percent\">12.4%</span> of the population of Iranian born immigrants working in the U.S.</p>",
		syria: "<p class=\"inner\">This is <span class=\"percent\">6.9%</span> of the population of Syrian born immigrants working in the U.S.</p>",
		yemen: "<p class=\"inner\">This is <span class=\"percent\">6.4%</span> of the population of Yemeni born immigrants working in the U.S.</p>",
		sudan: "<p class=\"inner\">This is <span class=\"percent\">6.5%</span> of the population of Sudanese born immigrants working in the U.S.</p>",
		somalia: "<p class=\"inner\">This is <span class=\"percent\">8.2%</span> of the population of Somali born immigrants working in the U.S.</p>"
	},

	education: {
		libya: "<p class =\"inner\">The number of people who have immigrated to the U.S. from Libya in the past years has been too small. The American Community Survey will not publish their professional or demographic data to protect the identity and the personal information of the immigrants involved.</p>",
		iran: "<p class=\"inner\">This is <span class=\"percent\">28.2%</span> of the population of Iranian born immigrants working in the U.S.</p>",
		syria: "<p class=\"inner\">This is <span class=\"percent\">26.2%</span> of the population of Syrian born immigrants working in the U.S.</p>",
		yemen: "<p class=\"inner\">This is <span class=\"percent\">7.7%</span> of the population of Yemeni born immigrants working in the U.S.</p>",
		sudan: "<p class=\"inner\">This is <span class=\"percent\">23%</span> of the population of Sudanese born immigrants working in the U.S.</p>",
		somalia: "<p class=\"inner\">This is <span class=\"percent\">27.6%</span> of the population of Somali born immigrants working in the U.S.</p>"
	},

	arts: {
		libya: "<p class =\"inner\">The number of people who have immigrated to the U.S. from Libya in the past years has been too small. The American Community Survey will not publish their professional or demographic data to protect the identity and the personal information of the immigrants involved.</p>",
		iran: "<p class=\"inner\">This is <span class=\"percent\">6.7%</span> of the population of Iranian born immigrants working in the U.S.</p>",
		syria: "<p class=\"inner\">This is <span class=\"percent\">6.2%</span> of the population of Syrian born immigrants working in the U.S.</p>",
		yemen: "<p class=\"inner\">This is <span class=\"percent\">8.5%</span> of the population of Yemeni born immigrants working in the U.S.</p>",
		sudan: "<p class=\"inner\">This is <span class=\"percent\">8.5%</span> of the population of Sudanese born immigrants working in the U.S.</p>",
		somalia: "<p class=\"inner\">This is <span class=\"percent\">6.7%</span> of the population of Somali born immigrants working in the U.S.</p>"
	},

	services: {
		libya: "<p class =\"inner\">The number of people who have immigrated to the U.S. from Libya in the past years has been too small. The American Community Survey will not publish their professional or demographic data to protect the identity and the personal information of the immigrants involved.</p>",
		iran: "<p class=\"inner\">This is <span class=\"percent\">5.4%</span> of the population of Iranian born immigrants working in the U.S.</p>",
		syria: "<p class=\"inner\">This is <span class=\"percent\">5%</span> of the population of Syrian born immigrants working in the U.S.</p>",
		yemen: "<p class=\"inner\">This is <span class=\"percent\">2.1%</span> of the population of Yemeni born immigrants working in the U.S.</p>",
		sudan: "<p class=\"inner\">This is <span class=\"percent\">2.9%</span> of the population of Sudanese born immigrants working in the U.S.</p>",
		somalia: "<p class=\"inner\">This is <span class=\"percent\">3.6%</span> of the population of Somali born immigrants working in the U.S.</p>"
	},

	public: {
		libya: "<p class =\"inner\">The number of people who have immigrated to the U.S. from Libya in the past years has been too small. The American Community Survey will not publish their professional or demographic data to protect the identity and the personal information of the immigrants involved.</p>",
		iran: "<p class=\"inner\">This is <span class=\"percent\">4%</span> of the population of Iranian born immigrants working in the U.S.</p>",
		syria: "<p class=\"inner\">This is <span class=\"percent\">2%</span> of the population of Syrian born immigrants working in the U.S.</p>",
		yemen: "<p class=\"inner\">This is <span class=\"percent\">1.3%</span> of the population of Yemeni born immigrants working in the U.S.</p>",
		sudan: "<p class=\"inner\">This is <span class=\"percent\">3.2%</span> of the population of Sudanese born immigrants working in the U.S.</p>",
		somalia: "<p class=\"inner\">This is <span class=\"percent\">2%</span> of the population of Somali born immigrants working in the U.S.</p>"
	},
};

$(document).ready(function () { //occurs when DOM is loaded

	$("#menu").on("change", function () { //when an industry on the menu bar is chosen or changed
		var select = $(this);
		if (select.val() === '0') {
			$(".country").removeClass("active"); //"select" option is given value 0 so no content shows
		} else {
			$(".country").each(function () { //for other industries, getting the content from objects above
				var country = $(this); //loops through each country to get it's amount and content
				var name = country.attr("id"); //the country you're on with the attribute "id" from the html
				var content = country.find(".content"); //find that country's content div class
				var amount = country.find(".amount"); //find that country's amount div
				var text = responses[select.val()][name]; //store the content above as values into the country
				var number = amounts[select.val()][name];
				country.addClass("active"); //adds the active class to show the countries when u select frm menu
				country.attr("data-amount", number.replace(",", "").replace("N/A", "-1")); //for sorting purpose
				country.find(".content"); //finds the content for each country
				// country.removeClass("open");
				amount.html(number + " people"); //amount will be displayed in html as "123 people"
				content.html(text); //content from above will be displayed as text
			});
			//This .sort code was used from StackOverflow http://bit.ly/2qXqzHU
			var divList = $(".country"); //stores each country into a list
			divList.sort(function (a, b) { //sorts those countries as a and b values, 2 at a time
				return parseFloat($(b).attr("data-amount")) - parseFloat($(a).attr("data-amount"))
			}); //when you subtract first value by second, sort by the biggest number, amount stored as data
			$("div.industry").html(divList); //display the sorting in the html
		}
	});


	// $("body").on("click", ".country", function (e) {
	// 	e.preventDefault();
	//
	// 	var country = $(this);
	//
	// 	if (country.hasClass("open")) {
	// 		country.find(".content").slideUp();
	// 		country.removeClass("open");
	// 	} else {
	// 		country.find(".content").slideDown();
	// 		country.addClass('open');
	// 	}
	//
	// });

});
