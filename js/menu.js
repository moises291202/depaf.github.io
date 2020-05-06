$(document).ready(function(){
    /* Funcionalidad del Menu */
    $(window).scroll(function() {
      	if ($(this).scrollTop() > 0) {
        	$("header").addClass("header2");
      	} else {
        	$("header").removeClass("header2");
      	}

      	/* Parallax */
      	var barra = $(window).scrollTop();
      	var posicion = barra * 0.5;

      	$(".contenedor-banner-principal").css({
        	"background-position": "0 -" + posicion + "px"
      	});
    });

    /* Funcionalidad Idioma */
    $("#enlace-idioma").click(function(e){
  		e.preventDefault();
  		$(".contenedor-idioma").toggleClass("active");
  		$(".flecha-enlace-idioma").toggleClass("active");
    });

    // Funcionalidad del item Contacto 
    $('#btn-contacto').on('click', function (e) {
        e.preventDefault();
        var enlace = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(enlace).offset().top - 80
        }, 1000);
    });

    $('#btn-contacto-footer').on('click', function (e) {
        e.preventDefault();
        var enlace = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(enlace).offset().top - 80
        }, 1000);
    });

    // Menu Responsive
    $("#btn-menu-responsive").click(function(e){
        e.preventDefault();
        $("#menu").toggleClass("active");
        $("#btn-menu-responsive").toggleClass("active");
    });

    $("#btn-cerrar-menu-responsive").click(function(e){
        e.preventDefault();
    });

   $("#menu a").click(function(){
        $("#btn-menu-responsive").toggleClass("active");
        $("#menu").toggleClass("active");
   }); 
});