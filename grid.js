$(document).ready(function(){
	var $width = 3;

	var addGrid = function(width) {
		for(var i=0; i<$width*$width; i++) {
			$("#container").append("<div class='grid'></div>");
		};
	};

	var colorChange = function(color) {
		$(".grid").mouseenter(function(){
			$(this).css("background-color", color);
		});
	};

	addGrid();

	$(".grid").mouseenter(function(){
		$(this).css("background-color", "#000");
	});


	$("button[name='clear']").click(function(){
		$("#container").empty();
		$width = prompt("Please put width of the grid:");

		addGrid();

		$(".grid").height(600/$width + "px");
		$(".grid").width(600/$width + "px");

		colorChange("#000");
	});

	$("button[name='color']").click(function(){
		colorChange($(this).val());
	});
});