window.addEventListener("load", function () {

    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },
    });

    particlesJS.load('particlesJs', '../../../particle.json', function () {
        console.log('callback - particles.js config loaded');
    });

})