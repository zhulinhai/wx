var host = 'http://api.bjczxda.com/api/'; //'http://localhost:8000/api/';//
var carList = ["广汽丰田 埃尔法", "广汽丰田 凯美瑞双擎", "广汽丰田 雷凌", "广汽丰田 雷凌双擎", "广汽丰田 全新汉兰达", "广汽丰田 全新凯美瑞", "广汽丰田 逸致", "广汽丰田 致享", "广汽丰田 致炫", "雷克萨斯 全新CT", "雷克萨斯 ES", "雷克萨斯 GS", "雷克萨斯 GX", "雷克萨斯 IS", "雷克萨斯 LS", "雷克萨斯 LX", "雷克萨斯 全新NX", "雷克萨斯 RC", "雷克萨斯 RC F", "雷克萨斯 RX", "雷克萨斯 LX570", "一汽丰田 86", "一汽丰田 HIACE", "一汽丰田 RAV4", "一汽丰田 卡罗拉", "一汽丰田 卡罗拉花冠", "一汽丰田 卡罗拉双擎", "一汽丰田 柯斯达", "一汽丰田 兰德酷路泽", "一汽丰田 全新普拉多", "一汽丰田 普锐斯", "一汽丰田 普瑞维亚", "一汽丰田 全新皇冠", "一汽丰田 锐志", "一汽丰田 威驰", "一汽丰田 威驰FS"];
var handles = [$('#studyDialog'), $('#workDialog'), $('#carDialog'), $('#familyDialog')];
var tipsInfo = [
    "一路的勤学苦练",
    "同事的帮扶鼓励",
    "从未懈怠的自己",
    "与最亲爱的你携手"
];
var main = {
    mainSwiper: null,
    collectSwiper: null,
    isCollectStudy: 0,
    isCollectWork: 0,
    isCollectCar: 0,
    isCollectFamily: 0,
    isCollectAll: false,
    studyDate: null,
    workDate: null,
    carDate: null,
    familyDate: null,
    collectCount: 0,
    isScreen2Animated: false,
    isScreen3Animated: false,
    isScreen4Animated: false,
    init: function () {
        this.initSwiper();
        this.bindClicks();
        this.bindUserInfo();
    },
    initSwiper: function () {
        this.mainSwiper = new Swiper('.swiper-container', {
            direction: 'vertical',
            loop: false,
            followFinger: false,
            onSlideChangeEnd: function (swiper) {
                if (swiper.activeIndex === 0) {
                    main.mainSwiper.unlockSwipeToNext();
                }

                if (swiper.activeIndex === 1) {
                    if (!main.isScreen2Animated) {
                        main.playScreen2Ani();
                    }
                }

                if (swiper.activeIndex === 2) {
                    main.playScreen3Ani();
                }

                if (swiper.activeIndex === 3) {
                    $('.screen4').find('.btn-exchange').show().addClass('animated fadeInUp');
                } else {
                    $('.screen4').find('.btn-exchange').removeClass('animated fadeInUp').hide();
                }

                if (swiper.activeIndex === 4) {
                    $('.screen4').find('.boat').show();
                }

            }
        });
        $('.swiper-slide').width($(document.body).width()).height($(document.body).height());
    },
    bindUserInfo: function () {
        var provinces = dataList.province;
        var cities = dataList.city;
        var dealers = dataList.dealer;
        var $province = $('#province'),
            $city = $('#city'),
            $dealer = $('#dealer'),
            $favorCar = $('#favorCar');

        for(var j = 0; j < carList.length; j ++) $favorCar.append('<option>'+carList[j]+'</option>');
        $province.change(function(){
            $city.empty().html('<option>城市</option>');
            $dealer.empty().html('<option>经销商</option>');

            if($province.val() !== '省份'){
                for(var j = 0; j < cities.length; j++)
                    if(cities[j].p === $('#province').val())
                        $('#city').append('<option>'+cities[j].c+'</option>');
            }
        });

        $city.change(function(){
            $dealer.empty().html('<option>经销商</option>');
            if($city.val() !== '城市'){
                for(var j = 0; j < dealers.length; j++)
                    if(dealers[j].d === $('#city').val())
                        $('#dealer').append('<option>'+dealers[j].c +'</option>');
            }
        });
        for(var i = 0; i < provinces.length; i ++) $province.append('<option>'+provinces[i].p+'</option>');
    },
    isCollected: function () {
        return (main.isCollectStudy || main.isCollectWork || main.isCollectCar || main.isCollectFamily);
    },
    playScreen1Ani: function () {
        var $screen1 = $('.screen1');
        var $btnDetail = $screen1.find('.btnDetail');
        $screen1.find('.bg').fadeIn(700);
        setTimeout(function () { $screen1.find('.slogan').show().addClass('animated zoomIn'); }, 700);
        setTimeout(function () { $screen1.find('.content').show();}, 1400);
        setTimeout(function () {
            $screen1.find('.boat').show();
            $btnDetail.show().addClass('animated fadeInUp');
            setTimeout(function () {
                $btnDetail.removeClass('animated fadeInUp').addClass('animated pulse infinite');
            }, 800);
        }, 3000)
    },
    playScreen2Ani: function () {
        var $screen2 = $('.screen2');
        $screen2.find('.bg').fadeIn(700);
        $screen2.find('.title').show().addClass('animated fadeInUp');
        setTimeout(function () {
            $screen2.find('.info').show().addClass('animated fadeInUp');
        }, 700);
        setTimeout(function () {
            $screen2.find('.content').show();
            $('#btnMakeRoad').show().addClass(' animated fadeInUp');
            setTimeout(function () {
                $('#btnMakeRoad').removeClass('animated fadeInUp').addClass('animated pulse infinite');
                $screen2.find('.tipFrame').show();
            }, 800);
        }, 1400);
        setTimeout(function () {
            $('#study').removeClass('animated bounceInDown').addClass('animated pulse infinite');
            $('#work').removeClass('animated bounceInDown').addClass('animated pulse infinite');
            $('#car').removeClass('animated bounceInDown').addClass('animated pulse infinite');
            $('#family').removeClass('animated bounceInDown').addClass('animated pulse infinite');
        }, 3400);
        main.mainSwiper.lockSwipeToNext();
        main.isScreen2Animated = true;
    },
    playScreen3Ani: function () {
        TWEEN.removeAll();

        var num = getCountMonthsMail();
        if (!num) {
            num = 0;
        }
        var position = { num : 0 };
        var tween = new TWEEN.Tween(position).to({num: num}, 1000);
        tween.onUpdate(function(){
            $('.num').html(parseInt(this.num));
        });
        tween.onComplete(function () {
            main.mainSwiper.unlockSwipeToNext();
        });
        tween.start();
        main.isScreen3Animated = true;
        main.mainSwiper.lockSwipeToNext();

        requestAnimationFrame(animate);
        function animate() {
            requestAnimationFrame(animate);
            TWEEN.update();
        }
    },
    playSlide2Ani: function (handler) {
        handler.find('.slide-2').show();
        handler.find('.div-1').show();
        setTimeout(function () {
            handler.find('.s-1').show().addClass('animated fadeInUp');
            setTimeout(function () {
                handler.find('.s-1').css({'filter':'grayscale(0)', '-webkit-filter': 'grayscale(0)'});
            }, 700);
        }, 100);
        setTimeout(function () {
            handler.find('.s-2').show().addClass('animated fadeInUp');
            setTimeout(function () {
                handler.find('.s-2').css({'filter':'grayscale(0)', '-webkit-filter': 'grayscale(0)'});
            }, 700);
        }, 500);
        setTimeout(function () {
            handler.find('.s-3').show().addClass('animated fadeInUp');
            setTimeout(function () {
                handler.find('.s-3').css({'filter':'grayscale(0)', '-webkit-filter': 'grayscale(0)'});
            }, 700);
        }, 1300);
        setTimeout(function () {
            handler.find('.div-2').show();
        }, 2000);

        setTimeout(function () {
            if (main.collectCount >= 4) {
                handler.find('.btnContinue').hide();
                handler.find('.btnMyWay').addClass('centerBtn');
                main.showTipDialog('您的幸福里程已收集完，','点击"下一步"','前往兑换好礼', false);
            }
            handler.find('.btnFrame2').show().addClass('animated fadeInUp');
        }, 2400);
    },
    bindClicks: function () {
        $('#btnDetail').click(function () {
            main.mainSwiper.slideNext();
        });
        $('#btnSubmit').click(function () {
            main.submitInfo();
        });
        $('#btnActRule').click(showActRuleDialog);
        $('#btnMakeRoad').click(main.clickMakeRoad);
    },
    clickMakeRoad: function () {
        if (main.isCollected()) {
            main.mainSwiper.unlockSwipeToNext();
            main.convertPosterInfo();
            main.mainSwiper.slideNext();
        } else {
            main.showTipDialog('您还未收集幸福里程，','至少要收集一项，','才可参与活动', true);
        }
    },
    playStudy1Ani: function (handle) {
        handle.fadeIn(300);
        handle.find('.pen').show().addClass('animated fadeInDown');
        setTimeout(function () {
            handle.find('.mist-1').fadeIn(300);
            handle.find('.mist-2').fadeIn(300);
        }, 700);
        setTimeout(function () {
            handle.find('.qiu').show().addClass('animated fadeInUp');
            setTimeout(function () {
                handle.find('.xue').show().addClass('animated fadeInUp');
            }, 500);
        }, 1000);
        setTimeout(function () {
            handle.find('.inputDiv').show().addClass('animated zoomIn');
            setTimeout(function () {
                handle.find('.btnFrame1').show().addClass('animated fadeInUp');
            }, 500);
        }, 1800);
    },
    playWork1Ani: function (handle) {
        handle.fadeIn(300);
        handle.find('.bamboo').show().addClass('animated fadeInRight');
        setTimeout(function () {
            handle.find('.gong').show().addClass('animated fadeInUp');
            setTimeout(function () {
                handle.find('.zuo').show().addClass('animated fadeInUp');
            }, 500);
        }, 1000);

        setTimeout(function () {
            handle.find('.qiu').show().addClass('animated fadeInUp');
            setTimeout(function () {
                handle.find('.xue').show().addClass('animated fadeInUp');
            }, 500);
        }, 1000);
        setTimeout(function () {
            handle.find('.inputDiv').show().addClass('animated zoomIn');
            setTimeout(function () {
                handle.find('.btnFrame1').show().addClass('animated fadeInUp');
            }, 500);
        }, 1800);
    },
    playCar1Ani: function (handle) {
        handle.fadeIn(300);
        handle.find('.carBg').show().addClass('animated zoomIn');
        setTimeout(function () {
            handle.find('.car').show().addClass('animated zoomIn');
        }, 500);
        setTimeout(function () {
            handle.find('.mai').show().addClass('animated fadeInUp');
            setTimeout(function () {
                handle.find('.che').show().addClass('animated fadeInUp');
            }, 500);
        }, 1000);

        setTimeout(function () {
            handle.find('.qiu').show().addClass('animated fadeInUp');
            setTimeout(function () {
                handle.find('.xue').show().addClass('animated fadeInUp');
            }, 500);
        }, 1000);
        setTimeout(function () {
            handle.find('.inputDiv').show().addClass('animated zoomIn');
            setTimeout(function () {
                handle.find('.btnFrame1').show().addClass('animated fadeInUp');
            }, 500);
        }, 1800);
    },
    playFamily1Ani: function (handle) {
        handle.fadeIn(300);
        handle.find('.campus').show().addClass('animated fadeInLeft');
        setTimeout(function () {
            handle.find('.flower1').show().addClass('animated fadeInLeft');
        }, 300);
        setTimeout(function () {
            handle.find('.flower2').show().addClass('animated fadeInRight');
        }, 500);
        setTimeout(function () {
            handle.find('.cheng').show().addClass('animated fadeInUp');
            setTimeout(function () {
                handle.find('.jia').show().addClass('animated fadeInUp');
            }, 500);
        }, 1200);

        setTimeout(function () {
            handle.find('.qiu').show().addClass('animated fadeInUp');
            setTimeout(function () {
                handle.find('.xue').show().addClass('animated fadeInUp');
            }, 500);
        }, 1700);
        setTimeout(function () {
            handle.find('.inputDiv').show().addClass('animated zoomIn');
            setTimeout(function () {
                handle.find('.btnFrame1').show().addClass('animated fadeInUp');
            }, 500);
        }, 2200);
    },
    updateCollectState: function () {
        $('#study').attr('src', main.isCollectStudy?'src/2-study-selected.png':'src/2-study.png');
        $('#work').attr('src', main.isCollectWork?'src/2-work-selected.png':'src/2-work.png');
        $('#car').attr('src', main.isCollectCar?'src/2-car-selected.png':'src/2-car.png');
        $('#family').attr('src', main.isCollectFamily?'src/2-family-selected.png':'src/2-family.png');
        if (main.isCollected()) {
            $('#btnMakeRoad').addClass('btnHover');
        }
        if (main.collectCount >= 4) {
            $('#line').show();
        }
        main.convertPosterInfo();
    },
    convertPosterInfo: function () {
        if (main.collectCount === 0) return;
        var $poster = $('#poster');
        if (main.isCollectStudy) {
            $poster.find('.study').attr('src', 'src/6-study.png');
            $poster.find('.l1').css('color', '#000');
            $poster.find('.studyDate').html(main.studyDate.replace('-', '年') + '月');
        }
        if (main.isCollectWork) {
            $poster.find('.work').attr('src', 'src/6-work.png');
            $poster.find('.l2').css('color', '#000');
            $poster.find('.workDate').html(main.workDate.replace('-', '年') + '月');
        }
        if (main.isCollectCar) {
            $poster.find('.car').attr('src', 'src/6-car.png');
            $poster.find('.l3').css('color', '#000');
            $poster.find('.carDate').html(main.carDate.replace('-', '年') + '月');
        }
        if (main.isCollectFamily) {
            $poster.find('.family').attr('src', 'src/6-family.png');
            $poster.find('.l4').css('color', '#000');
            $poster.find('.familyDate').html(main.familyDate.replace('-', '年') + '月');
        }

        $poster.find('.tipInfo').html(main.getTipInfo());
    },
    getTipInfo: function () {
        var mail = getCountMonthsMail();
        if (!mail) {
            mail = 0;
        }
        var info = '我已经收集到' + mail + '公里幸福里程，感谢您的陪伴，';
        if (main.isCollectStudy) {
            info += tipsInfo[0];
        }
        if (main.isCollectWork) {
            info += main.isCollectStudy?'、':'';
            info += tipsInfo[1];
        }
        if (main.isCollectCar) {
            info += (main.isCollectWork ||main.isCollectStudy) ?'、':'';
            info += tipsInfo[2];
        }
        if (main.isCollectFamily) {
            info += (main.isCollectWork ||main.isCollectStudy || main.isCollectCar)?'、':'';
            info += tipsInfo[3];
        }
        info += '。谢谢你们对我的信赖，未来刚刚开始。';
        return info;
    },
    // saveDivToPoster: function () {
    //     var $poster = $("#poster");
    //     var w = $poster.width();
    //     var h = $poster.height();
    //
    //     //要将 canvas 的宽高设置成容器宽高的 3 倍
    //     var canvas = document.createElement("canvas");
    //     var scaleBy = getPixelRatio(canvas.getContext('2d'));
    //     canvas.width = w * scaleBy;
    //     canvas.height = h * scaleBy;
    //     canvas.style.width = w + "px";
    //     canvas.style.height = h + "px";
    //     var context = canvas.getContext("2d");
    //     //然后将画布缩放，将图像放大两倍画到画布上
    //     context.scale(scaleBy, scaleBy);
    //
    //     html2canvas(document.getElementById('poster'), {
    //         canvas: canvas,
    //         allowTaint: true,
    //         taintTest: false,
    //         onrendered: function (canvas) {
    //             //生成base64图片数据
    //             var dataUrl = canvas.toDataURL("image/png");
    //             $('#posterImg').attr('src', dataUrl);
    //         }
    //     });
    // },
    submitInfo: function () {
        var name, mobile, car, province,city, dealer, IDCard, email;
        name=trim($("input[name='name']").val());
        mobile=trim($("input[name='mobile']").val());
        car =trim($("#favorCar").find("option:selected").text());
        province =trim($("#province").find("option:selected").text());
        city =trim($("#city").find("option:selected").text());
        dealer=trim($("#dealer").find("option:selected").text());
        IDCard=trim($("input[name='IDCard']").val());
        email=trim($("input[name='email']").val());

        if(isNullOrEmpty(name)) {
            alert("请填写姓名!");
            return;
        }else if(!checkIsMobile(mobile)){
            alert("请输入正确的手机号!");
            return;
        }
        if(car.indexOf("意向车型")>=0){
            car = '';
            // alert("请选择意向车型");
            // return;
        }
        if(province.indexOf("省份")>=0){
            province = '';
            // alert("请选择省份");
            // return;
        }
        if(city.indexOf("城市")>=0){
            city = '';
            // alert("请选择城市");
            // return;
        }
        if(dealer.indexOf("经销商")>=0){
            dealer = '';
            // alert("请选择经销商");
            // return;
        }

        var url = host + 'ftMovie/luckyDraw';
        $.ajax({
            type: "POST",
            url: url,
            data: {
                'name': name,
                'mobile': mobile,
                'car': car,
                'province': province,
                'city': city,
                'dealer': dealer,
                'flag':'ft_movie',
                'IDCard': IDCard,
                'email': email
            },
            dataType: "json",
            success: function(data){
                var response = eval('(data)');
                if (response.success) {
                    var prize = parseInt(response.data.prize);
                    $('#resultImg').attr('src', prize?'src/7-result-10.png':'src/7-result-none.png');
                    showNextPage();

                } else {
                    // alert(response.message);
                    main.showTipDialog('您今日已参与抽奖，', '请明日继续参加，', '和好友一起兑换旅程好礼！', false);
                }
            },
            error: function(data){
                alert("加载超时,请检查网络连接");
            }
        });
    },
    getUserInfo: function (code, callBack) {
        $.ajax({
            type: 'get',
            url: host + 'wx/userInfo/'+code,
            success:function(json){
                if(json.success){
                    var data = json.data;
                    $('.userName').html(data.nickname);
                    $('.headImg').attr('src', 'http://wx.bjczxda.com/' + data.headimglocal);
                    callBack&&callBack();
                }
            },
            error:function(e){
                alert("获取信息失败，可能原因: 授权超时");
                // alert(e.responseJSON.message);
            }
        });
    },
    showTipDialog: function (p1,p2,p3, isGray) {
        var $tipResultDialog = $('#tipResultDialog');
        $tipResultDialog.find('.circle').removeClass('circle-gray');
        $tipResultDialog.find('.p1').html(p1);
        $tipResultDialog.find('.p2').html(p2);
        $tipResultDialog.find('.p3').html(p3);
        if (isGray) {
            $tipResultDialog.find('.circle').addClass('circle-gray');
        }
        $tipResultDialog.fadeIn(300).click(function () {
            $(this).fadeOut(300);
        });
    }
};

