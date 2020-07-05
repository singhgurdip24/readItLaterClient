import { ADD_ARTICLE } from "../constants/action-types";
import { SAVE_ARTICLE } from "../constants/action-types";
import { FETCH_ARTICLES_PENDING, FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_ERROR } from "../constants/action-types";

import { getUserSavedArticles } from '../../util/APIUtils';

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function isArticleAdded(payload) {
  return {type: SAVE_ARTICLE, payload}
}

export function getData() {
  return function(dispatch) {
    return getUserSavedArticles("myUser", 0, 50)
      .then(response =>  {
        dispatch({ type: "DATA_LOADED", payload: response });
      });
  };
}

export function fetchArticlesPending() {
  return {
      type: FETCH_ARTICLES_PENDING
  }
}

export function fetchArticlesSuccess(payload) {
  return {
      type: FETCH_ARTICLES_SUCCESS,
      payload
  }
}

export function fetchArticlesError(payload) {
  return {
      type: FETCH_ARTICLES_ERROR,
      payload
  }
}

export function fetchArticles() {
  return dispatch => {
      dispatch(fetchArticlesPending());
      return getUserSavedArticles("myUser", 0, 50)
      .then(res =>  {
          if(res.error) {
              throw(res.error);
          }
          dispatch(fetchArticlesSuccess(res.content));
          return res;
      })
      .catch(error => {
          dispatch(fetchArticlesError(error));
      })
  }
}
