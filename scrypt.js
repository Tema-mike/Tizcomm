// ----- menu items ----- //
$('.menu').click(function () {
    $('.menu-items').css('display', 'block')
})
$('.close').click(function () {
    $('.menu-items').css('display', 'none')
})

// ----- hover information ----- //
// building
$('.B').hover(function () {
    $('.b').css('display', 'flex')
}, function () {
    $('.b').css('display', 'none')
})
// mining
$('.M').hover(function () {
    $('.m').css('display', 'flex')
}, function () {
    $('.m').css('display', 'none')
})
// repair
$('.R').hover(function () {
    $('.r').css('display', 'flex')
}, function () {
    $('.r').css('display', 'none')
})
// hover info
$('.main-info').hover(function () {
    $(this).css('display', 'flex')
}, function () {
    $(this).css('display', 'none')
})

// ----- learn more (hover img) ----- //
$('.info-img').hover(function () {
    $('.info-img-btn-cont').css('display', 'block')
    $('.info-img-btn').css('display', 'block')
}, function () {
    $('.info-img-btn-cont').css('display', 'none')
    $('.info-img-btn').css('display', 'none')
})


/* ----- Slider -----*/

let slideIndex = 1;

showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания: */
function showSlides(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.getElementsByClassName("container-article")
    let cards = document.getElementsByClassName("article-card")
    let dots = document.getElementsByClassName("dots")
    let imgs = document.getElementsByClassName("article-img")

    /* Проверяем количество слайдов: */
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    /* Проходим по каждому слайду в цикле for: */

    for (let slide of slides) {
        $(slide).removeClass("container-active")
    }
    for (let card of cards) {
        $(cards).removeClass("article-act")
    }
    for (let dot of dots) {
        $(dot).removeClass("active-dot")
    }
    for (let img of imgs) {
        $(img).removeClass("act-img")
    }
    /* Делаем элемент блочным: */
    $(slides[slideIndex - 1]).addClass("container-active")
    $(cards[slideIndex - 1]).addClass("article-act")
    $(dots[slideIndex - 1]).addClass("active-dot")
    $(imgs[slideIndex - 1]).addClass("act-img")

    slideIndex = n

}