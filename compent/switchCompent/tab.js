
import React,{ Component } from 'react';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

// React.createClass 方式
const TestID = React.createClass({
 
  render:function(){
    return (
      <div>
        <Tabs defaultActiveKey="1" >
          <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
          <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
          <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
        </Tabs>
      </div>
    )
  }
})

{/*
// ES6 语法
class TestID extends Component {
  constructor(props,context){
     super(props,context);
     this.state = {}
  }
  render(){
    return (
      <div>
        <Tabs defaultActiveKey="1" >
          <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
          <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
          <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
        </Tabs>
      </div>
    )
      
  }
}

*/}

export default TestID