import React, { Component } from 'react';
import {
    Layout, Button
} from 'antd';
const { Header } = Layout;
import headerLogo from '../../../public/assets/images/omega_logo.png';
import './App.less';
import { Link } from 'react-router-dom';

class AppHeader extends Component {
    render() {
        return (
            <Layout>
                <Header className="appname-header">
                    <Link to='/'><img className="appname-header-logo" src={headerLogo} /></Link>
                    <div className="appname-avatar"><Button icon="poweroff">Logout</Button></div>
                </Header>
            </Layout>
        );
    }
}

export default AppHeader;