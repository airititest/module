$(document).ready(function () {
    var ScreenHeight = document.body.clientHeight;
    var ScreenWidth = document.body.clientWidth;
    function ScreenAlert(ImgName, Content01, Content02) {
        if (ScreenHeight < 500 && ScreenWidth < 1000) {
            $('body').css('overflow-y', 'hidden');
            $('body').append("<section class='screen-alert'></section>");
            $('.screen-alert').append("<div class='screen-alert-content'></div>");
            $('.screen-alert-content').append("<img src= images/" + ImgName + " alt='phone-img'></img>");
            $('.screen-alert-content').append("<p><span>" + Content01 + "</span><span>" + Content02 + "</span></p>");
        }
    }
    ScreenAlert('phone-img.svg', '為了最佳的使用體驗', '請旋轉您的螢幕為直立瀏覽');
    
    $(window).resize(function () {
        var ScreenHeight = document.body.clientHeight;
        var ScreenWidth = document.body.clientWidth;
        function ScreenAlert(ImgName, Content01, Content02) {
            if (ScreenHeight < 500 && ScreenWidth < 1000) {
                $('body').css('overflow-y', 'hidden');
                $('body').append("<section class='screen-alert'></section>");
                $('.screen-alert').append("<div class='screen-alert-content'></div>");
                $('.screen-alert-content').append("<img src= images/" + ImgName + " alt='phone-img'></img>");
                $('.screen-alert-content').append("<p><span>" + Content01 + "</span><span>" + Content02 + "</span></p>");
            }else{
                $('.screen-alert').remove();
            }
        }
        ScreenAlert('phone-img.svg', '為了最佳的使用體驗', '請旋轉您的螢幕為直立瀏覽');
    });
});