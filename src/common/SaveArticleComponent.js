import React, { Component } from 'react';
import './AppHeader.css';
import InputComponent from './InputComponent';
import IconComponent from './IconComponent';

class SaveArticleComponent extends Component {

    state = {
        articleUrl : ''
    }

    handleEnter = params => {
        this.setState({
            articleUrl: params
        })
    }

    render() {
        return(
            <div className="save-article">
                <InputComponent className="url-input" placeholder="input with clear icon"  callback={this.handleEnter.bind(this)}/>
                <IconComponent type="plus" className="nav-icon" articleUrl={this.state.articleUrl}/>
            </div>
        );
    }
}

export default SaveArticleComponent