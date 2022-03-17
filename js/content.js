$(document).ready(function () {
    ContentSize();
    $(window).resize(function () { 
        ContentSize();
    });
    //function-setting
    function ContentSize() {
        var ContentTitleHeight = $('.order-tips-info-area').eq(1).children('.order-tips-info-area-content').children('p').innerHeight();
        var ContentHeight = $('.order-tips-info-area').eq(1).children('.order-tips-info-area-content').children('span').innerHeight();
        $('.order-tips-info-area').children('.order-tips-info-area-content').height(ContentTitleHeight + ContentHeight);
    }
});