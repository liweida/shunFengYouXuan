
$(function(){
    // 点击关闭按钮，关闭广告
    $currentIndex = 0;  // 定义轮播需要的初始变量
    var id;
    var $circles = $(".banner .circle");
    $(".ad_top .close").on("click", function() {
        $(this.parentNode.parentNode).slideUp(500);
    })  
    // 鼠标移上大连出现位置框
    $(".topmenu .location").on("mouseenter", function() {
        $(this.children[1]).addClass('hover');
        $(".top .close").on("click", function(){
            $(this.parentNode.parentNode).hide();
        })
    }).on("mouseleave",function() {
        $(".topmenu .location .where").show();
        $(this.children[1]).removeClass('hover')
    })
    // 搜索框
    $('.search .keyword').focus(function() {
        if ($(this).val() === '松茸') {
            $(this).val('');
        }
    }).blur(function() {
        if ($(this).val() === '') {
            $(this).val('松茸');
        }
    })
    // 我的优选，帮助中心和网站导航出现外联框
    $(".myChoice,.help,.siteNav").on("mouseenter", function() {
        $(this).addClass('hover');
    }).on("mouseleave", function() {
        $(this).removeClass('hover');
    })
    //二级菜单
    $(".allSort .item").on("mouseover", function() {
        $(this).addClass('hover');
    }).on("mouseleave", function() {
        $(this).removeClass('hover');
    })
    // 客户移动端的以上操作
    $(".mobile").on("mouseenter", function() {
        $(this).addClass('hover')
    }).on("mouseleave", function() {
        $(this).removeClass('hover');
    })
    // 微信的移上操作
    $(".weChat").on('mouseenter', function() {
        $(this.children[1]).addClass('hover');
    }).on("mouseleave", function() {
        $(this.children[1]).removeClass('hover');
    })
    // 购物车
    $(".header .car").on("mouseenter", function() {
        $(this.children[3]).addClass('hover');
    }).on("mouseleave", function() {
        $(this.children[3]).removeClass('hover');
    })
    // banner右侧图片
    $(".banner .side").on("mouseover", 'div', function () {
        $(this.parentNode.parentNode).addClass('hover');
        $(this).addClass('hover');
    }).on("mouseout", 'div', function () {
        $(this.parentNode.parentNode).removeClass('hover');
        $(this).removeClass('hover');
    })
    // 优选必买
    $(".products .detail figure").on("mouseover", function() {
        $(this).addClass('hover');
    }).on("mouseout", function() {
        $(this).removeClass('hover');
    })
    // 水果蔬菜
    $(".category .main .list").on("mouseover", function() {
        $(this).addClass('hover');
    }).on("mouseout", function() {
        $(this).removeClass('hover');
    })
    // 为你推荐
    $(".recommend .list").on("mouseover", function () {
        $(this).addClass('hover');
    }).on("mouseout", function() {
        $(this).removeClass('hover');
    })
    // 侧栏导航
    $("#side_cart").on("mouseover", function(){
        $(".aside .cartShop").css({
            right:'8px'
        }).on("mouseover",function(){
            $(this).css({
                right:'8px'
            })
        })
    }).on("mouseout", function() {
        $(".aside .cartShop").css({
            right:''
        }).on("mouseout", function() {
            $(this).css({
                right:''
            })
        })
    })
    // 回到顶部
    $(window).on("scroll", function() {
        if ($(document).scrollTop() > 0) {
            $(".aside .toTop").css({
                opacity: '1'
            })
        } else{
            $(".aside .toTop").css({
                opacity: '0'
            })
        }
    })
    $(".aside .toTop").on("click", function() {
        $('body,html').animate({
            scrollTop:'0'
        },50)
    })
})   
