/**
 * Created by luhao on 2016/12/14.
 */
(function ($){

    var appkey = 'm7ua80gbmysmm';
    var RoomId = '';
    var dealMessage;

    // 初始化
    // RongIMClient.init(appkey, [dataAccessProvider],[options]);
    // appkey:官网注册的appkey。
    // dataAccessProvider:自定义本地存储方案的实例，不传默认为内存存储，自定义需要实现WebSQLDataProvider所有的方法，此参数必须是传入实例后的对象。
    RongIMClient.init(appkey);

    // 设置连接监听状态 （ status 标识当前连接状态 ）
    // 连接状态监听器
    RongIMClient.setConnectionStatusListener({
        onChanged: function (status) {
            switch (status) {
                case RongIMLib.ConnectionStatus.CONNECTED:
                    console.log('链接成功');
                    joinChatRoom();
                    break;
                case RongIMLib.ConnectionStatus.CONNECTING:
                    console.log('正在链接');
                    break;
                case RongIMLib.ConnectionStatus.DISCONNECTED:
                    console.log('断开连接');
                    quitChatRoom();
                    break;
                case RongIMLib.ConnectionStatus.KICKED_OFFLINE_BY_OTHER_CLIENT:
                    console.log('其他设备登录');
                    break;
                case RongIMLib.ConnectionStatus.DOMAIN_INCORRECT:
                    console.log('域名不正确');
                    break;
                case RongIMLib.ConnectionStatus.NETWORK_UNAVAILABLE:
                    console.log('网络不可用');
                    break;
            }
        }});

    // 消息监听器
    RongIMClient.setOnReceiveMessageListener({
        // 接收到的消息
        onReceived: function (message) {
            // 判断消息类型
            switch(message.messageType){
                case RongIMClient.MessageType.TextMessage:
                    // message.content.content => 消息内容
                    //var html = '<div class="tt"><p class="name">'+ message.content.extra +'</p><p class="content">'+ message.content.content +'</p></div>';
                    //$('.text').append(html);
                    dealMessage(message);
                    console.log(message.content.content);
                    break;
                case RongIMClient.MessageType.VoiceMessage:
                    // 对声音进行预加载
                    // message.content.content 格式为 AMR 格式的 base64 码
                    break;
                case RongIMClient.MessageType.ImageMessage:
                    // message.content.content => 图片缩略图 base64。
                    // message.content.imageUri => 原图 URL。
                    break;
                case RongIMClient.MessageType.DiscussionNotificationMessage:
                    // message.content.extension => 讨论组中的人员。
                    break;
                case RongIMClient.MessageType.LocationMessage:
                    // message.content.latiude => 纬度。
                    // message.content.longitude => 经度。
                    // message.content.content => 位置图片 base64。
                    break;
                case RongIMClient.MessageType.RichContentMessage:
                    // message.content.content => 文本消息内容。
                    // message.content.imageUri => 图片 base64。
                    // message.content.url => 原图 URL。
                    break;
                case RongIMClient.MessageType.InformationNotificationMessage:
                    // do something...
                    break;
                case RongIMClient.MessageType.ContactNotificationMessage:
                    // do something...
                    break;
                case RongIMClient.MessageType.ProfileNotificationMessage:
                    // do something...
                    break;
                case RongIMClient.MessageType.CommandNotificationMessage:
                    // do something...
                    break;
                case RongIMClient.MessageType.CommandMessage:
                    // do something...
                    break;
                case RongIMClient.MessageType.UnknownMessage:
                    // do something...
                    break;
                default:
                // do something...
            }
        }
    });

    /**
     * 加入聊天室
     */
    function joinChatRoom(){
        var count = 50;// 拉取最近聊天最多 50 条。
        RongIMClient.getInstance().joinChatRoom(RoomId, count, {
            onSuccess: function() {
                // 加入聊天室成功。
                console.log('加入聊天室成功');
            },
            onError: function(error) {
                // 加入聊天室失败
                console.log('error');
            }
        });
    }

    /**
     * 退出聊天室
     */
    function quitChatRoom(){
        RongIMClient.getInstance().quitChatRoom(RoomId, {
            onSuccess: function() {
                // 退出聊天室成功。
                console.log('退出聊天室成功');
            },
            onError: function(error) {
                // 退出聊天室失败。
            }
        });
    }

    return {

        connectServer:function(token){

            RongIMClient.connect(token, {
                onSuccess: function(userId) {
                    console.log("Login successfully." + userId);
                },
                onTokenIncorrect: function() {
                    console.log('token无效');
                },
                onError:function(errorCode){
                    var info = '';
                    switch (errorCode) {
                        case RongIMLib.ErrorCode.TIMEOUT:
                            info = '超时';
                            break;
                        case RongIMLib.ErrorCode.UNKNOWN_ERROR:
                            info = '未知错误';
                            break;
                        case RongIMLib.ErrorCode.UNACCEPTABLE_PaROTOCOL_VERSION:
                            info = '不可接受的协议版本';
                            break;
                        case RongIMLib.ErrorCode.IDENTIFIER_REJECTED:
                            info = 'appkey不正确';
                            break;
                        case RongIMLib.ErrorCode.SERVER_UNAVAILABLE:
                            info = '服务器不可用';
                            break;
                    }
                    console.log(errorCode);
                }
            });
        },

        sendMessage:function(msg,userName,roomId,callback){

            var sMsg = new RongIMLib.TextMessage({content:msg, extra:userName});
            var conversationtype = RongIMLib.ConversationType.CHATROOM ; // 聊天室,其他会话选择相应的消息类型即可。
            /**
             * 全局保存roomID
             */
            RoomId = roomId;
            dealMessage = callback;

            RongIMClient.getInstance().sendMessage(conversationtype, roomId, sMsg, {
                    onSuccess: function (message) {
                        //message 为发送的消息对象并且包含服务器返回的消息唯一Id和发送消息时间戳
                        callback(message);
                        console.log("Send successfully");
                    },
                    onError: function (errorCode,message) {
                        var info = '';
                        switch (errorCode) {
                            case RongIMLib.ErrorCode.TIMEOUT:
                                info = '超时';
                                break;
                            case RongIMLib.ErrorCode.UNKNOWN_ERROR:
                                info = '未知错误';
                                break;
                            case RongIMLib.ErrorCode.REJECTED_BY_BLACKLIST:
                                info = '在黑名单中，无法向对方发送消息';
                                break;
                            case RongIMLib.ErrorCode.NOT_IN_DISCUSSION:
                                info = '不在讨论组中';
                                break;
                            case RongIMLib.ErrorCode.NOT_IN_GROUP:
                                info = '不在群组中';
                                break;
                            case RongIMLib.ErrorCode.NOT_IN_CHATROOM:
                                info = '不在聊天室中';
                                break;
                            default :
                                info = x;
                                break;
                        }
                        console.log('发送失败:' + info);
                    }
                }
            );
        }
    };
})($);