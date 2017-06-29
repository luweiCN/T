/**
 * Created by luwei on 2017/2/5.
 */
function getStyle(obj, attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];
    }
}

function startMove (obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var bStop = true; //标志所有属性都完成运动
        for(var attr in json){
            //1.先取当前的值
            var iCur = 0;
            if(attr == 'opacity'){
                iCur = parseInt(parseFloat(getStyle(obj, attr)) * 100);
            } else {
                iCur = parseInt(getStyle(obj, attr));
            }

            //2.计算速度
            var iSpeed = (json[attr] - iCur) / 8;
            iSpeed = iSpeed>0? Math.ceil(iSpeed): Math.floor(iSpeed);

            //3.检测停止
            if(iCur != json[attr]){
                bStop = false;
            }

            if(attr == 'opacity'){
                obj.style.filter = 'alpha(opacity:' + (iCur + iSpeed) + ')';
                obj.style.opacity = (iCur + iSpeed) / 100;
            } else {
                obj.style[attr] = iCur + iSpeed + 'px';
            }
        }
        if(bStop){
            clearInterval(obj.timer);
            if(fn){     //回调函数，链式运动
                fn();
            }
        }
    }, 30);
}