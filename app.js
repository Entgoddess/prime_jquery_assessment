var i = 0; 

$(document).ready(function(){
	
	$('#container').on('click', '#genButton', function(){
		i++;

		buttonGen();
		
		
	});

	deleteEntry();

});

function buttonGen () {
	$("#container").append("<div class='genbuttons'></div>");
	var $el = $("#container").children().last();

	$el.append("<button class='deletebtn'>Delete</button>");
	$el.append("<button class='alert alert-warning'>Change</button>");
	$el.append(i);
}

function deleteEntry () {

	$('#container').on('click', '.deletebtn', function(){
		$(this).closest('.genbuttons').remove();
	});

}

		// ('#container').toggle(
  //   function(){
  //       $(this).css('background-color', 'blue');
  //   },
  //   function(){
  //       $(this).css('background-color', 'red');
  //   });​

