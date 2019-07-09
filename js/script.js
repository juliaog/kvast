var mass = [
    'Крафтовый квас <br> всему голова',
    'Крафтовый квас <br> всему голова,а некоторым и тело!',
    'Крафтовый квас <br> всему голова, а хлеб тоже'
];

var texts = document.querySelectorAll('.slide-icon');
var oneText = document.querySelector('.change');

console.log(this);

function onSlideIconClick() {

}

for (var i = 0; i < texts.length; i++) {

}


var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
    V = 0.3;  // скорость
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { //обработчик клика
        e.preventDefault(); //отменяем стандартное поведение
        var w = window.pageYOffset,  // производим прокрутку
            hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
        t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
            start = null;
        requestAnimationFrame(step);
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash  // URL с хэшем
            }
        }
    }, false);
}
