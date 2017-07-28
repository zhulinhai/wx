/**
 * Created by zhulinhai on 16/6/1.
 */

$(function(){

    var activeIndex = 0;
    /*首页时间*/
    setInterval(function(){
        var date = new Date();
        var hour = date.getHours(), minute = date.getMinutes();
        var info = '';
        if (hour < 10) {
            info += '0';
        }
        info +=hour;
        info +=':';
        if (minute < 10) {
            info += '0';
        }
        info += minute;
        $('.currentTime').html(info);
    }, 1000);

    var bodyTouch = util.toucher($('.swiper-container')[0]);
    bodyTouch.on('swipeLeft', function(e){
        activeIndex++;
        changePage(activeIndex);
        return false;
    });

    bodyTouch.on('swipeRight', function(e){
        activeIndex--;
        changePage(activeIndex);
        return false;
    });

    var tipDialog = util.toucher($('#tipDialog')[0]);
    tipDialog.on('swipeLeft', function(e){
        $('#tipDialog').fadeOut(300);
        activeIndex++;
        changePage(activeIndex);
        return false;
    });

    tipDialog.on('swipeRight', function(e){
        $('#tipDialog').fadeOut(300);
        activeIndex--;
        changePage(activeIndex);
        return false;
    });

    // 设置用户留资页面高度
    var menuListDialog = $('#menuListDialog');
    var contentHeight = menuListDialog.height() - 2.3 * 20* $(document).width() / 320;
    var page2 = $('.page-2-1'), page3 = $('.page-3-1'), page4 = $('.page-4-1'), page5 = $('.page-5-1'), page6 = $('.page-6-1'), page7 = $('.page-7-1'), page8 = $('.page-8-1');
    var rotate = 45;
    var angle;
    /*弹出子项菜单*/
    var isShowPage3Menu = false, isShowPage4Menu = false;
    var page3CheckIndex = 1, page4CheckIndex = 0;
    var page3Arr = ["全部","H5","网站","VI"];
    var page4Arr = ["公司","团队"];
    page3.find('.contentFrame').height(contentHeight);
    page5.find('.contentFrame').height(contentHeight);
    page6.find('.contentFrame').height(contentHeight);
    page7.find('.contentFrame').height(contentHeight);
    page8.find('.contentFrame').height(contentHeight);
    page5.find('.map').height(contentHeight - 15 * 20* $(document).width() / 320);
    menuListDialog.find('.itemFrame').height(menuListDialog.height() - 4 * 20* $(document).width() / 320);

    /*初始化菜单*/
    function loadMenuState() {
        var index = $.cookie('activeIndex');
        var subIndex = $.cookie('subIndex');
        if (index != null) {
            activeIndex = index;
            if (index == 2 && subIndex != null) {
                page3.find('.subItemTitle').html(page3Arr[subIndex]);
            }
        }
        changePage(activeIndex);
    }
    loadMenuState();

    $('.menuList').find('.item').click(function(){
        var index = $(this).index();
        changePage(index);
    });

    /*点击切换栏目*/
    function changePage(index) {
        updateItemInfo(index);
        closeMenu(function(){
            angle = -index * rotate;
            $('#wrapper').css({
                "transform":"rotateY("+angle+"deg)",
                "transition":"0.7s ease-in-out"
            });
        });
    }

    page3.find('.titleDiv').click(function(){
        if (isShowPage3Menu) {
            hidePage3Menu(null);
        } else {
            page3.find('.subMenu').animate({
                'height': '9rem'
            }, function(){
                isShowPage3Menu = true;
            });
        }
    });

    page4.find('.titleDiv').click(function() {
        if (isShowPage4Menu) {
            hidePage4Menu(null);
        } else {
            page4.find('.subMenu').animate({
                'height': '4.5rem'
            }, function(){
                isShowPage4Menu = true;
            });
        }
    });

    function hidePage3Menu(callBack) {
        page3.find('.subMenu').animate({
            'height': '0'
        }, function(){
            isShowPage3Menu = false;
            callBack&&callBack();
        });
    }

    function hidePage4Menu(callBack) {
        page4.find('.subMenu').animate({
            'height': '0'
        }, function(){
            isShowPage4Menu = false;
            callBack&&callBack();
        });
    }

    page3.find('.subItem').click(function(){
        page3CheckIndex = $(this).index();
        $.cookie("subIndex", page3CheckIndex);
        hidePage3Menu(function(){
            page3.find('.subItemTitle').html(page3Arr[page3CheckIndex]);
            initLoadInfo(page3CheckIndex);
        });
    });

    page4.find('.subItem').click(function(){
        page4CheckIndex = $(this).index();
        hidePage4Menu(function(){
            page4.find('.subItemTitle').html(page4Arr[page4CheckIndex]);
            if (page4CheckIndex == 0) {
                page4.animate({'background-position-x':'0'});
                page4.find('.contentFrame-1').animate({'left': '100%'});
                page4.find('.contentFrame-0').animate({'left': '50%'});
            } else {
                page4.animate({'background-position-x':'100%'});
                page4.find('.contentFrame-1').animate({'left': '0.5rem'});
                page4.find('.contentFrame-0').animate({'left': '-100%'});
            }
        });
    });
    /*end*/

    /*
    * 更新菜单选项状态
    * */
    function updateItemInfo(index) {
        var items = $('.menuList').find('.item');
        items.css('color', '#7C7D7E');
        activeIndex = index;
        var itemIndex = Math.abs(activeIndex)%8;
        if (activeIndex < 0) {
            if (itemIndex <= 0 || itemIndex >= 8) { //校验 出现itemIndex = 0的情况
                itemIndex = 0;
            } else {
                itemIndex = 8 - itemIndex;
            }
        }
        $(items[itemIndex]).css('color', 'white');
        // 缓存当前选中的栏目
        $.cookie("activeIndex", itemIndex);
    }

    $('.menu').click(function(){
        if (isShowed) {
            closeMenu(null);
        } else  {
            showMenu();
        }
    });

    menuListDialog.find('.leftFrame').click(function(){
        closeMenu(null);
    });

    // getSingPackage(); /*设置分享*/
});