import React, { Component } from 'react';
import Header from '../../components/Header/App';
import Sidebar from '../../components/Sidebar/App';
import IframeComponent from '../../components/IframeComponent/App';

class SamplePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Sidebar />
                <IframeComponent src="https://angular-todolist-materialui.stackblitz.io/" height="100%" width="100%" />
            </div>
        );
    }
}

export default SamplePage;