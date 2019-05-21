import React, { Component } from 'react';
import './App.less';

class App extends Component {
    render() {
        return (
            <div className="iframe-container">
                <iframe src={this.props.src} height={this.props.height} width={this.props.width} />
            </div>
        );
    }
}

export default App;