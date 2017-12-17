//引入依赖的css文件
import reset from '../css/reset.css';
import common from '../css/common.css';
import index from '../css/index.css';

import $ from 'jquery';

    //导航hover 效果控制
    $(document).ready(function () {
        var $liList = $('.nav > ul > li');
        var $bgsp = $(".bgsp"); //控制 li hover 背景
//            var $slide = $(".nav .slide");
        $liList.on('mouseenter', function () {
            console.log(1);
            $bgsp.stop().fadeIn();//stop()一定要加
            $(this).children('.slide').css({display: 'block'}).children('dl').each(function (idx, ele) {

                setTimeout(function () {
                    $(ele).stop().animate({
                        opacity: 1,
                        left: 0
                    }, 600);
                }, 200 * idx);


            });

            $(this).siblings('li').children('.slide').children('dl').css({
                opacity: 0,
                left: 100
            });


        });

        $liList.on('mouseleave', function () {
            $bgsp.stop().fadeOut();
            $(".nav .slide").css({
                display: 'none',
                left: 60
            });
        })
    })

    //轮播大图 占满整屏
//    $(document).ready(function () {
//        //动态设置 .slide-pics的高度
//        var imgHeight = $(".slide-pics li img").height();
////        $('.slide-pics').height(imgHeight);
//
//        //
//        var footHeight = $(".footer").outerHeight();
//
//        //是指body的top值
//        $('body').css({
//            paddingTop: imgHeight,
//            paddingBottom: footHeight
//        });
//    })

    $(window).on('resize', function () {
        var imgHeight = $(".slide-pics li img").height();
//        $('.slide-pics').height(imgHeight);

        //
        var footHeight = $(".footer").outerHeight();

        //是指body的top值
        $('body').css({
            paddingTop: imgHeight,
            paddingBottom: footHeight
        });
    }).trigger('resize');

    //轮播大图点击箭头
    $(document).ready(function () {
//        var $ul = $(".slide-pics > ul");
        //找 .current
        var current = 0;
        var $liList = $(".slide-pics > ul > li");
        //右箭头
        $(".slide-pics .arrow-r").on('click', function () {
            if (current < $liList.length - 1) {
                current++;
            } else {
                current = 0;
            }
            //控制图片滚动条
            $(".page-control > li").eq(current).addClass('selector').siblings().removeClass("selector");

            changePic(current);

        })
        //左箭头
        $(".slide-pics .arrow-l").on('click', function () {
            if (current <= 0) {
                current = $liList.length - 1;
            } else {
                current--;
            }

            //控制图片滚动条
            $(".page-control > li").eq(current).addClass('selector').siblings().removeClass("selector");

            changePic(current);

        })

        //点击分页
        $(".page-control > li").on('click', function () {
            //排他
            $(this).siblings('li').removeClass('selector').end().addClass('selector');

            current = $(this).index();
            changePic(current);

        })

        function changePic(current) {

            $liList.eq(current).addClass('current').siblings('li').removeClass('current')
                    .children('.inner-box').removeClass('animated')
                    .end().end().children('.inner-box').addClass('animated');
        }

        //自动播放
        var timer = setInterval(function () {
            $(".slide-pics .arrow-r").trigger('click');
        }, 3000);

        $(".slide-pics").on('mouseenter', function () {
            clearInterval(timer);
        })

        $(".slide-pics").on('mouseleave', function () {
            timer = setInterval(function () {
                $(".slide-pics .arrow-r").trigger('click');
            }, 3000);
        })
    });


    //显示页面底部
    $(window).on('scroll', function () {
        var scrollTop = $('body').scrollTop();

        var offsetTop = $(".index-main").offset().top;
        console.log(scrollTop, offsetTop);
        if (scrollTop >= offsetTop) {
            $('.footer').css({
                opacity: 1,
                zIndex: 8
            });
        } else {
            $('.footer').css({
                opacity: 0,
                zIndex: 1
            });
        }

    });

    //新闻列表滚动
    $(document).ready(function () {
        var $ul = $liList = $(".slideshow > ul");
        var $liList = $(".slideshow > ul > li");
        var current = 0;
        //右箭头
        $(".box-con .arrow-r").on('click', function () {
//            console.log($ul);
//            console.log($liList);
            if (current >= $liList.length - 1) {
                current = 0;
                //瞬移
                $ul.css({
                    left: 0
                })
            }

            current++;

            $ul.animate({
                left: -$liList.width() * current
            }, 2500);
        });

        //左箭头
        $(".box-con .arrow-l").on('click', function () {
            if (current <= 0) {
                current = $liList.length - 1;
                //瞬移
                $ul.css({
                    left: -current * $liList.width()
                })
            }

            current--;

            $ul.animate({
                left: -$liList.width() * current
            }, 2500);
        });
    });