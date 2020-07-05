import React, { Component } from 'react';
import Article from './Article';
import LoadingIndicator  from '../common/LoadingIndicator';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'antd';

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import {isArticleAdded, fetchArticles } from "../redux/action/index";

function mapStateToProps(state) {
    return {
      articles: state.remoteArticles,
      isArticleAdded: state.isArticleAdded,
      pending: state.pending,
      error: state.error
    };
  }
  
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchArticles: fetchArticles,
  isArticleAdded: isArticleAdded
}, dispatch)

class ArticleList extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchArticles();
    }

    shouldComponentRender() {
        const {pending} = this.props;
        if(this.pending === false) return false;
        // more tests
        return true;
    }

    render() {
        const articleViews = [];
        this.props.articles.forEach((article, articleIndex) => {
            articleViews.push(
                <Col 
                    key={articleIndex} 
                    className = "card-template" 
                    xs={{ span: 5, offset: 2 }} lg={{ span: 6, offset: 2 }}>
                    <Article
                        key = {article.id}
                        articleUrl = {article.articleUrl}
                        imgUrl = {article.imageUrl} 
                        articleTitle = {article.title}
                        articleDescription = {article.description}
                    />
                </Col>
            )            
        });

        if(this.props.isAuthenticated) {
            if(!this.shouldComponentRender()) 
                return <LoadingIndicator />

            return (
                <div className="polls-container">
                    <Row type = "flex" gutter={{ xs: 8, sm: 8, md: 8}}>
                        {articleViews}
                    </Row>
                    {
                        !this.props.isLoading && this.props.articles.length === 0 ? (
                            <div className="no-polls-found">
                                <span>No Articles Found.</span>
                            </div>    
                        ): null
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

export default connect(
    mapStateToProps,
    mapDispatchToProps)(withRouter(ArticleList));