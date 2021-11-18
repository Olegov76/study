document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.tabs-btn').forEach(function(tabBtn) {
        tabBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.content-none').forEach(function(tabsContent) {
                tabsContent.classList.remove('content-activ')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('content-activ')
        })
    })
    $(document).ready(function() {
        $('#accordeon .acc-head').on('click', f_acc);
    });

    function f_acc() {
        $('#accordeon .acc-body').not($(this).next()).slideUp(1000);
        $(this).next().slideToggle(200);
    }
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    })
});
$('.burger').click(function() {
    $('.menu,.burger').toggleClass('active');
});
$('.menu a').click(function() {

    $('.menu,.burger').removeClass('active');
    $('body').toggleClass('lock');

})
