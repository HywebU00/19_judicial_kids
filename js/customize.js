// 自行加入的JS請寫在這裡
$(function() {
    // lazyload  
    //可以指定你想要的元素做lazyload
    $("img").lazyload({ effect: "fadeIn" });
    $('.mpSlider').slick({
        arrows: true,                       //左右箭頭
        autoplay: false,                    //自動播放
        autoplaySpeed: 3000,                //自動播放秒數
        dots: false,                        //顯示圓點
        dotsClass:  'slick-dots',           //原點css
        draggable: true,                    //滑鼠可以拖曳
        infinite: true,                     //無限輪播
        pauseOnHover: true,                 //滑鼠移過後暫停自動撥放
        pauseOnDotsHover: false,            //滑鼠移過圓點後暫停自動撥放
        rtl: false,                         //改變輪播方向
        slidesToShow: 1,                    //一次顯示幾張
        slidesToScroll: 1,                  //一次輪播幾張
        vertical: false                     //改成垂直方向
      });
    //燈箱slick+lightBox組合
    $('.cp_slider').slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 1500,
      pauseOnHover: true,
      pauseOnFocus: true,
      focusOnSelect: true,
      accessibility: true,
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 545,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }]
    });
    $('.cp_slider').slickLightbox({
      caption: 'caption',
      useHistoryApi: 'true',
      lazy: true
    });
  });
$(function(){
  var weblang = $('html').attr('lang');
  if (weblang.substring(0,2) == 'zh') {
        // console.log("中文");
        $('.slick-prev').attr('title', '前一則');
        $('.slick-next').attr('title', '後一則');
      } else if (weblang.substring(0,2) == 'en') {
        // console.log("英文");
        $('.slick-prev').attr('title', 'previous');
        $('.slick-next').attr('title', 'next');
      } else if (weblang.substring(0,2) == 'vi') {
        // console.log("越南");
        $('.slick-prev').attr('title', 'Trước');
        $('.slick-next').attr('title', 'kế tiếp');
      } else if (weblang.substring(0,2) == 'id') {
        // console.log("印尼");
        $('.slick-prev').attr('title', 'sebelumnya');
        $('.slick-next').attr('title', 'berikutnya');
      } else if (weblang.substring(0,2) == 'km') {
        // console.log("柬埔寨");
        $('.slick-prev').attr('title', 'មុន');
        $('.slick-next').attr('title', 'បន្ទាប់');
      } else if (weblang.substring(0,2) == 'th') {
        // console.log("泰文");
        $('.slick-prev').attr('title', 'ก่อน');
        $('.slick-next').attr('title', 'ต่อไป');
      } else{
        // console.log("沒有判斷");
        $('.slick-prev').attr('title', 'previous');
        $('.slick-next').attr('title', 'next');
      }
    });

$('.centrespread').slickLightbox({
  caption: 'caption',
  useHistoryApi: 'true',
  lazy: true
});


