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

var responses = {
	agriculture: {
		libya: "Lorem ipsum",
		iran: "dolor sit",
		syria: "amet consectitur",
		yemen: "Fam quinoa succulents",
		sudan: "cronut pabst vexillologist butcher",
		somalia: "keytar lo-fi chillwave tofu synth"
	},

	construction: {
		libya: "the song goes",
		iran: "hey now",
		syria: "you're an all star",
		yemen: "get your game on",
		sudan: "go play",
		somalia: "by Smash Mouth"
	},

	manufacturing: {
		libya: "Lorem ipsum",
		iran: "dolor sit",
		syria: "amet consectitur",
		yemen: "Fam quinoa succulents",
		sudan: "cronut pabst vexillologist butcher",
		somalia: "keytar lo-fi chillwave tofu synth"
	},

	wholesaletrade: {
		libya: "the song goes",
		iran: "hey now",
		syria: "you're an all star",
		yemen: "get your game on",
		sudan: "go play",
		somalia: "by Smash Mouth"
	},

	retailtrade: {
		libya: "the song goes",
		iran: "hey now",
		syria: "you're an all star",
		yemen: "get your game on",
		sudan: "go play",
		somalia: "by Smash Mouth"
	},

	transportation: {
		libya: "Lorem ipsum",
		iran: "dolor sit",
		syria: "amet consectitur",
		yemen: "Fam quinoa succulents",
		sudan: "cronut pabst vexillologist butcher",
		somalia: "keytar lo-fi chillwave tofu synth"
	},

	information: {
		libya: "the song goes",
		iran: "hey now",
		syria: "you're an all star",
		yemen: "get your game on",
		sudan: "go play",
		somalia: "by Smash Mouth"
	},

	finance: {
		libya: "the song goes",
		iran: "hey now",
		syria: "you're an all star",
		yemen: "get your game on",
		sudan: "go play",
		somalia: "by Smash Mouth"
	},

	administrative: {
		libya: "Lorem ipsum",
		iran: "dolor sit",
		syria: "amet consectitur",
		yemen: "Fam quinoa succulents",
		sudan: "cronut pabst vexillologist butcher",
		somalia: "keytar lo-fi chillwave tofu synth"
	},

	education: {
		libya: "the song goes",
		iran: "hey now",
		syria: "you're an all star",
		yemen: "get your game on",
		sudan: "go play",
		somalia: "by Smash Mouth"
	},

	arts: {
		libya: "Lorem ipsum",
		iran: "dolor sit",
		syria: "amet consectitur",
		yemen: "Fam quinoa succulents",
		sudan: "cronut pabst vexillologist butcher",
		somalia: "keytar lo-fi chillwave tofu synth"
	},

	services: {
		libya: "the song goes",
		iran: "hey now",
		syria: "you're an all star",
		yemen: "get your game on",
		sudan: "go play",
		somalia: "by Smash Mouth"
	},

	public: {
		libya: "the song goes",
		iran: "hey now",
		syria: "you're an all star",
		yemen: "get your game on",
		sudan: "go play",
		somalia: "by Smash Mouth"
	},
};

$(document).ready(function () {

	$("#menu").on("change", function () {
		var select = $(this);
		if (select.val() === '0') {
			$(".country").removeClass("active");
		} else {
			$(".country").each(function () {
				var country = $(this);
				var name = country.attr("id");
				var content = country.find(".content");
				var amount = country.find(".amount");
				var text = responses[select.val()][name];
				var number = amounts[select.val()][name];
				country.addClass("active");
				country.attr("data-amount", number.replace(",", "").replace("N/A", "-1"));
				country.find(".content").slideUp(0);
				country.removeClass("open");
				amount.html(number + " people");
				content.html(text);
			});
			//This .sort code was used from StackOverflow http://bit.ly/2qXqzHU
			var divList = $(".country");
			divList.sort(function (a, b) {
				return parseFloat($(b).attr("data-amount")) - parseFloat($(a).attr("data-amount"))
			});
			$("div.industry").html(divList);
		}
	});


	$("body").on("click", ".country", function (e) {
		e.preventDefault();

		var country = $(this);

		if (country.hasClass("open")) {
			country.find(".content").slideUp();
			country.removeClass("open");
		} else {
			country.find(".content").slideDown();
			country.addClass('open');
		}

	});

});
