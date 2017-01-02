import React, { Component } from 'react';
import {Button} from 'antd';
{/* tab插件 start */} 
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

class App extends Component{
    
    function callback(key) {
      console.log(key);
    }

    render(){
        return (
            <Tabs defaultActiveKey="1" onChange={callback} >
                <TabPane tab="Tab 1" key="1">Tab Pane 1</TabPane>
                <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
            </Tabs>
        )
    }
}


export default App;