{/* 注释 start */}
{/* 注释  end  */}

import React, { Component } from 'react';

// import logo from './logo.svg';
import './App.css';
//  tab插件 start 
import {Layout} from 'antd';

// import { Row, Col } from 'antd';

const { Header, Footer, Content } = Layout;
// import Tabs from 'antd/lib/tabs'
// const TabPane = Tabs.TabPane;
{/* tab插件  end  */}



import  Tab_self from './self_comp'

class App extends Component {
 
 
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
           

          
           <Layout>
              <Header>Header</Header>
              <Content>
                {/*  tab组件 */}
                <Tab_self />
              </Content>
              <Footer>
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
