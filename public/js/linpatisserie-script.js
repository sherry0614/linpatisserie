// --------------------------------------------slides
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// --------------------------------------------slides end

//---------------------------------------------openNav forphone 
document.getElementById('btn-nav-toggle').addEventListener('click',openNav)
function openNav(){
    // console.log('點按鈕打開主導覽')
    if( document.getElementById('primary-navigation').classList.contains('active') == true ){
        document.getElementById('primary-navigation').classList.remove('active')
        document.getElementById('btn-nav-toggle').textContent = 'menu'
    }else{
        document.getElementById('primary-navigation').classList.add('active')
        document.getElementById('btn-nav-toggle').textContent = 'X'

    }// openNav if end

} //openNav end 

// --------------------------------------------tab
$('.tab-link>a').on('click',function(){
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
    console.log($(this).attr('href'))
    $( $(this).attr('href') ).addClass('active')
    $( $(this).attr('href') ).siblings().removeClass('active')
})//tab-link>a end
// --------------------------------------------page-top
// 定義捲軸高變數
let offsetTop
let pageTop = $('.page-top-set').offset().top 
$(window).scroll(function(){
    offsetTop = $(window).scrollTop()
    //console.log( '捲軸高', offsetTop )
    // console.log('wrap',pageTop)
//    if( offsetTop >=  pageTop){
//         console.log('test')
//    }
    // 捲軸高度>=900，會出現page-top的按鈕
    if( offsetTop >= 900){
        $('.page-top').addClass('active')
    }else{
        $('.page-top').removeClass('active')
    }
})//--------------------------------scroll end

// 點按page-top回到最上方
$('.page-top').on('click', function(){
    $('html, body').animate({ scrollTop: 0 })
})//--------------------------------------------.page-top end