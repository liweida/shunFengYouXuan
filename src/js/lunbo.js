var currentIndex = 0;
var id;
var circles = document.querySelectorAll('.banner .circle li');

 // 将轮播切换到指定的图片上
 function slideTo(index) {
     console.log(index)
    var liWidth = document.querySelector('.banner .pic li:nth-child(1)').offsetWidth;
    var list = document.querySelector('.banner .pic');
   
    //  1. 判断，当前是否为假0那张图片
    if (index === 9 ) {
        index = currentIndex = 0;
        circles[index].classList.add('current');
        list.style.left = -liWidth + 'px'
        //当浏览器遇到下面四行代码(执行过程中，浏览器没有机会描绘画面)，
        //会进行优化，所以达不到我们的要的效果
        //  2. 瞬移到真0
        //      2.1 去掉过渡
        list.style.transitionDuration = '0s'
        // //      2.2 left设置为0
        list.style.left = 0;
        setTimeout(function () {
            list.style.transitionDuration = ''
            index=currentIndex = 1
            var current = document.querySelector('.banner .circle .current');
            current.classList.remove('current');
            circles[index].classList.add('current');
            list.style.left = -liWidth + 'px'
        }, 20)
        //  3. 真0轮播到真1
        return;
    }
    var current = document.querySelector('.banner .circle .current');
    current.classList.remove('current');
    circles[index].classList.add('current');
   
    var left = -index * liWidth;
    list.style.left = left + 'px'
}

function slideNext() {
    currentIndex++;
    slideTo(currentIndex);
}

for (var i = 0; i < circles.length; i++) {
    circles[i].index = i;
    circles[i].onmouseenter = function () {
        currentIndex = this.index;
        slideTo(currentIndex)
    }
}

function auto() {
    id = setInterval(function () {
        slideNext();
    }, 3000)
}

function stop() {
    clearInterval(id)
}

document.querySelector('.banner .show').onmouseover = function () {
    stop()
}
document.querySelector('.banner .show').onmouseout = function () {
    auto()
}
auto();
