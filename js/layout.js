$(window).resize(function () {
	windowDependent();
});

$(window).load(function () {
	windowDependent();
});

$(document).ready(function () {
	$(".glyphicon").click(function (e) {
		console.log("hi")
		var picHeight = $("div.picture").height();
		var 	navHeight = $(".navbar").height();
		$("html,body").animate({
			scrollTop: picHeight - navHeight
		}, 1000, 'easeInOutCubic');
	});
});

var windowDependent = function () {
	var pictureDiv = $("div.picture");
	var pictureImg = $("img.picture");
	var windowHeight = $(window).height();

	if ($(window).width() < 300) {
		// fancy responsive stuff
	}

	// resize
	if(pictureImg.height() < windowHeight)
		pictureDiv.height(pictureImg.height());
	else pictureDiv.height(windowHeight);

	// center & move
	var toCenter = $(".text");
	var left = (pictureDiv.width() - toCenter.width())/2;
	var top = (pictureDiv.height() - toCenter.height())/2.3;
	toCenter.css("left", left + "px");
	toCenter.css("top", top + "px");
	$(".wrapper").css("top", (pictureDiv.height() - 50) + "px");
}

$(window).scroll(function () {
	var changeHeight = $("div.picture").height() - $(".navbar").height();
	if ( $(window).scrollTop() < changeHeight)
		$(".navbar").css("border-bottom-width", 0);
	else
		$(".navbar").css("border-bottom-width", "1px");
});