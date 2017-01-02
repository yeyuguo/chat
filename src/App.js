{/* 注释 start */}
{/* 注释  end  */}

import React, { Component } from 'react';
// import TestID from '../compent/switchCompent/tab'
import logo from './logo.svg';
import './App.css';
{/* tab插件 start */} 
import {Layout} from 'antd';
import { Tabs,Icon } from 'antd';
import { Row, Col } from 'antd';
const TabPane = Tabs.TabPane;
const { Header, Footer, Sider, Content } = Layout;
// import Tabs from 'antd/lib/tabs'
// const TabPane = Tabs.TabPane;
{/* tab插件  end  */}

class App extends Component {
   constructor(props,context){
     super(props,context);
     this.state = {
       tabPosition:'bottom',
     }
   }
 
  render() {   
    return (
      <div className="App">
        <div className="bodyCont">
        
        </div>
        <div className="bodyFooter">
         {/*
          <div className="friendMsg on">chat</div>
          <div className="friendList">通讯录</div>
          <div className="friendShow">朋友圈 </div>
          <div className="setting">设置</div>
          */}
           {/* <TestID /> */} 


           <Layout>
              <Header>Header</Header>
              <Content>
                <Tabs defaultActiveKey="1" tabPosition={this.state.tabPosition}>
                  <TabPane tab={<span><Icon type="apple" />chat</span>} key="1">聊天 页面</TabPane>
                  <TabPane tab={<span><Icon type="apple" />通讯录</span>}  key="2">通讯录 页面</TabPane>
                  <TabPane tab={<span><Icon type="apple" />朋友圈</span>}  key="3">朋友圈 页面</TabPane>
                  <TabPane tab={<span><Icon type="apple" />设置</span>} key="4">设置 页面</TabPane>
                </Tabs>
              </Content>
              <Footer>
                  {/*
                  <Row gutter={16}>
                    <Col className="gutter-row" span={6}>
                      <TabPane tab={<span><Icon type="apple" />chat</span>} key="1">聊天 页面</TabPane>
                    </Col>
                    <Col className="gutter-row" span={6}>
                      <TabPane tab={<span><Icon type="apple" />通讯录</span>}  key="2">通讯录 页面</TabPane>
                    </Col>
                    <Col className="gutter-row" span={6}>
                      <TabPane tab={<span><Icon type="apple" />朋友圈</span>}  key="3">朋友圈 页面</TabPane>
                    </Col>
                    <Col className="gutter-row" span={6}>
                      <TabPane tab={<span><Icon type="apple" />设置</span>} key="4">设置 页面</TabPane>
                    </Col>
                  </Row>
                  */}
              </Footer>
           </Layout>


            {/*            
            <Tabs defaultActiveKey="1" tabPosition={this.state.tabPosition}>
              <TabPane tab={<span><Icon type="apple" />chat</span>} key="1">聊天 页面</TabPane>
              <TabPane tab={<span><Icon type="apple" />通讯录</span>}  key="2">通讯录 页面</TabPane>
              <TabPane tab={<span><Icon type="apple" />朋友圈</span>}  key="3">朋友圈 页面</TabPane>
              <TabPane tab={<span><Icon type="apple" />设置</span>} key="4">设置 页面</TabPane>
            </Tabs>
            */}
        </div>       
      </div>
    );
  }
}

export default App;
