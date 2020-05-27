$(document).ready(function (){
    // when button clicked it moves back to the top of the page
    $('#up').on('click', function (){

        $('html, body').animate({
 
            scrollTop: 0
        }, 2000);
 
    }); 
    $('.nav a[href*="#"]').on('click', function () {
        $('html, body').animate( {
            scrollTop: $($(this)).attr('href').offset().top - 100
        }, 2000);
    } );
    // $('nav a[href*="#"]').on('click', function (){

    //     $('html, body').animate({
 
    //         scrollTop: $($(this).attr('href')).offset().top - 100
 
 
 
    //     }, 2000);
 
    // }); 
 
})