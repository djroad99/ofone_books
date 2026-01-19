// 메인 배너 슬라이드 
var bannerSwiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // 한 슬라이드에 보여줄 갯수
    spaceBetween: 0, // 슬라이드 사이 여백
    autoplay: {      // 자동슬라이드 (false-비활성화)
        delay: 3000, // 시간 설정
        disableOnInteraction: false, // false-스와이프 후 자동 재생
    },
    loop: true, // 슬라이드 반복 여부
    pagination: {
        el: ".banner .swiper-pagination",
        clickable: true,  // 불렛 버튼 클릭 여부
    },
    navigation: {   // 화살표 버튼
        nextEl: ".banner .swiper-button-next",
        prevEl: ".banner .swiper-button-prev",
    },
});


//section3 탭
$(function () {
    $(".tab-nav-list li a").click(function (e) {
        e.preventDefault();
        $(this).parent().addClass("on").siblings().removeClass("on");
        var tab = $(this).data('tab');
        $('.feed-content').removeClass('active');
        $('#' + tab + '-feed').addClass('active');
    });

    $('.filter-btn').click(function () {
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
    });
});


//section4 슬라이드
var bookSwiperInstance = new Swiper('.bookSwiper', {
    slidesPerView: 5,     // 항상 5개 노출
    spaceBetween: 24,    // 슬라이드 사이 여백
    autoplay: false,     // 자동슬라이드 비활성화
    loop: false,         // 슬라이드 반복 여부
    centeredSlides: false,
    // navigation 옵션 제거
    scrollbar: {         // 하단 스크롤바 유지
        el: '.swiper-scrollbar',
        draggable: true,
    }
});

//section8 카드 슬라이드
const cardSwiper = new Swiper('.card_swiper', {
    slidesPerView: 6,
    spaceBetween: 24,
    loop: true,
    // 끊김 없이 흐르게 하는 설정 (Linear Flow)
    speed: 5000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    freeMode: true,
    // 마우스 휠이나 터치 시에도 자연스럽게 하기 위해 설정
    allowTouchMove: true,
});

// 마우스 오버 시 일시 정지 및 재개 로직
const swiperContainer = document.querySelector('.card_swiper');

swiperContainer.addEventListener('mouseenter', () => {
    cardSwiper.autoplay.stop();
});

swiperContainer.addEventListener('mouseleave', () => {
    cardSwiper.autoplay.start();
});