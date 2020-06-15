import React, { Component } from 'react';
import { Card } from 'antd';

const { Meta } = Card;

class Article extends Component {
    render(){
        return(
            <div>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://miro.medium.com/max/1200/1*hlrhoatYRtS8jzsdZbvPXg.jpeg" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            </div>
        );
    }
}

export default Article;