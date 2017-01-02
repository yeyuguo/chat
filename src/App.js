{/* 注释 start */}
{/* 注释  end  */}

import React, { Component } from 'react';
// import TestID from 'Component/switchCompent/tab.js'
import logo from './logo.svg';
import './App.css';
{/* tab插件 start */} 
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
{/* tab插件  end  */}



class App extends Component {
  render() {
    // function clickAlert(){
    //   alert('aaa')
    // }

    // return (
    //   <div className="App">
    //     <div className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h2>Welcome to React</h2>
    //     </div>
    //     <p className="App-intro">
    //       To get started, edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <Button type="primary" onClick = {clickAlert}>按钮</Button>
    //   </div>
    // );

    // (this.props)=>(
    //   alert(111)
    // )
    // (onChange={this.onChange})

   
    return (
      <div className="App">
        <div className="bodyCont">
        
        </div>
        <div className="bodyFooter">
         
          <div className="friendMsg on">chat</div>
          <div className="friendList">通讯录</div>
          <div className="friendShow">朋友圈 </div>
          <div className="setting">设置</div>
          
          {/*
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="chat" key="1">聊天 页面</TabPane>
            <TabPane tab="通讯录" key="2">通讯录 页面</TabPane>
            <TabPane tab="朋友圈" key="3">朋友圈 页面</TabPane>
            <TabPane tab="设置" key="4">设置 页面</TabPane>
          </Tabs>
          */}
          {/* <TestID />     
          <Tabs defaultActiveKey="1">
            <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
            <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
            <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
          </Tabs> 
           */}    
          {/*
          ReactDOM.render(
            <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="chat" key="1">聊天 页面</TabPane>
              <TabPane tab="通讯录" key="2">通讯录 页面</TabPane>
              <TabPane tab="朋友圈" key="3">朋友圈 页面</TabPane>
              <TabPane tab="设置" key="4">设置 页面</TabPane>
            </Tabs>,
            mountNode
          )
          */}
        </div>       
      </div>
    );
  }
}

export default App;
