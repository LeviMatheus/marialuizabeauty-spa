$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})

var wind = $(window);
// Navbar scrolling background
wind.on("scroll", function () {
    var bodyScroll = wind.scrollTop(),
        navbar = $(".navbar");
    if (bodyScroll > 100) {
        navbar.addClass("nav-dark");
    } else {
        navbar.removeClass("nav-dark");
    }
});

function mostrarIndisponibilidade() {
    const notAvailableMessage = document.getElementById("not-available-message");
    const contactForm = document.getElementById("form-contato");

    notAvailableMessage.style.display = "block";
    contactForm.style.display = "none";
}