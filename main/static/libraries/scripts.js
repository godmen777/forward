$(document).ready(function() {
    $(".fancybox").fancybox();

    $("#popup").fancybox({
        'padding'           : 0,
        'width'             : '1200px',
        'height'            : '700px',
        'autoScale'     	: false,
        'transitionIn'		: 'none',
        'transitionOut'		: 'none',
        'type'				: 'iframe'
    });

    $('a#hide_show').click(function (e) {
        $('.hide_form').toggleClass('active');
        e.preventDefault();
    });

//    делаем активный пункт меню
    $('ul.my_nav a').each(function () {
        var location = window.location.href;
        var link = this.href;
        if(location == link) {
            $(this).addClass('active');
        }
    });

//    отложенная загрузка картинок
    $("img.lazy").lazyload({
        threshold : 200
    });
//    скролл
//    $("a.scroll").scroll(function() {
//            $('a.scroll').toggleClass('visible');
//        }
//    );
//    $( "a#scroll" ).scroll(function() {
//      $( "#log" ).append( "<div>Handler for .scroll() called.</div>" );
//    });
//    $('#portfolio').scroll(function(){
//      alert('Элемент portfolio был прокручен... скроллирован... ну как там это называется то?!');
//    });

});