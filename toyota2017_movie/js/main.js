var host = 'http://api.bjczxda.com/api/'; //'http://localhost:8000/api/';//
var carList = ["广汽丰田 埃尔法", "广汽丰田 凯美瑞双擎", "广汽丰田 雷凌", "广汽丰田 雷凌双擎", "广汽丰田 全新汉兰达", "广汽丰田 全新凯美瑞", "广汽丰田 逸致", "广汽丰田 致享", "广汽丰田 致炫", "雷克萨斯 全新CT", "雷克萨斯 ES", "雷克萨斯 GS", "雷克萨斯 GX", "雷克萨斯 IS", "雷克萨斯 LS", "雷克萨斯 LX", "雷克萨斯 全新NX", "雷克萨斯 RC", "雷克萨斯 RC F", "雷克萨斯 RX", "雷克萨斯 LX570", "一汽丰田 86", "一汽丰田 HIACE", "一汽丰田 RAV4", "一汽丰田 卡罗拉", "一汽丰田 卡罗拉花冠", "一汽丰田 卡罗拉双擎", "一汽丰田 柯斯达", "一汽丰田 兰德酷路泽", "一汽丰田 全新普拉多", "一汽丰田 普锐斯", "一汽丰田 普瑞维亚", "一汽丰田 全新皇冠", "一汽丰田 锐志", "一汽丰田 威驰", "一汽丰田 威驰FS"];
var tipsInfo = [
    "我已经收集到50万公里幸福里程，感谢爸妈的陪伴，只愿你们身体健康，未来我们还要一起走。",
    "我已经收集到100万公里幸福里程，感谢爸妈的陪伴，感恩同事的帮扶，未来我们还要一起走。",
    "我已经收集到150万公里幸福里程，感谢爸妈的陪伴，感恩同事的帮扶，还有从未懈怠过的自己，未来我依然会继续努力。",
    "我已经收集到200万公里幸福里程，感谢爸妈的陪伴，感恩同事的帮扶，以及从未懈怠过的自己，还有，亲爱的，谢谢你对我的信赖，未来刚刚开始。"
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
                if (swiper.activeIndex == 0) {
                    main.mainSwiper.unlockSwipeToNext();
                }

                if (swiper.activeIndex == 1) {
                    if (!main.isScreen2Animated) {
                        main.playScreen2Ani();
                    }
                }

                if (swiper.activeIndex == 2) {
                    main.playScreen3Ani();
                } else {
                    $('.screen3').find('.btnFrame').removeClass('animated fadeInUp').hide();
                }

                if (swiper.activeIndex == 3) {
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

            if($province.val() != '省份'){
                for(var j = 0; j < cities.length; j++)
                    if(cities[j].p == $('#province').val())
                        $('#city').append('<option>'+cities[j].c+'</option>');
            }
        });

        $city.change(function(){
            $dealer.empty().html('<option>经销商</option>');
            if($city.val() != '城市'){
                for(var j = 0; j < dealers.length; j++)
                    if(dealers[j].d == $('#city').val())
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
        $screen2.find('.title').show().addClass('animated fadeInUp');
        setTimeout(function () {
            $screen2.find('.info').show().addClass('animated fadeInUp');
        }, 700);
        setTimeout(function () {
            $screen2.find('.content').show();
            $('#btnMakeRoad').show().addClass(' animated fadeInUp');
            setTimeout(function () {
                $('#btnMakeRoad').removeClass('animated fadeInUp').addClass('animated pulse infinite');
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
        $('.screen3').find('.btnFrame').show().addClass('animated fadeInUp');
    },
    playSlide2Ani: function (handler) {
        handler.find('.slide-2').show();
        handler.find('.div-1').show();
        setTimeout(function () {
            handler.find('.s-1').fadeIn(300);
            setTimeout(function () {
                handler.find('.s-1').css({'filter':'grayscale(0)', '-webkit-filter': 'grayscale(0)'});
            }, 700);
        }, 100);
        setTimeout(function () {
            handler.find('.s-2').fadeIn(300);
            setTimeout(function () {
                handler.find('.s-2').css({'filter':'grayscale(0)', '-webkit-filter': 'grayscale(0)'});
            }, 700);
        }, 500);
        setTimeout(function () {
            handler.find('.s-3').fadeIn(300);
            setTimeout(function () {
                handler.find('.s-3').css({'filter':'grayscale(0)', '-webkit-filter': 'grayscale(0)'});
            }, 700);
        }, 1300);
        setTimeout(function () {
            handler.find('.div-2').show();
        }, 2000);

        setTimeout(function () {
            handler.find('.btnCollect').show().addClass(' animated fadeInUp');
            setTimeout(function () {
                handler.find('.btnCollect').removeClass('animated fadeInUp').addClass('animated pulse infinite');
            }, 800);
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
        $('#btnShare').click(function () {
            $('#shareTipDialog').show().click(function () {
                $(this).hide();
            });
        });
        $('#btnMakeRoad').click(main.clickMakeRoad);
        $('#btnExchange').click(function () {
            main.mainSwiper.slideNext();
        });

        var $studyDialog = $('#studyDialog'), $workDialog = $('#workDialog'),$carDialog = $('#carDialog'), $familyDialog = $('#familyDialog');
        /*求学对话框*/
        $('#study').click(function () {
            if (main.isCollectStudy) {
                return;
            }

            main.playStudy1Ani($studyDialog);
            $studyDialog.find('.btnSkip').click(function () {
                $studyDialog.fadeOut(300);
            });

            $studyDialog.find('.btnNext').click(function () {
                main.studyDate = $studyDialog.find('input[name="user_date"]').val();
                main.playSlide2Ani($studyDialog);
                $studyDialog.find('.slide-1').fadeOut(300);
            });

            $studyDialog.find('.btnCollect').click(function () {
                $studyDialog.fadeOut(300);
                main.isCollectStudy = 1;
                main.showResultDialog();
            });
        });

        /*工作对话框*/
        $('#work').click(function () {
            if (main.isCollectWork) {
                return;
            }

            main.playWork1Ani($workDialog);
            $workDialog.find('.btnSkip').click(function () {
                $workDialog.fadeOut(300);
            });

            $workDialog.find('.btnNext').click(function () {
                main.workDate = $workDialog.find('input[name="user_date"]').val();
                main.playSlide2Ani($workDialog);
                $workDialog.find('.slide-1').fadeOut(300);
            });

            $workDialog.find('.btnCollect').click(function () {
                $workDialog.fadeOut(300);
                main.isCollectWork = 1;
                main.showResultDialog();
            });
        });

        /*车辆对话框*/
        $('#car').click(function () {
            if (main.isCollectCar) {
                return;
            }

            main.playCar1Ani($carDialog);
            $carDialog.find('.btnSkip').click(function () {
                $carDialog.fadeOut(300);
            });

            $carDialog.find('.btnNext').click(function () {
                main.carDate = $carDialog.find('input[name="user_date"]').val();
                main.playSlide2Ani($carDialog);
                $carDialog.find('.slide-1').fadeOut(300);
            });

            $carDialog.find('.btnCollect').click(function () {
                $carDialog.fadeOut(300);
                main.isCollectCar = 1;
                main.showResultDialog();
            });
        });

        /*家庭对话框*/
        $('#family').click(function () {
            if (main.isCollectFamily) {
                return;
            }

            main.playFamily1Ani($familyDialog);
            $familyDialog.find('.btnSkip').click(function () {
                $familyDialog.fadeOut(300);
            });

            $familyDialog.find('.btnNext').click(function () {
                main.familyDate = $familyDialog.find('input[name="user_date"]').val();
                main.playSlide2Ani($familyDialog);
                $familyDialog.find('.slide-1').fadeOut(300);
            });

            $familyDialog.find('.btnCollect').click(function () {
                $familyDialog.fadeOut(300);
                main.isCollectFamily = 1;
                main.showResultDialog();
            });
        });

        var $resultDialog = $('#resultDialog');
        $('.btnContinue').click(function () {
            main.updateCollectState();
            $resultDialog.fadeOut(300);
            if (main.collectCount >= 4) {
                setTimeout(main.clickMakeRoad, 300);
            }
        });
        $('.btnMyWay').click(function () {
            main.updateCollectState();
            $resultDialog.fadeOut(300);
        });
    },
    clickMakeRoad: function () {
        if (main.isCollected()) {
            main.mainSwiper.unlockSwipeToNext();
            main.convertPosterInfo();
            main.mainSwiper.slideNext();
        }
    },
    playStudy1Ani: function (handle) {
        handle.fadeIn(300);
        handle.find('.pen').show().addClass('animated bounceInDown');
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
    },
    showResultDialog: function () {
        main.collectCount = main.isCollectStudy + main.isCollectWork + main.isCollectCar + main.isCollectFamily;
        var imgList = ['src/5-50.png', 'src/5-100.png', 'src/5-150.png', 'src/5-200.png'];
        var $resultDialog = $('#resultDialog');
        $resultDialog.find('.num').attr('src', imgList[main.collectCount - 1]);
        // 更新弹出框内容
        $resultDialog.fadeIn(300);
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
    },
    convertPosterInfo: function () {
        if (main.collectCount == 0) return;
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
        $poster.find('.tipInfo').html(tipsInfo[main.collectCount - 1]);
        main.saveDivToPoster();
    },
    saveDivToPoster: function () {
        var $poster = $("#poster");
        var w = $poster.width();
        var h = $poster.height();

        //要将 canvas 的宽高设置成容器宽高的 3 倍
        var canvas = document.createElement("canvas");
        var scaleBy = getPixelRatio(canvas.getContext('2d'));
        canvas.width = w * scaleBy;
        canvas.height = h * scaleBy;
        canvas.style.width = w + "px";
        canvas.style.height = h + "px";
        var context = canvas.getContext("2d");
        //然后将画布缩放，将图像放大两倍画到画布上
        context.scale(scaleBy, scaleBy);

        html2canvas(document.getElementById('poster'), {
            canvas: canvas,
            allowTaint: true,
            taintTest: false,
            onrendered: function (canvas) {
                //生成base64图片数据
                var dataUrl = canvas.toDataURL("image/png");
                $('#posterImg').attr('src', dataUrl);
            }
        });
    },
    submitInfo: function () {
        var name, mobile, car, province,city, dealer;
        name=trim($("input[name='name']").val());
        mobile=trim($("input[name='mobile']").val());
        car =trim($("#favorCar").find("option:selected").text());
        province =trim($("#province").find("option:selected").text());
        city =trim($("#city").find("option:selected").text());
        dealer=trim($("#dealer").find("option:selected").text());

        if(isNullOrEmpty(name)) {
            alert("请填写姓名!");
            return;
        }else if(!checkIsMobile(mobile)){
            alert("请输入正确的手机号!");
            return;
        }else if(car.indexOf("意向车型")>=0){
            alert("请选择意向车型");
            return;
        }else if(province.indexOf("省份")>=0){
            alert("请选择省份");
            return;
        }else if(city.indexOf("城市")>=0){
            alert("请选择城市");
            return;
        }else if(dealer.indexOf("经销商")>=0){
            alert("请选择经销商");
            return;
        }

        var url = host + 'ftMovie/luckyDraw';
        $.ajax({
            type: "post",
            url: url,
            data: {
                'name': name,
                'mobile': mobile,
                'car': car,
                'province': province,
                'city': city,
                'dealer': dealer,
                'flag':'ft_movie'
            },
            dataType: "json",
            success: function(data){
                var response = eval('(data)');
                if (response.success) {
                    var prize = parseInt(response.data.prize);
                    $('#resultImg').attr('src', prize?'src/7-result-10.png':'src/7-result-none.png');
                    $('#tipResultDialog').show().click(function () {
                        $(this).hide();
                    });
                } else {
                    alert(response.message);
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
                    $('.headImg').attr('src', 'http://api.bjczxda.com/' + data.headimglocal);
                    callBack&&callBack();
                }
            },
            error:function(e){
                alert(e.responseJSON.message);
            }
        });
    },
    getCrossBase64Img: function (url) {
        var img = new Image();
        img.crossOrigin = "Anonymous"; //注意存放顺序
        img.src = url;
        img.onload = function () {
            var canvas = document.createElement('canvasImg');
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, img.width, img.height);
            return canvas.toDataURL("image/png");
        };

        img.onerror = function () {
            return '';
        }
    }
};

function showActRuleDialog() {
    $('#actRuleDialog').show().click(function () {
        $(this).hide();
    });
}

