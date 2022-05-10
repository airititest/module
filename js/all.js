$(document).ready(function () {
    var test01 = window.screen.availHeight;
    var test02 = document.body.clientHeight;
    var test03 = $('body').height();
    console.log(test01 + '&' + test02 + '&' + test03);
});