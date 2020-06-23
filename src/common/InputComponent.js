import React, { Component } from 'react';
import './AppHeader.css';
import { Input } from 'antd';

class InputComponent extends Component {
    getContent(event) {
      this.props.callback(event.target.value);
    }

    render() {
      return (
          <Input className="url-input" onChange={this.getContent.bind(this)} placeholder="Add URL to save article"/>
      );
    }
}

export default InputComponent;