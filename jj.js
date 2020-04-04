$(document).ready(function(){
	$(".cr").animate({
	
        position:'relative',
		left:'450px'
	},3000);

	if (console.log(document.length)<768) {
		$(".cr").hide();

	}
	
});
