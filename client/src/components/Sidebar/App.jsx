import React, { Component } from 'react';
import {
    Layout, Menu, Icon,
} from 'antd';

const { Sider } = Layout;

class AppSidebar extends Component {
    render() {
        return (
            <Layout>
                <Sider width={200}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: 'calc(100vh - 64px)', borderRight: 0 }}
                    >

                        <Menu.Item key="1">CATEGORY 1</Menu.Item>
                        <Menu.Item key="2">CATEGORY 2</Menu.Item>
                        <Menu.Item key="3">CATEGORY 3</Menu.Item>
                        <Menu.Item key="4">CATEGORY 4</Menu.Item>
                        <Menu.Item key="5">CATEGORY 5</Menu.Item>
                    </Menu>
                </Sider>
            </Layout>
        );
    }
}

export default AppSidebar;