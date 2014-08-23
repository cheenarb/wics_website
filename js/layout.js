$(window).resize(function () {
	windowDependent();
});

$(window).load(function () {
	windowDependent();
});

var windowDependent = function () {
	var pictureDiv = $("div.picture");
	var pictureImg = $("img.picture");

	if ($(window).width() < 300) {
		// fancy responsive stuff
	}

	// resize
	if(pictureImg.height() < 650)
		pictureDiv.height(pictureImg.height());
	else pictureDiv.height(650);

	// center
	var toCenter = $(".text");
	var left = (pictureDiv.width() - toCenter.width())/2;
	var top = (pictureDiv.height() - toCenter.height())/2;
	toCenter.css("left", left + "px");
	toCenter.css("top", top + "px")
}