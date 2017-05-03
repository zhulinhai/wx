/**
 * Created by luhao on 2017/4/17.
 */
(function(){
    var host = 'http://api.bjczxda.com/api/';
    var http = new Http(host);
    var flag = 'MONDEO_20170501';
    var store = {
        lives:0, //直播人气数
        audiences:0, //同时在线人数
        tricyclic_turns:0, //三环圈数
        tetracyclic_turns:0, //四环圈数
        pentacyclic_turns:0, //五环圈数
        used_gasoline:0, // 三环已使用油量
        used_gasonline_tera:0, // 四环已使用油量
        used_gasonline_penta:0, // 武汉已使用油量
        used_time_tri:0, // 已挑战时间
        support:0, //支持挑战成功人数
        nonsupport:0, //不支持人数
        active_state:0 // 活动状态 0：活动前期 1：活动中期（直播） 2：活动后期（直播结束）
    };

    /**
     * videojs 对象
     * @type {null}
     */
    var player = null;

    /**
     * websocket server address
     * @type {string}
     */
    var websocket_url =  'ws://node.bjczxda.com';
    var socket = null;



    /**
     * 忽略部分ajax请求
     * @type {{ajax: {ignoreURLs: *[]}}}
     */
    Pace.options = {
        ajax: {
            ignoreURLs: [host+'h5/storeComment'
                , host+'h5/storeProposer']
        }
    }

    /**
     * 完成加载
     */
    Pace.once('hide', function(e){

        bindEvent();

        player = videojs('my-player',{
            controls: true,
            autoplay: false,
            loop:true,
            preload: 'auto'
        });

        player.src('http://vedio.yunmfang.com/K6015-480p-16-9.mp4');

        // connect websocket server
        socket = io.connect(websocket_url);

        //listen the channel broadcast
        socket.on('live_channel_'+flag , function(data){
            console.log(data);
            $('#code').html(data.props);
        });

        //player.on('ended',function(){
        //    alert('play ended!');
        //});
    });

    function bindEvent(){

        $('#submitComment').hammer().bind('tap',function(e){
            var params = $('form:first').serialize();
            http.ajaxRequest({
                type:'GET',
                uri:'h5/storeComment?' + params + '&flag='+flag,
                success:function(json){
                    alert(json.data);
                },
                error:function(e){
                    if(e.responseJSON){
                        alert(e.responseJSON.message);
                    }else
                        alert('您已参加活动，请继续浏览后续内容!');
                }
            });
        });

        $('#submitApply').hammer().bind('tap',function(e){
            var params = $('form:last').serialize();
            http.ajaxRequest({
                type:'GET',
                uri:'h5/storeProposer?' + params + '&flag='+flag,
                success:function(json){
                    alert(json.data);
                },
                error:function(e){
                    if(e.responseJSON){
                        alert(e.responseJSON.message);
                    }else
                        alert('您已参加活动，请继续浏览后续内容!');
                }
            });
        });
    }
})($)