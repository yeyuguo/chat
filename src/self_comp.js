
import React,{ Component } from 'react';
import { Tabs,Icon } from 'antd';
const TabPane = Tabs.TabPane;

// 参考： http://www.cnblogs.com/yongjz/p/5356914.html

// React.createClass 方式

const Tab_self = React.createClass({
  getInitialState:function(){
      return {
          tabPosition:'bottom'
      }
  },
  render:function(){
    return (
      <div>
         <Tabs defaultActiveKey="1" tabPosition={this.state.tabPosition}>
            <TabPane tab={<span><Icon type="apple" />chat</span>} key="1">聊天 页面</TabPane>
            <TabPane tab={<span><Icon type="apple" />通讯录</span>}  key="2">通讯录 页面</TabPane>
            <TabPane tab={<span><Icon type="apple" />朋友圈</span>}  key="3">朋友圈 页面</TabPane>
            <TabPane tab={<span><Icon type="apple" />设置</span>} key="4">设置 页面</TabPane>
        </Tabs>
      </div>
    )
  }
})


// ES6 语法 
{/*
class Tab_self extends Component {
  constructor(props,context){
     super(props,context);
     this.state = {
       tabPosition:'bottom',
     }
  }
  render(){
    return (
      <div>
        <Tabs defaultActiveKey="1" tabPosition={this.state.tabPosition}>
            <TabPane tab={<span><Icon type="apple" />chat</span>} key="1">聊天 页面</TabPane>
            <TabPane tab={<span><Icon type="apple" />通讯录</span>}  key="2">通讯录 页面</TabPane>
            <TabPane tab={<span><Icon type="apple" />朋友圈</span>}  key="3">朋友圈 页面</TabPane>
            <TabPane tab={<span><Icon type="apple" />设置</span>} key="4">设置 页面</TabPane>
        </Tabs>
      </div>
    )
      
  }
}
*/}


export default Tab_self