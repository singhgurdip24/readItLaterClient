import React, { Component } from 'react';
import './AppHeader.css';
import { Icon, notification } from 'antd';

import { saveArticle } from '../util/APIUtils';

class IconComponent extends Component {
    
    state = {
        articleUrl: ''
    }

    handleIconClick = () => {
        console.log("Icon Clicked")
        const saveArticleRequest = {
            articleUrl: this.props.articleUrl
        };
        saveArticle(saveArticleRequest)
        .then(response => {
            notification.success({
                message: 'Read It Later App',
                description: response.message
            });
        }).catch(error => {
            notification.error({
                message: 'Read It Later App',
                description: error.message || 'Sorry! Something went wrong. Please try again!'
            });
        });
    }

    render() {
        return(
            <Icon type="plus" className="nav-icon" onClick={this.handleIconClick}/>
        );
    }
}

export default IconComponent;