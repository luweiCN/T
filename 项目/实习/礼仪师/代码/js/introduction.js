/**
 * Created by luwei on 2017/4/20.
 */

//解析url，从url里面获取mid
function getRequest(){
    var url = location.search; //获取url中“?”后面的字符串
    var theRequest = new Object();

    if(url.indexOf('?') != -1){
        var str = url.substr(1);
        var strs = str.split('&');

        for(var i=0; i<strs.length; i++){
            theRequest[strs[i].split('=')[0]] = (strs[i].split('=')[1]);
        }

        return theRequest;
    }
}

//获取单个礼仪师信息
function getMerchant(callBack){
    var mid = getRequest()['mid'];
    var myUrl = 'http://api.idukou.com/' + 'api/Merchants/' + mid;
    $.ajax({
        url: myUrl,
        async:true,
        dataType:'json',
        success: callBack
    });
}

//获取客户评价
function getPublicPraises(callBack){
    var mid = getRequest()['mid'];
    var myUrl = 'http://api.idukou.com/' + 'api/PublicPraises/' + mid + '/' + 0;
    $.ajax({
        type: 'GET',
        url: myUrl,
        async:true,
        dataType:'json',
        success: callBack
    });
}

//添加个人信息
function addOneInfo(){
    getMerchant(function (merchant) {
        //添加图片
        if(merchant.HeadImg){
            $('#intro img').attr('src','http://img.idukou.com/' + merchant.HeadImg);
        } else{
            $('#intro img').attr('src','./images/no-img.jpg');
        }
        //添加个人简介
        $('#intro .text p').eq(0).html('<span>姓名：</span>' + merchant.MName);
        $('#intro .text p').eq(1).html('<span>星级：</span>' + merchant.PublicPraiseScore.TotalScore);
        $('#intro .text p').eq(2).html('<span>服务次数：</span>' + merchant.OrderCount);
        $('#intro .text p').eq(3).html('<span>地址：</span>' + merchant.Address);
    });
}

//添加评价信息
function addPraises (praises){
    for(var i=0; i<praises.length; i++){
        var oDiv = document.createElement('div');
        oDiv.className = 'item';

        var oP1 = document.createElement('p');
        var oSpan1 = document.createElement('span');
        oSpan1.className = 'glyphicon glyphicon-user';
        var oSpan2 = document.createElement('span');
        oSpan2.className = 'name';
        oSpan2.innerHTML = praises[i].UName
        var oSpan3 = document.createElement('span');
        oSpan3.className = 'score';
        oSpan3.innerHTML = '评分：' + praises[i].TotalScore;

        oP1.appendChild(oSpan1);
        oP1.appendChild(oSpan2);
        oP1.appendChild(oSpan3);

        var oP2 = document.createElement('p');
        var oSpan4 = document.createElement('span');
        oSpan4.innerHTML = praises[i].PQContent;
        var oI = document.createElement('i');
        oI.innerHTML = praises[i].CreateDate

        oP2.appendChild(oSpan4);
        oP2.appendChild(oI);

        oDiv.appendChild(oP1);
        oDiv.appendChild(oP2);

        $('.jud-con').append(oDiv);

    }
}

//获取礼仪师服务
function getService(callBack){
    var mid = getRequest()['mid'];
    var myUrl = 'http://api.idukou.com/' + 'api/Services/' + mid + '/' + 100;
    $.ajax({
        url: myUrl,
        async:true,
        dataType:'json',
        success: callBack
    });
}

//根据礼仪师服务分类获取商品信息
function getProduction(tid,callBack){
    var mid = getRequest()['mid'];
    var myUrl = 'http://api.idukou.com/' + 'api/MerchantGoods/GetMerchantGoodsByType/' + tid;
    $.ajax({
        url: myUrl,
        async:true,
        dataType:'json',
        success: callBack
    });
}

$(function () {
    //添加评价
    getPublicPraises(function(praises) {
        if (praises.length <= 0){
            $('.jud-con').html('<div class="no-praise">暂无评价</div>>');
        } else if (praises.length <= 2){
            addPraises(praises);
        } else {
            praises.length = 2;
            addPraises(praises);

            var oDiv = document.createElement('div');
            oDiv.className = 'jud-con-footer';
            var oA = document.createElement('a');
            oA.innerHTML = '查看更多>>';
            oDiv.appendChild(oA);

            $('.jud-con').append(oDiv);
        }
    });

    //添加个人信息
    addOneInfo();

    getService(function (data) {
        var that = null;
        $('#production-info .production-content .sideBar ul li').remove();
        for(var i=0; i<data.length; i++){
            var text = "<li tid=" + data[i].ID + ">" + data[i].SName + "</li>";
            $Li = $(text);
            $('#production-info .production-content .sideBar ul').append($Li);
        }

        //初始化
        $('#production-info .production-content .sideBar ul li').eq(0).addClass('active');
        getProduction(data[0].ID, function (data) {
            addProduction(data);
        });

        //鼠标移入移出效果
        $('#production-info .production-content .sideBar ul li').hover(function () {
            $('#production-info .production-content .sideBar ul li').removeClass('active');
            $(this).addClass('active');
            var tid = $(this).attr('tid');
            that = this;

            getProduction(tid, function (data) {
                addProduction(data);
            });
        }, function () {
            $('#production-info .production-content .sideBar ul').hover(function () {
                $(this).removeClass('active');
            }, function () {
                $(that).addClass('active');
            });
        });

    });

});

function addProduction(data){
    $('.rightContent ul li').remove();
    for (var i=0; i<data.length&&data[0];i++){
        var oLi = document.createElement('li');
        var oA = document.createElement('a');
        var oImg = document.createElement('img');
        oImg.src = 'http://img.idukou.com/' + data[i].MGImg;
        var oSpan1 = document.createElement('span');
        var oSpan2 = document.createElement('span');
        var oSpan3 = document.createElement('span');
        oSpan1.className = 'serviceName';
        oSpan2.className = 'servicePrice';
        oSpan3.className = 'serviceDis';
        oSpan1.innerHTML = data[i].MGName;
        oSpan2.innerHTML = data[i].MGPrice;
        oSpan3.innerHTML = data[i].MGRemark;

        oA.appendChild(oImg);
        oA.appendChild(oSpan1);
        oA.appendChild(oSpan2);
        oA.appendChild(oSpan3);

        oLi.appendChild(oA);
        $('.rightContent ul').append(oLi);
    }
}
