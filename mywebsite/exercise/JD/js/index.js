/**
 * Created by luwei on 2017/2/11.
 */
$(function () {

    //下拉菜单
    $('#shortCutRight dl').hover(function () {
        $('.headerBtn').css('zIndex', '0');
        //$(this).css('border', '1px solid #999')
        $(this).find('dd').eq(0).removeClass('fn-hide');
        $(this).find('dt').eq(0).css('background' ,'#fff');
    }, function () {
        $('.headerBtn').attr('zIndex', '');
        $(this).find('dd').eq(0).addClass('fn-hide');
        $(this).find('dt').eq(0).css('background' ,'none');
    })
    //下拉菜单结束

    //搜索
    $('.searchBar input').focus(function () {
        if($(this).val() == 'made by luwei'){
            $(this).val('');
            $(this).css('color', '#000');
        }
    });

    $('.searchBar input').blur(function () {
        if($(this).val()==''){
            $(this).val('made by luwei')
            $(this).css('color', '#999');
        }
    });
    //搜索结束

    //我的京东和添加购物车
    $('.myJd').hover(function () {
        $('.myJdCon').removeClass('fn-hide');
    }, function () {
        $('.myJdCon').addClass('fn-hide');
    })

    $('.myJdCon').hover(function () {
        $('.myJdCon').removeClass('fn-hide');
    }, function () {
        $('.myJdCon').addClass('fn-hide');
    })

    $('.shoppingCar').hover(function () {
        $('.shoppingCarCon').removeClass('fn-hide');
    }, function () {
        $('.shoppingCarCon').addClass('fn-hide');
    })

    $('.shoppingCarCon').hover(function () {
        $('.shoppingCarCon').removeClass('fn-hide');
    }, function () {
        $('.shoppingCarCon').addClass('fn-hide');
    })

    //我的京东和添加购物车结束

    //导航
    $('#nav li').hover(function () {
        $(this).addClass('activeOver');
        $('#nav li').click(function () {
            $('#nav li').removeClass('activeOver');
            $(this).addClass('activeOver');
        });
    }, function () {
        if($('li.activeOver').length>1){
            $(this).removeClass('activeOver');
        }
    })
    //导航结束

    //商品分类
    $('#sideMenu li').hover(function () {
        $('#hideMenu').css('display', 'block');
        $(this).css({'background':'#fff', 'border': '1px solid #d00000', 'border-right': 'none'});
    }, function () {
        $('#hideMenu').css('display', 'none');
        $(this).css({'background':'#fcf4ea', 'border': 'none'});
    })

    $('#hideMenu').hover(function () {
        $(this).css('display', 'block');
    }, function () {
        $(this).css('display', 'none');
    })
    //商品分类结束

    //轮播图
    //./images/
    var scrollBannerUrl = ['./images/scrollBanner.jpg','./images/scrollBanner1.jpg','./images/scrollBanner2.jpg','./images/scrollBanner3.jpg','./images/scrollBanner1.jpg','./images/scrollBanner3.jpg'];

    var smallAd = ['./images/scrollSmallAd1.jpg','./images/scrollSmallAd2.jpg', './images/scrollSmallAd3.jpg', './images/scrollSmallAd4.jpg','./images/scrollSmallAd2.jpg','./images/scrollSmallAd4.jpg'];

    var timerBanner = null;

    var oBanner = $('.bannerPic');
    var oImg1 = $('.bannerTOP img');
    var oImg2 = $('.bannerBottom li img');
    var indexBanner = 0;
    var oBannerBg = $('#scrollBannerMid');

    ///indexBanner = (indexBanner+0.5)%6;  每次都会加两次0.5，为什么？
    timerBanner = setInterval(function () {
        indexBanner = Math.ceil((indexBanner+0.5)%6);
        oBanner.fadeOut(1000, function () {
            oImg1.attr('src',scrollBannerUrl[indexBanner]);
            oImg2.eq(0).attr('src',smallAd[indexBanner]);
            oImg2.eq(1).attr('src',smallAd[indexBanner+1]);
            oImg2.eq(2).attr('src',smallAd[indexBanner+2]);
            oBanner.fadeIn(400);
        })
    },1000);

    oBannerBg.hover(function () {
        clearInterval(timerBanner);
    }, function () {
        timerBanner = setInterval(function () {
            oBanner.fadeOut(1000, function () {
                indexBanner = parseInt((indexBanner+0.5)%6);
                oImg1.attr('src',scrollBannerUrl[indexBanner]);
                oImg2.eq(0).attr('src',smallAd[indexBanner]);
                oImg2.eq(1).attr('src',smallAd[indexBanner+1]);
                oImg2.eq(2).attr('src',smallAd[indexBanner+2]);
                oBanner.fadeIn(400);
                indexBanner--;
            })
        },1000);
    });

    $('.switchBar li').hover(function () {
        var i = $(this).index();
        $(this).find('span').css('background', '#cc0000');
        oImg1.attr('src',scrollBannerUrl[i]);
        oImg2.eq(0).attr('src',smallAd[i]);
        oImg2.eq(1).attr('src',smallAd[i+1]);
        oImg2.eq(2).attr('src',smallAd[i+2]);
    }, function () {
        $(this).find('span').css('background', '#999999');
    });
    //轮播图结束

    //充值选项卡
    $('#rightTab li').hover(function () {
        $('#rightTab li').find('.tabBarCon').addClass('fn-hide');
        $(this).css('background', '#fff');
        $(this).find('.tabBarCon').removeClass('fn-hide');
    }, function () {
        $(this).css('background', 'none');
        $(this).find('.tabBarCon').addClass('fn-hide');
        if($('#rightTab li').find('.fn-hide').length >= 3){
            $(this).find('.tabBarCon').removeClass('fn-hide');
        }
    });
    //充值选项卡结束

    //疯狂抢购选项卡
    $('#productTab li').hover(function () {
        $('#productList li').find('dl').addClass('fn-hide');
        $(this).css('background', '#fff');
        $(this).find('dl').removeClass('fn-hide');
    }, function () {
        $(this).css('background', 'none');
        $(this).find('dl').addClass('fn-hide');
        if($('#productList li').find('.fn-hide').length >= 4){
            $(this).find('dl').removeClass('fn-hide');
        }
    });

    //疯狂抢购选项卡结束

    //京东首发
    var t = 0;
    var iNowOpen = new Date();
    var timer1 = null;
    var timer2 = null;
    var timer3 = null;
    var timer4 = null;
    var timer5 = null;


    timer1 = setInterval(function () {
        var iNow = Number(new Date());
        var iNew = Number(iNowOpen) + 7200*1000;
        t = (iNew - iNow)/1000;
        $('#productLimit li').eq(0).find('b').eq(0).html(Math.floor(t%86400/3600));
        $('#productLimit li').eq(0).find('b').eq(1).html(Math.floor(t%86400%3600/60));
        $('#productLimit li').eq(0).find('b').eq(2).html(Math.floor(t%60));
        if(t <= 0){
            clearInterval(timer1);
            $('#productLimit li').eq(0).find('span').eq(0).html('<b>已结束</b>')
        }
    },1000);

    timer2 = setInterval(function () {
        var iNow = Number(new Date());
        var iNew = Number(iNowOpen) + 3000*1000;
        t = (iNew - iNow)/1000;
        $('#productLimit li').eq(1).find('b').eq(0).html(Math.floor(t%86400/3600));
        $('#productLimit li').eq(1).find('b').eq(1).html(Math.floor(t%86400%3600/60));
        $('#productLimit li').eq(1).find('b').eq(2).html(Math.floor(t%60));
        if(t <= 0){
            clearInterval(timer2);
            $('#productLimit li').eq(1).find('span').eq(0).html('<b>已结束</b>')
        }
    },1000);

    timer3 = setInterval(function () {
        var iNow = Number(new Date());
        var iNew = Number(iNowOpen) + 9600*1000;
        t = (iNew - iNow)/1000;
        $('#productLimit li').eq(2).find('b').eq(0).html(Math.floor(t%86400/3600));
        $('#productLimit li').eq(2).find('b').eq(1).html(Math.floor(t%86400%3600/60));
        $('#productLimit li').eq(2).find('b').eq(2).html(Math.floor(t%60));
        if(t <= 0){
            clearInterval(timer3);
            $('#productLimit li').eq(2).find('span').eq(0).html('<b>已结束</b>')
        }
    },1000);

    timer4 = setInterval(function () {
        var iNow = Number(new Date());
        var iNew = Number(iNowOpen) + 20*1000;
        t = (iNew - iNow)/1000;
        $('#productLimit li').eq(3).find('b').eq(0).html(Math.floor(t%86400/3600));
        $('#productLimit li').eq(3).find('b').eq(1).html(Math.floor(t%86400%3600/60));
        $('#productLimit li').eq(3).find('b').eq(2).html(Math.floor(t%60));
        if(t <= 0){
            clearInterval(timer4);
            $('#productLimit li').eq(3).find('span').eq(0).html('<b>已结束</b>')
        }
    },1000);

    timer5 = setInterval(function () {
        var iNow = Number(new Date());
        var iNew = Number(iNowOpen) + 5*1000;
        t = (iNew - iNow)/1000;
        $('#productLimit li').eq(4).find('b').eq(0).html(Math.floor(t%86400/3600));
        $('#productLimit li').eq(4).find('b').eq(1).html(Math.floor(t%86400%3600/60));
        $('#productLimit li').eq(4).find('b').eq(2).html(Math.floor(t%60));
        if(t <= 0){
            clearInterval(timer5);
            $('#productLimit li').eq(4).find('span').eq(0).html('<b>已结束</b>')
        }
    },1000);
    //京东首发结束

    //分类选项卡
        //小图片切换
    var smallTabPicUrl = ['./images/cs1.jpg', './images/cs2.jpg', './images/cs3.jpg', './images/cs4.jpg'];
    $('.typeMidCon .smallTab span').hover(function () {
        $(this).css('background','#cc0000');
        $(this).parent().prev().find('img').attr('src', smallTabPicUrl[$(this).index()]);
    }, function () {
        $(this).css('background','#999999');
    })
        //选项卡
    $('.typeMid li').hover(function () {
        $(this).css('background', '#fff');
        $(this).parent().parent().find('.typeMidCon').addClass('fn-hide');
        $(this).parent().parent().find('.typeMidCon').eq($(this).index()).removeClass('fn-hide');
    }, function () {
        $(this).css('background', 'none');
    });
    //分类选项卡结束

    //热门晒单
    var oUlTop = $('.show ul.top, .activity ul.top');
    var oUlBot = $('.show ul.bottom, .activity ul.bottom');
    setInterval(function () {

        oUlTop.animate({'top':180}, 'slow', function () {
            oUlBot.css('zIndex', 1);
            oUlTop.css({'top':38, 'zIndex':-1});

            setTimeout(function () {
                oUlBot.animate({'top':180}, 'slow', function () {
                    oUlTop.css('zIndex', 1);
                    oUlBot.css({'top':38, 'zIndex':-1});
                });
            },1000);
        });

    },3000);

    //热门晒单结束
});