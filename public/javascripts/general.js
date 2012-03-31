Cufon.replace('h1',{
textShadow: '#fff 1px 1px'
});
Cufon.replace('h2',{
textShadow: '#fff 1px 1px'
});
Cufon.replace('h3',{
textShadow: '#00728a 1px 1px'
});
 $(document).ready(function(){	
							 $('#submitform').ajaxForm({
			target: '#error',
			success: function() {
			$('#error').animate({ opacity: 1 }, 400);
			}
		});
$("#contact #form").css({display: "none"}); // Opera Fix
$("#contact span").click(function(){
		$('#contact span').stop().css({height: "27px", background: "none"});
		$('#contact').stop().animate({
									 width: "220px"
									 }, 300,function() {
		$('#form').stop().css({visibility: "visible",display: "none"}).slideDown(300);
		});
		});
$("#close").click(function(){
   $('#form').slideUp(300);
  $('#contact').delay(300).animate({
    width: "100px",
  }, 300, function() {
    $('#contact span').css({height: "38px", background: "url(images/3dright.jpg) bottom right no-repeat"});
  });
		});

});


