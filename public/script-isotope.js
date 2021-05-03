$(document).ready(function () {
    let $btns = $('.portfolio-gallery .button-group button');
    $btns.click(function (e) {
        $('.portfolio-gallery .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.portfolio-gallery .grid').isotope({
            filter: selector
        });
        return false;
    })   
});