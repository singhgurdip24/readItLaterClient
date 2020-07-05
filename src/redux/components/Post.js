import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import {isArticleAdded, fetchArticles } from "../action/index";
import LoadingIndicator from "../../common/LoadingIndicator";

export class Post extends Component {
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

  // shouldComponentRender() {
  //   const {pending} = this.props;
  //   if (this.props.isArticleAdded === true) {
  //     if (this.props.isArticleAdded) {
  //       this.props.isArticleAdded(false);
  //     }
  //     return true;
  //   }
  //   if(this.pending === false) return false;
  //   // more tests
  //   return true;
  // }

  handleIsArticleAdded(){
    this.props.isArticleAdded(false);
    this.props.fetchArticles();
  }

  render() {
    // if(this.props.isArticleAdded){
    //   this.handleIsArticleAdded();
    // }

    if(!this.shouldComponentRender()) return <LoadingIndicator />

    return (
      <ul>
        {this.props.articles.map(article => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    );
  }
}

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);