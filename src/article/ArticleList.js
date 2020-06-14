import React, { Component } from 'react';
import { getUserSavedArticles } from '../util/APIUtils';
import Article from './Article';
import LoadingIndicator  from '../common/LoadingIndicator';
import { Button, Icon, notification } from 'antd';
import { POLL_LIST_SIZE } from '../constants';
import { withRouter } from 'react-router-dom';

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
            currentVotes: [],
            isLoading: false
        };
        this.loadArticleList = this.loadArticleList.bind(this);
        this.handleLoadMore = this.handleLoadMore.bind(this);
    }

    loadArticleList(page = 0, size = POLL_LIST_SIZE) {
        let promise;
        if(this.props.username) {
            promise = getUserSavedArticles(this.props.username, page, size);
        }

        if(!promise) {
            return;
        }

        this.setState({
            isLoading: true
        });

        promise            
        .then(response => {
            const articles = this.state.articles.slice();

            this.setState({
                articles: articles.concat(response.content),
                page: response.page,
                size: response.size,
                totalElements: response.totalElements,
                totalPages: response.totalPages,
                last: response.last,
                isLoading: false
            })
        }).catch(error => {
            this.setState({
                isLoading: false
            })
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
                currentVotes: [],
                isLoading: false
            });    
            this.loadArticleList();
        }
    }

    handleLoadMore() {
        this.loadArticleList(this.state.page + 1);
    }

    // handleVoteChange(event, pollIndex) {
    //     const currentVotes = this.state.currentVotes.slice();
    //     currentVotes[pollIndex] = event.target.value;

    //     this.setState({
    //         currentVotes: currentVotes
    //     });
    // }

    render() {
        const articleViews = [];
        this.state.articles.forEach((article, articleIndex) => {
            articleViews.push(<Article />)            
        });

        return (
            <div className="polls-container">
                {articleViews}
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
    }
}

export default withRouter(ArticleList);