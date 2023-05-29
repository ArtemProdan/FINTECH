$(document).ready(function(openMenu) {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu,.header__list').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function(closeMenu) {
    $('.close-button').click(function(event) {
        $('.header__burger,.header__menu,.header__list').removeClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function(dropdown) {
    if (window.innerWidth <= 780) {
    $('.dropdown').click(function(event) {
        $('.dropdown__list').toggleClass('active')})
    } else {
        $('.dropdown').mouseover(function(event) {
            $('.dropdown__list').addClass('active')
        });
        $('.dropdown').mouseout(function(event) {
            $('.dropdown__list').removeClass('active')
        });
    }
});

$(document).ready(function(openPopup) {
    $('.left_button').click(function(event) {
        $('.popup').css({"visibility": "visible", "opacity": "1", "scale": "1"});
        // $('.popup__body').css({"transform": "scaleY(1)"});
        $('body').toggleClass('lock2');
        // $('.body').css('width' , '2000');
        $('.main').css('z-index' , '0');
    });
});

$(document).ready(function(closePopup) {
    $('.popup__closebutton').click(function(event) {
        $('.popup').css({"visibility": "hidden", "opacity": "0", "scale": "0"});
        // $('.popup__body').css({"transform": "scaleY(2)"});
        $('body').removeClass('lock2');
    });
});


function widthScroll(){
    var div = document.createElement('div');
    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    var scrollWidth = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
    return scrollWidth;
}

console.log(widthScroll());
// alert(widthScroll);
