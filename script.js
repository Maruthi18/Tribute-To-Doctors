$(document).ready(function(){
    $('#menu').click(function()
    {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
    $(window).on('load scroll',function()
    {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    });
});

function showText(id, delay) {
            var elem = document.getElementById(id);
            setTimeout(function () { elem.style.visibility = 'visible'; }, delay * 1000)
}
window.onload = function () {
            showText('1', 3);
            showText('2', 5);
            showText('3', 8);
            showText('4', 10)
        }
