$(document).ready(function(){
	for(var i=0; i<9; i++) {
		$("#container").append("<div class='grid'></div>");
	};

	$(".grid").height("200px");
	$(".grid").width("200px");

	$(".grid").mouseenter(function(){
		$(this).css("background-color", "#000");
	});
});