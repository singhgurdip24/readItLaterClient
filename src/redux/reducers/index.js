import { ADD_ARTICLE } from "../constants/action-types"
import { SAVE_ARTICLE } from "../constants/action-types";
import { FETCH_ARTICLES_PENDING, FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_ERROR } from "../constants/action-types";

const initialState = {
    articles: [],
    remoteArticles: [],
    isArticleAdded: false,
    pending: false,
    error: null
  };
  
function rootReducer(state = initialState, action) {
    switch(action.type) {
      case ADD_ARTICLE:
        return Object.assign({}, state, {
          remoteArticles: state.remoteArticles.concat(action.payload)
        });
      case "DATA_LOADED":
        return Object.assign({}, state, {
          remoteArticles: state.remoteArticles.concat(action.payload.content)
        });
      case SAVE_ARTICLE:
        return Object.assign({}, state, {
          isArticleAdded: action.payload
        });
      case FETCH_ARTICLES_PENDING: 
        return {
            ...state,
            pending: true
        }
      case FETCH_ARTICLES_SUCCESS:
        return {
            ...state,
            pending: false,
            remoteArticles: action.payload
        }
      case FETCH_ARTICLES_ERROR:
        return {
            ...state,
            pending: false,
            error: action.error
        }
      default:
        return state;
    }
}

export default rootReducer