function showCollectDialog(index) {
    var handle = handles[index];
    if (index === 0 && !main.isCollectStudy) {
        main.playStudy1Ani(handle);
    }
    if (index === 1 && !main.isCollectWork) {
        main.playWork1Ani(handle);
    }
    if (index === 2 && !main.isCollectCar) {
        main.playCar1Ani(handle);
    }
    if (index === 3 && !main.isCollectFamily) {
        main.playFamily1Ani(handle);
    }
}

function gotoSkip(index) {
    var handle = handles[index];
    handle.fadeOut(300);
}

function gotoSubmit(index) {
    var handle = handles[index];
    var inputVal = handle.find('input[name="user_date"]').val();
    if (index === 0) {
        main.studyDate = inputVal;
        main.isCollectStudy = 1;
    } else if (index === 1) {
        main.workDate = inputVal;
        main.isCollectWork = 1;
    } else if (index === 2) {
        main.carDate = inputVal;
        main.isCollectCar = 1;
    } else if (index === 3) {
        main.familyDate = inputVal;
        main.isCollectFamily = 1;
    }
    main.collectCount = main.isCollectStudy + main.isCollectWork + main.isCollectCar + main.isCollectFamily;
    main.updateCollectState();
    handle.find('.slide-1').fadeOut(300);
    main.playSlide2Ani(handle);
}

