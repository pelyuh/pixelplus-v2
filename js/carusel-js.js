var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
}




$('.header-feedback-click').on('click', function () {
    $('body').find('#popup-form').css({'display':'block'}),
        $('body').addClass('popup_bg')
});

$('.popup-close').on('click', function () {
    $('body').removeClass('popup_bg'),
    $('body').find('#popup-form').css({'display':'none'})
});