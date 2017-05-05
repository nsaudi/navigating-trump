var responses = {
	construction: {
		libya: "Lorem ipsum",
		iran: "dolor sit",
		syria: "amet consectitur",
		yemen: "Fam quinoa succulents",
		sudan: "cronut pabst vexillologist butcher",
		somalia: "keytar lo-fi chillwave tofu synth"
	},

	manufacturing: {
		libya: "the song goes",
		iran: "hey now",
		syria: "you're an all star",
		yemen: "get your game on",
		sudan: "go play",
		somalia: "by Smash Mouth"
	}
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
				var text = responses[select.val()][name];
				country.addClass("active");
				content.html(text);
			});
		}
	});

	$(".country").on("click", function (e) {
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
