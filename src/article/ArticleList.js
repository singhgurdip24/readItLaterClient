import React, { Component } from 'react';
import { getUserSavedArticles } from '../util/APIUtils';
import Article from './Article';
import LoadingIndicator  from '../common/LoadingIndicator';
import { Button, Icon, notification } from 'antd';
import { POLL_LIST_SIZE, ARTICLE_DETAIL_RESPONSE } from '../constants';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'antd';

class ArticleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            page: 0,
            size: 10,
            totalElements: 0,
            totalPages: 0,
            last: true,
            isLoading: false
        };
        this.loadArticleList = this.loadArticleList.bind(this);
        this.handleLoadMore = this.handleLoadMore.bind(this);
    }

    loadArticleList(page = 0, size = POLL_LIST_SIZE) {

        // let promise = promise = getUserSavedArticles("myUser", page, size);

        // if(!promise) {
        //     return;
        // }

        // this.setState({
        //     isLoading: true
        // });

        // promise            
        // .then(response => {
        //     console.log(response);
        //     this.setState({
        //         articles: response.content,
        //         page: response.page,
        //         size: response.size,
        //         totalElements: response.totalElements,
        //         totalPages: response.totalPages,
        //         last: response.last,
        //         isLoading: false
        //     })
        // }).catch(error => {
        //     this.setState({
        //         isLoading: false
        //     })
        // });

        const response = ARTICLE_DETAIL_RESPONSE;
        this.setState({
            articles: response,
            page:1,
            totalElements: response.size,
            totalPages: 1,
            isLoading: true
        });
    }

    componentDidMount() {
        this.loadArticleList();
    }

    componentDidUpdate(nextProps) {
        if(this.props.isAuthenticated !== nextProps.isAuthenticated) {
            // Reset State
            this.setState({
                articles: [],
                page: 0,
                size: 10,
                totalElements: 0,
                totalPages: 0,
                last: true,
                isLoading: false
            });    
            this.loadArticleList();
        }
    }

    handleLoadMore() {
        this.loadArticleList(this.state.page + 1);
    }

    render() {
        const articleViews = [];
        this.state.articles.forEach((article, articleIndex) => {
            articleViews.push(
                <Col 
                    key={articleIndex} 
                    className = "card-template" 
                    xs={{ span: 5, offset: 2 }} lg={{ span: 6, offset: 2 }}>
                    <Article
                        key = {article.id}
                        articleUrl = {article.url}
                        imgUrl = {article.image} 
                        articleTitle = {article.title}
                        articleDescription = {article.description}
                    />
                </Col>
            )            
        });

        if(this.props.isAuthenticated) {
            return (
                <div className="polls-container">
                    <Row type = "flex" gutter={{ xs: 8, sm: 8, md: 8}}>
                        {articleViews}
                    </Row>
                    {
                        !this.state.isLoading && this.state.articles.length === 0 ? (
                            <div className="no-polls-found">
                                <span>No Articles Found.</span>
                            </div>    
                        ): null
                    }  
                    {
                        !this.state.isLoading && !this.state.last ? (
                            <div className="load-more-polls"> 
                                <Button type="dashed" onClick={this.handleLoadMore} disabled={this.state.isLoading}>
                                    <Icon type="plus" /> Load more
                                </Button>
                            </div>): null
                    }              
                    {
                        this.state.isLoading ? 
                        <LoadingIndicator />: null                     
                    }
                </div>
            );
        } else {
            return(
                <div>You are logged out</div>
            );
        }
    }
}

export default withRouter(ArticleList);