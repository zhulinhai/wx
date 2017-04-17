#蒙迪欧H5
#全局变量：
{
   lives 直播人气数
   audiences 同时在线人数
   tricyclic_turns 三环圈数
   tetracyclic_turns 四环圈数
   pentacyclic_turns 五环圈数
   used_gasoline 已使用油量
   pastTime 已挑战时间
   support 支持挑战成功人数
   nonsupport 不支持人数
}
#启动服务器定时器 systemctl stop crond.service
#启动websocket服务器 pm2 start server.js