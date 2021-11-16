$(window).scroll(function() {
    var top_of_element = $(".animatePoint").offset().top;
    var bottom_of_element = $(".animatePoint").offset().top + $(".animatePoint").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
        alert("Hello! I am an alert box!!");
    } else {
        $(".animatePoint").removeClass("animate__animated");
		$(".animatePoint").removeClass("aanimate__fadeInUp");
    }
});