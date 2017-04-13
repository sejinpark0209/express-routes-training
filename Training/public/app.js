$(document).on("ready", function(){
	$('#guess-number-form').on('submit', function(event) {
	event.preventDefault();
	$.ajax({
		method: "GET",
		url: "/pick-a-number",
		dataType: "Json",
		success: onSuccess,
		
	})

});

	function onSuccess(response) {
		console.log(response);
		$()
	}