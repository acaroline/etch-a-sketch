$(document).ready(function(){
	var $width = 3;

	for(var i=0; i<$width*$width; i++) {
		$("#container").append("<div class='grid'></div>");
	};

	$(".grid").mouseenter(function(){
		$(this).css("background-color", "#000");
	});


	$("button[name='clear']").click(function(){
		$("#container").empty();
		$width = prompt("Please put width of the grid:")
		for(var i=0; i<$width*$width; i++) {
			$("#container").append("<div class='grid'></div>");
		};
		$(".grid").height(600/$width + "px");
		$(".grid").width(600/$width + "px");

		$(".grid").mouseenter(function(){
			$(this).css("background-color", "#000");
		});
	});
});