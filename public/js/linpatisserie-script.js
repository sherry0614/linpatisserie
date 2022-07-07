new WOW().init();


//---------------------------------------------openNav forphone 
document.getElementById('btn-nav-toggle').addEventListener('click',openNav)
function openNav(){
    // console.log('點按鈕打開主導覽')
    if( document.getElementById('primary-navigation').classList.contains('active') == true ){
        document.getElementById('primary-navigation').classList.remove('active')
        // document.getElementById('btn-nav-toggle').textContent = 'menu'
    }else{
        document.getElementById('primary-navigation').classList.add('active')
        // document.getElementById('btn-nav-toggle').textContent = 'X'
        
    }// openNav if end
    
} //openNav end 

$('#phoneicom-member-swith').on('click', function(){
    $('#phoneicom-member').fadeToggle()})
$('#phoneicom-search-swith').on('click', function(){
    $('#phoneicom-search').fadeToggle()})

// ----------------------------------------------openNav forphone  end
$('#product-nav-swith').on('click', function(){
    $('#product-nav-snb').fadeToggle()})

$('#icom-member-swith').on('click', function(){
    $('#member-list').fadeToggle()})

//----------------------------------------------icon-heart-start 

$('#heart-hot-a').on('click', function(){
    $('#heart-hot-a-act').fadeIn()})
$('#heart-hot-a-act').on('click', function(){
    $('#heart-hot-a-act').fadeOut();})

$('#heart-hot-b').on('click', function(){
    $('#heart-hot-b-act').fadeIn()})
$('#heart-hot-b-act').on('click', function(){
    $('#heart-hot-b-act').fadeOut();})

$('#heart-hot-c').on('click', function(){
    $('#heart-hot-c-act').fadeIn()})
$('#heart-hot-c-act').on('click', function(){
    $('#heart-hot-c-act').fadeOut();})

$('#heart-hot-d').on('click', function(){
    $('#heart-hot-d-act').fadeIn()})
$('#heart-hot-d-act').on('click', function(){
    $('#heart-hot-d-act').fadeOut();})

    $('#heart-new-a').on('click', function(){
        $('#heart-new-a-act').fadeIn()})
    $('#heart-new-a-act').on('click', function(){
        $('#heart-new-a-act').fadeOut();})
    
    $('#heart-new-b').on('click', function(){
        $('#heart-new-b-act').fadeIn()})
    $('#heart-new-b-act').on('click', function(){
        $('#heart-new-b-act').fadeOut();})
    
    $('#heart-new-c').on('click', function(){
        $('#heart-new-c-act').fadeIn()})
    $('#heart-new-c-act').on('click', function(){
        $('#heart-new-c-act').fadeOut();})
    
    $('#heart-new-d').on('click', function(){
        $('#heart-new-d-act').fadeIn()})
    $('#heart-new-d-act').on('click', function(){
        $('#heart-new-d-act').fadeOut();})


        $('#heart-limit-a').on('click', function(){
            $('#heart-limit-a-act').fadeIn()})
        $('#heart-limit-a-act').on('click', function(){
            $('#heart-limit-a-act').fadeOut();})
        
        $('#heart-limit-b').on('click', function(){
            $('#heart-limit-b-act').fadeIn()})
        $('#heart-limit-b-act').on('click', function(){
            $('#heart-limit-b-act').fadeOut();})
        
        $('#heart-limit-c').on('click', function(){
            $('#heart-limit-c-act').fadeIn()})
        $('#heart-limit-c-act').on('click', function(){
            $('#heart-limit-c-act').fadeOut();})
        
        $('#heart-limit-d').on('click', function(){
            $('#heart-limit-d-act').fadeIn()})
        $('#heart-limit-d-act').on('click', function(){
            $('#heart-limit-d-act').fadeOut();})
    

//----------------------------------------------icon-heart-end

//------------------- 定義視窗寬度的變數
let windowWidth = $(window).width()
if ( windowWidth >= 768 ){
    // $('nav>ul>li').hover(function(){}, function(){})
    $('nav>ul>li').hover(function(){
        $(this).find('.submenu').addClass('active')
    }, function(){
        $(this).find('.submenu').removeClass('active')
    })
}else{
    $('#btn-nav-switch').on('click', function(){
        $('nav').toggleClass('active')
    })// btn-nav-switch end
    
    $('nav>ul>li').on('click',function(){
        $(this).find('.submenu').toggleClass('active')
    })// nav>ul>li end
}// windowWidth>=768 end

// 每一次縮放視窗的時候執行
$(window).resize(function(){
    windowWidth = $(window).width()
    if ( windowWidth >= 768 ){
        // $('nav>ul>li').hover(function(){}, function(){})
        $('nav>ul>li').hover(function(){
            $(this).find('.submenu').addClass('active')
        }, function(){
            $(this).find('.submenu').removeClass('active')
        })
    }else{
        $('#btn-nav-switch').on('click', function(){
            $('nav').toggleClass('active')
        })// btn-nav-switch end
        $('nav>ul>li').on('click',function(){
            $(this).find('.submenu').toggleClass('active')
        })// nav>ul>li end
    }// window Width>=768 end
})// window resize end

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


// --------------------------------------------slide
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