function gotoContinue(index) {
    gotoSkip(index);
    if (main.collectCount >= 4) {
        setTimeout(main.clickMakeRoad, 300);
    }
}

function gotoMyway(index) {
    gotoSkip(index);
    setTimeout(showNextPage, 300);
}

/*
* 计算里程数
*/
function getCountMonthsMail() {
    var months = 0;
    var dateNow = new Date();
    if (main.isCollectStudy) {
        months += getDifferMonths(main.studyDate, dateNow);
    }
    if (main.isCollectWork) {
        months += getDifferMonths(main.workDate, dateNow);
    }
    if (main.isCollectCar) {
        months += getDifferMonths(main.carDate, dateNow);
    }
    if (main.isCollectFamily) {
        months += getDifferMonths(main.familyDate, dateNow);
    }
    return months * 500;
}

function showActRuleDialog() {
    var $actRuleDialog = $('#actRuleDialog');
    $actRuleDialog.fadeIn(300).click(function () {
        $actRuleDialog.find('.content').removeClass('animated bounceInUp').addClass('animated bounceOutDown');
        setTimeout(function () {
            $actRuleDialog.find('.content').removeClass('animated bounceOutDown');
            $actRuleDialog.hide();
        }, 700);
    });
    $actRuleDialog.find('.content').show().addClass('animated bounceInUp');
}

function showShareTipDialog() {
    // $('#shareTipDialog').fadeIn(300).click(function () {
    //     $(this).fadeOut(300);
    // });
}

function showNextPage() {
    main.mainSwiper.unlockSwipeToNext();
    main.mainSwiper.slideNext();
    main.mainSwiper.lockSwipeToNext();
}

function getDifferMonths(date, dateNow) {
    var year = parseInt(date.substr(0, 4));
    var month = parseInt(date.substr(5, 2));
    return ((dateNow.getFullYear() - year) * 12 + (dateNow.getMonth() + 1) - month);
}