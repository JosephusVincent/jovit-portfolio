$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 480) { 
            $('#myBtn').fadeIn(); 
        } else { 
            $('#myBtn').fadeOut(); 
        } 
    }); 
    $('#myBtn').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 1000); 
        return false; 
    }); 
});




