
//创建函数
/**
 * 定时器标识右全局变量timer标识
 *  所有的定时器都在timer中
 * */
//var timer;

/**
 * obj:要执行的对象
 * attr:要修改的样式
 * target:执行的位置
 * speed:移动的速度
 * callback:回调函数，这个函数将在动画执行完毕之后执行
 * */
function move(obj, attr, target, speed, callback) {
    clearInterval(obj.timer);
    //判断当前位置
    var current = parseInt(getStyle(obj, attr));
    if (current > target) {
        speed = -speed;
    }
    //开启定时器
    //像执行动画的对象中添加一个属性，保存自己的定时器标识
    obj.timer = setInterval(() => {
        var oldValue = parseInt(getStyle(obj, attr));
        var newValue = oldValue + speed;
        if (speed < 0 && newValue < target || speed > 0 && newValue > target) {
            newValue = target;
        }

        obj.style[attr] = newValue + "px";

        if (newValue === target) {
            clearInterval(obj.timer);
            callback && callback();
        }
    }, 30);

}


function getStyle(obj, name) {
    if (window.getComputedStyle) {
        return getComputedStyle(obj, null)[name];
    } else {
        return obj.currentStyle[name];
    }
}
//定义函数向一个元素中添加指定的class属性值
/**
 * 参数：
 *  obj 要添加class属性的元素
 *  cn 要添加的class值
 * */
function addClass(obj, cn) {
    if (!hasClass(obj, cn)) {
        obj.className += " " + cn;
    }

}

//判断一个元素中是否有指定的class属性值,有返回true，无返回false
function hasClass(obj, cn) {
    var reg = new RegExp("\\b" + cn + "\\b");
    return reg.test(obj.className);
}

//删除指定元素的class属性
function removeClass(obj, cn) {
    var reg = new RegExp("\\b" + cn + "\\b");

    obj.className = obj.className.replace(reg, "");
}

/**
 * 有该类则删除，没有则添加
 * */
function toggleClass(obj, cn) {
    if (hasClass(obj, cn)) {
        removeClass(obj, cn);
    } else {
        addClass(obj, cn);
    }
}