/**
 * Created by luhao on 2016/12/16.
 */
var MsgRow = React.createClass({
  render:function(){
      return (<div>
            <p>{this.props.name}</p>
            <p>{this.props.content}</p>
          </div>);
  }
});

//var MsgSendBtn = React.createClass({
//    getInitialState:function(){
//        return { messages:messages};},
//
//    handClick:function(){
//        messages.push({name:"鲁昊",content:'测试按钮'});
//        this.setState({messages:messages});
//    },
//    render:function(){
//        return (<div>
//            <input type="text" name="msg"/><input type="button" value="发送" onClick={this.handClick}/>
//        </div>);
//    }
//});

var MsgArea = React.createClass({

    getInitialState:function(){
        return { messages:messages};},

    handClick:function(){
        messages.push({name:"鲁昊",content:'测试按钮'});
        this.setState({messages:messages});
    },

    render:function(){
        var rows = [];
        this.props.messages.forEach(function(msg){
            rows.push(<MsgRow name={msg.name} content={msg.content} />);
        });
        return (<div>
          <p>====== 聊天区域 =======</p>
            {rows}
            <input type="text" name="msg"/><input type="button" value="发送" onClick={this.handClick}/>
        </div>);
    }
});

var messages = [{
    name:'鲁昊',
    content:'你好'
},{
    name:'李明',
    content:'你好'
},{
    name:'鲁昊',
    content:'吃了么'
},{
    name:'李明',
    content:'吃了'
}];

ReactDOM.render(<MsgArea messages={messages}/>,document.getElementById('app'));
