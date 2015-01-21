$(document).ready(function() {
	$('.member_small_picture').click(function() {
		$('.member_small_picture.active').removeClass('active');
		$(this).addClass('active');
  		var name = $(this).find('.name').text();
  		$('.main_header_name').text(name);
  		var officer_title = $(this).find('.officer_title').text();
  		$('.aif_title').text(officer_title);
  		var job = $(this).find('.job').text();
  		$('.job_title').text(job);
  		var description = $(this).find('.description').text();
  		$('.bio').text(description);
  		var image = $(this).find('.image').text();
  		$('.big_image').attr('src',image);
	});
});