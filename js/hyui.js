$(function() {
  /*-----------------------------------*/
    ///////////// fix iOS bug /////////////
    /*-----------------------------------*/
    document.documentElement.addEventListener('gesturestart', function(event) {
      event.preventDefault();
    }, false);
    /*-----------------------------------*/
    ///////////////// 變數 ////////////////
    /*-----------------------------------*/
    var _window = $(window),
    ww = _window.outerWidth(),
    wh = _window.height(),
    _body = $('body'),
    wwNormal = 1400,
    wwMedium = 992,
    wwSmall = 948,
    wwxs = 576;
    /*-----------------------------------*/
    //////////// nojs 先移除////////////////
    /*-----------------------------------*/
    $('html').removeClass('no-js');

    /*-----------------------------------*/
    ////////img objectfix cover////////////
    /*-----------------------------------*/
    function imgResize() {
      $('.imgOuter').each(function(index, el) {
        var _imgContainer = $(this),
        cWidth = _imgContainer.width(),
        cHeight = _imgContainer.height(),
        ratioC = cWidth / cHeight,
        _img = _imgContainer.find('img');
        var iWidth = $(this).find('img').width(),
        iHeight = $(this).find('img').height(),
        ratioImg = iWidth / iHeight,
        scaleRatio;
        if (ratioC > ratioImg) {
          scaleRatio = cWidth / iWidth;
          _img.width(cWidth).height(iHeight * scaleRatio).css('top', -.5 * (iHeight * scaleRatio - cHeight));
        } else {
          scaleRatio = cHeight / iHeight;
          _img.height(cHeight).width(iWidth * scaleRatio).css('left', -.5 * (iWidth * scaleRatio - cWidth));
        }
        $(this).find('img').removeClass('img-responsive');
      });
    }
    $(window).bind('resize load', function(e) {
      imgResize();
    });
    imgResize();
    /*-----------------------------------*/
    //////////////相簿縮圖+燈箱//////////////
    /*-----------------------------------*/
    //縮圖，same as thumbnail模組
    function imgResize() {
      $('.imgOuter').each(function(index, el) {
        var _imgContainer = $(this),
        cWidth = _imgContainer.width(),
        cHeight = _imgContainer.height(),
        ratioC = cWidth / cHeight,
        _img = _imgContainer.find('img');
        var iWidth = $(this).find('img').width(),
        iHeight = $(this).find('img').height(),
        ratioImg = iWidth / iHeight,
        scaleRatio;
        if (ratioC > ratioImg) {
          scaleRatio = cWidth / iWidth;
          _img.width(cWidth).height(iHeight * scaleRatio).css('top', -.5 * (iHeight * scaleRatio - cHeight));
        } else {
          scaleRatio = cHeight / iHeight;
          _img.height(cHeight).width(iWidth * scaleRatio).css('left', -.5 * (iWidth * scaleRatio - cWidth));
        }
        $(this).find('img').removeClass('img-responsive');
      });
    }
    $(window).bind('resize load', function(e) {
      imgResize();
    });
    imgResize();
    /*-----------------------------------*/
    ////////////////多組Tab////////////////
    /*-----------------------------------*/
    var resizeTimer1;
    _window.resize(function() {
      clearTimeout(resizeTimer1);
      resizeTimer1 = setTimeout(function() {
        ww = _window.outerWidth();
        typeTab();
      }, 50);
    });

    function typeTab() {
      $('.tabs').each(function() {
        var _tab = $(this),
        _tabItem = _tab.find('.tabItem'),
        _tabItemA = _tabItem.children('a'),
        _tabContent = _tab.find('.tabContent'),
        tabwidth = _tab.width(),
        tabItemHeight = _tabItem.outerHeight(),
        tabContentHeight = _tab.find('.active').next().innerHeight(),
        tiGap = 0,
        tabItemLength = _tabItem.length,
        tabItemWidth;
        _tab.find('.active').next('.tabContent').show();
        if (ww >= wwSmall) {
          _tabContent.css('top', tabItemHeight);
          _tab.height(tabContentHeight + tabItemHeight);
          tabItemWidth = (tabwidth - (tabItemLength - 1) * tiGap) / tabItemLength;
          _tabItem.width(tabItemWidth).css('margin-left', tiGap);
          _tabItem.first().css('margin-left', 0);
          _tabItem.last().css({ 'position': 'absolute', 'top': 0, 'right': 0 }).width(tabItemWidth);
        } else {
          _tab.css('height', 'auto');
          _tabItem.width(tabwidth);
          _tabItem.css('margin-left', 0).last().css('position', 'relative');
        }
        _tabItemA.focus(tabs);
        _tabItemA.click(tabs);

        function tabs(e) {
          var _tabItemNow = $(this).parent(),
          tvp = _tab.offset().top,
          tabIndex = _tabItemNow.index() / 2,
          hh = Math.floor($('.header').outerHeight(true)),
          scollDistance = tvp + tabItemHeight * tabIndex - hh;
          _tabItem.removeClass('active');
          _tabItemNow.addClass('active');
          if (ww <= wwSmall) {
            _tabItem.not('.active').next().slideUp();
            _tabItemNow.next().slideDown();
            $("html,body").stop(true, false).animate({ scrollTop: scollDistance });
          } else {
            _tabItem.not('.active').next().hide();
            _tabItemNow.next().show();
            tabContentHeight = _tabItemNow.next().innerHeight();
            _tab.height(tabContentHeight + tabItemHeight);
          }
          e.preventDefault();
        }
      });
    }
    $('.tabs>.tabItem:first-child>a').trigger('click');
    typeTab();
    
    /*-----------------------------------*/
    ///////////////置頂go to top////////////
    /*-----------------------------------*/
    $(window).bind('scroll', function() {
      if ($(this).scrollTop() > 200) {
        $('.scrollToTop').fadeIn();
      } else {
        $('.scrollToTop').fadeOut();
      }
    });
    /*-----------------------------------*/
    /////click event to scroll to top//////
    /*-----------------------------------*/
    $('.scrollToTop').click(function(e) {
      $('html, body').animate({ scrollTop: 0 }, 800, 'easeOutExpo');
      e.preventDefault();
    });
    $('.scrollToTop').keydown(function(e) {
      _body.find('a:first').focus();
      e.preventDefault();
    });
    /*--------------------------------------------------------*/
    /////設定img 在IE9+ SAFARI FIREFOX CHROME 可以object-fit/////
    /*--------------------------------------------------------*/
    var userAgent, ieReg, ie;
    userAgent = window.navigator.userAgent;
    ieReg = /msie|Trident.*rv[ :]*11\./gi;
    ie = ieReg.test(userAgent);
    if (ie) {
      $(".img-container").each(function() {
        var imgUrl = $(this).find('img').attr('src');
        var $container = $(this);
        $container.has('.none').addClass('ie-object-none');
        $container.has('.none').css('backgroundImage', 'url(' + imgUrl + ')');
        $container.has('.cover').addClass('ie-object-cover');
        $container.has('.cover').css('backgroundImage', 'url(' + imgUrl + ')');
        $container.has('.fill').addClass('ie-object-fill');
        $container.has('.fill').css('backgroundImage', 'url(' + imgUrl + ')');
        $container.has('.contain').addClass('ie-object-contain');
        $container.has('.contain').css('backgroundImage', 'url(' + imgUrl + ')');
      });
    }
    /*-----------------------------*/
    /////form表單 placeholder隱藏/////
    /*-----------------------------*/
    $('input,textarea').focus(function() {
      $(this).removeAttr('placeholder');
    });
    
    /*-----------------------------------*/
    /////////////// lazyload  /////////////
    /*-----------------------------------*/
    // cp_photo
    $('.Slider-for').on('init reInit afterChange', function(event, slick, currentSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      $('.controls').html(i + '/' + slick.slideCount);
    });
    /*-----------------------------------*/
    /////////// 無障礙快捷鍵盤組合  //////////
    /*-----------------------------------*/
    $(document).on('keydown', function(e) {
        // alt+S 查詢
        // if (e.altKey && e.keyCode == 83) {
        //   $('html, body').animate({ scrollTop: 0 }, 200, 'easeOutExpo');
        //   $('.search').find('input[type="text"]').focus();
        // }
        // alt+U header
        if (e.altKey && e.keyCode == 85) {
          $('html, body').animate({ scrollTop: 0 }, 200, 'easeOutExpo');
          $('header').find('.accesskey').focus();
        }
        // alt+C 主要內容區
        if (e.altKey && e.keyCode == 67) {
          $('html, body').stop(true, true).animate({ scrollTop: $('.main').find('.accesskey').offset().top }, 800, 'easeOutExpo');
          $('.main').find('.accesskey').focus();
        }
        // alt+Z footer
        if (e.altKey && e.keyCode == 90) {
          $('html, body').stop(true, true).animate({ scrollTop: $('footer').find('.accesskey').offset().top }, 800, 'easeOutExpo');
          $('footer').find('.accesskey').focus();
        }
      });
    /*------------------------------------*/
    /////gotoCenter on focus跳到 content/////
    /*------------------------------------*/
    $('a.goCenter').keydown(function(e) {
      if (e.which == 13) {
        $('#aC').focus();
        $('html, body').stop(true, true).animate({ scrollTop: $('.main').find('.accesskey').offset().top }, 800, 'easeOutExpo');
      }
    });

  });