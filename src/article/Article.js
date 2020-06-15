import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import { Card } from 'antd';
import './Article.css';

const { Meta } = Card;

class Article extends Component {

    render(){
        return(
            <div 
                style={{margin: 10}}
                onClick={()=>{window.open(this.props.articleUrl,"_blank");}}>
                <Card
                    hoverable
                    style={{ width: 300, height:400 }}
                    cover={<img alt="example" src={this.props.imgUrl} />}>
                    <Meta className = "card-meta"
                        title={this.props.articleTitle} 
                        description={this.props.articleDescription} />
                </Card>
            </div>
                
        );
    }
}

export default Article;