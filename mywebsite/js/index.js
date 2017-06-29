/**
 * Created by luwei on 2017/2/12.
 */

$(function () {
    //搜索
    $('#search #text').focus(function () {
        if($(this).val() == '学习从这里开始'){
            $(this).val('');
        }
        $(this).css('color', '#000');
    });

    $('#search #text').blur(function () {
        if($(this).val()==''){
            $(this).val('学习从这里开始')
            $(this).css('color', '#999');
        }
    });

    function check(){
        if($('#search input #text').val()=='' || $('#search input #text').val()=='学习从这里开始') {
            return false;
        }
        else {
            return true;
        }
    }
    //搜索结束


    //主体

        //鼠标悬停
    $('.firstFloorCon li').hover(function () {
        $(this).find('span').css('color','#fff');
        $(this).css('background', '#5fc6d0');
    }, function () {
        $(this).find('span').css('color','#007e8c');
        $(this).css('background', '#f0f0f0');
    });


    $('.secondFloorCon li').hover(function () {
        $(this).find('span').css('color','#fff');
        $(this).css('background', '#c78ad2');
    }, function () {
        $(this).find('span').css('color','#913d9f');
        $(this).css('background', '#f0f0f0');
    });


    $('.thirdFloorCon li').hover(function () {
        $(this).find('span').css('color','#fff');
        $(this).css('background', '#5fd072');
    }, function () {
        $(this).find('span').css('color','#008c1a');
        $(this).css('background', '#f0f0f0');
    });


    $('.forthFloorCon li').hover(function () {
        $(this).find('span').css('color','#fff');
        $(this).css('background', '#ffa65d');
    }, function () {
        $(this).find('span').css('color','#dd6700');
        $(this).css('background', '#f0f0f0');
    });


    $('.fifthFloorCon li').hover(function () {
        $(this).find('span').css('color','#fff');
        $(this).css('background', '#eb3357');
    }, function () {
        $(this).find('span').css('color','#d0032d');
        $(this).css('background', '#f0f0f0');
    });
        //鼠标悬停结束

        //滑动
    $('.firstFloorBar').click(function () {
        $('.secondFloor').animate({'top':580},'slow');
        $('.thirdFloor').animate({'top':620},'slow');
        $('.forthFloor').animate({'top':660},'slow');
        $('.fifthFloor').animate({'top':700},'slow');
        $('#webCon .webLeft').animate({'height':740},'slow');
    });

    $('.secondFloorBar').click(function () {
        $('.secondFloor').animate({'top':400},'slow');
        $('.thirdFloor').animate({'top':620},'slow');
        $('.forthFloor').animate({'top':660},'slow');
        $('.fifthFloor').animate({'top':700},'slow');
        $('#webCon .webLeft').animate({'height':740},'slow');
    });

    $('.thirdFloorBar').click(function () {
        $('.secondFloor').animate({'top':400},'slow');
        $('.thirdFloor').animate({'top':440},'slow');
        $('.forthFloor').animate({'top':660},'slow');
        $('.fifthFloor').animate({'top':700},'slow');
        $('#webCon .webLeft').animate({'height':740},'slow');
    });

    $('.forthFloorBar').click(function () {
        $('.secondFloor').animate({'top':400},'slow');
        $('.thirdFloor').animate({'top':440},'slow');
        $('.forthFloor').animate({'top':480},'slow');
        $('.fifthFloor').animate({'top':700},'slow');
        $('#webCon .webLeft').animate({'height':740},'slow');
    });

    $('.fifthFloorBar').click(function () {
        $('.secondFloor').animate({'top':400},'slow');
        $('.thirdFloor').animate({'top':440},'slow');
        $('.forthFloor').animate({'top':480},'slow');
        $('.fifthFloor').animate({'top':520},'slow');
        $('#webCon .webLeft').animate({'height':830},'slow');
    });

});