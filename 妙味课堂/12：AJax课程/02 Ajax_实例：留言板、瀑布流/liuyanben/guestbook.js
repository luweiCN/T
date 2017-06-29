/**
 * Created by luwei on 2017/4/20.
 */
window.onload = function () {
    var oUserName1 = document.getElementById('username1');
    var oVerifyUserNameMsg = document.getElementById('verifyUserNameMsg');
    var oRegBtn = document.getElementById('btnReg');
    var oPassword1 = document.getElementById('password1');
    var oBtnLogin = document.getElementById('btnLogin');
    var oPassword2 = document.getElementById('password2');
    var oUserName2 = document.getElementById('username2');
    var oUser = document.getElementById('user');
    var oReg = document.getElementById('reg');
    var oLogin = document.getElementById('login');
    var oLogout = document.getElementById('logout');
    var oUserInfo = document.getElementById('userinfo');
    var oContent = document.getElementById('content');
    var oBtnPost = document.getElementById('btnPost');
    var oList = document.getElementById('list');
    var oShowMore = document.getElementById('showMore');
    var iPage = 1;

    //初始化
    updateUserStatus();
    function updateUserStatus(){
        var uid = getCookie('uid');
        var username = getCookie('username');
        if(uid){
            //如果是登陆状态
            oUser.style.display = 'block';
            oReg.style.display = 'none';
            oLogin.style.display = 'none';
            oUserInfo.innerHTML = username;
        } else {
            oUser.style.display = 'none';
            oReg.style.display = 'block';
            oLogin.style.display = 'block';
            oUserInfo.innerHTML = '';
        }
    }

    function showList(){
        ajax('get', 'guestbook/index.php', 'm=index&a=getList&n=5&page=' + iPage, function (data) {
            var d=JSON.parse(data);

            var arr = d.data;

            if (arr){
                for(var i=0; i<arr.list.length; i++){
                    createList(arr.list[i]);
                }
            } else {
                if(iPage == 1){
                    oList.innerHTML = '现在还没有留言，快来抢沙发...';
                }
                oShowMore.style.display = 'none';
            }
        });
    }

    oShowMore.onclick = function () {
        iPage++;
        showList();
    }

    //初始化留言
    /*
     * get
     *   guestbook/index.php
     *       m:index
     *       a:getList
     *       page:获取的留言的页码，默认为1
     *       n:每页显示的条数，默认为10
     *    返回
     *    {
     *       code:
     *           0:没有错误
     *           1:有错误
     *       message:返回的信息 具体返回信息
     *    }
     * */
    showList();

    //验证用户名
    /*
    * get
    *   guestbook/index.php
    *       m:index
    *       a:verifyUserName
    *       username:要验证的用户名
    *    返回
    *    {
    *       code:
    *           0:没有错误
    *           1:有错误
    *       message:返回的信息 具体返回信息
    *    }
    * */
    oUserName1.onblur = function () {
        ajax('get', 'guestbook/index.php', 'm=index&a=verifyUserName&username=' + this.value, function (data) {
            var d=JSON.parse(data);

            oVerifyUserNameMsg.innerHTML = d.message;
            if(d.code){
                oVerifyUserNameMsg.style.color = 'red';
            } else {
                oVerifyUserNameMsg.style.color = 'green';
            }
        });
    }

    //用户注册
    /*
     * get/post
     *   guestbook/index.php
     *       m:index
     *       a:reg
     *       username:要注册的用户名
     *       password:要注册的密码
     *    返回
     *    {
     *       code:
     *           0:没有错误
     *           1:有错误
     *       message:返回的信息 具体返回信息
     *    }
     * */
    oRegBtn.onclick = function () {
        ajax('get', 'guestbook/index.php', 'm=index&a=reg&username=' + encodeURI(oUserName1.value) + '&password=' + oPassword1.value, function (data) {
            var d = JSON.parse(data);
            alert(d.message);
        });
    }


    //用户登陆
    /*
     * get/post
     *   guestbook/index.php
     *       m:index
     *       a:login
     *       username:要登陆的用户名
     *       password:要登陆的密码
     *    返回
     *    {
     *       code:
     *           0:没有错误
     *           1:有错误
     *       message:返回的信息 具体返回信息
     *    }
     * */
    oBtnLogin.onclick = function () {
        ajax('get', 'guestbook/index.php', 'm=index&a=login&username=' + encodeURI(oUserName2.value) + '&password=' + oPassword2.value, function (data) {
            var d = JSON.parse(data);
            alert(d.message);
            if (!d.code){
                updateUserStatus();
            }
        });
    }

    //用户退出登陆
    /*
     * get/post
     *   guestbook/index.php
     *       m:index
     *       a:logout
     *    返回
     *    {
     *       code:
     *           0:没有错误
     *           1:有错误
     *       message:返回的信息 具体返回信息
     *    }
     * */
    oLogout.onclick = function () {
        ajax('get', 'guestbook/index.php', 'm=index&a=logout', function (data) {
            var d = JSON.parse(data);
            alert(d.message);
            if (!d.code){
                updateUserStatus();
            }
        });

        return false;
    }

    //留言
    /*
     * post
     *   guestbook/index.php
     *       m:index
     *       a:send
     *       content:留言内容
     *    返回
     *    {
     *       code:
     *           0:没有错误
     *           1:有错误
     *       data:返回成功留言的详细信息
     *          {
     *              cid:留言id
     *              uid:留言人id
     *              content:留言内容
     *              username:留言人名称
     *              dateline:留言的时间戳（秒）
     *              support:当前这条留言的赞的数量
     *              oppose:当前这条留言的踩的数量
     *          }
     *       message:返回的信息 具体返回信息
     *    }
     * */
    oBtnPost.onclick = function () {
        ajax('post', 'guestbook/index.php', 'm=index&a=send&content=' + encodeURI(oContent.value), function (data) {
            var d = JSON.parse(data);
            alert(d.message);
            if (!d.code){
                //添加当前留言到列表
                createList(d.data, true);
            }
        });
    }

    function getCookie(key){
        var arr1 = document.cookie.split('; ');
        for (var i=0; i<arr1.length; i++){
            var arr2 = arr1[i].split('=');
            if (arr2[0] == key){
                return arr2[1];
            }
        }
    }

    function createList(data, insert){
        var oDl = document.createElement('dl');

        var oDt = document.createElement('dt');
        var oStrong = document.createElement('strong');
        oStrong.innerHTML = data.username;
        oDt.appendChild(oStrong);

        var oDd1 = document.createElement('dd');
        oDd1.innerHTML = data.content;

        var oDd2 = document.createElement('dd');
        oDd2.className = 't';
        var oA1 = document.createElement('a');
        oA1.href = '';
        oA1.innerHTML = '顶(<span>' + data.support +'</span>)';
        var oA2 = document.createElement('a');
        oA2.href = '';
        oA2.innerHTML = '踩(<span>' + data.oppose + '</span>)';
        oDd2.appendChild(oA1);
        oDd2.appendChild(oA2);

        oDl.appendChild(oDt);
        oDl.appendChild(oDd1);
        oDl.appendChild(oDd2);

        if (insert && oList.children[0]){
            oList.insertBefore(oDl, oList.children[0]);
        } else {
            oList.appendChild(oDl);
        }
    }
}