/*
import { combineReducers } from 'redux';
import { INVALIDATE_SUBREDDIT, REQUEST_POSTS, RECEIVE_POSTS } from './Actions';

function posts(
    state: any = {
        isFetching: false,
        didInvalidate: false,
        name: '',
        items: []
    },
    action: any
) {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
            return Object.assign({}, state, {
                didInvalidate: true
            });
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        case RECEIVE_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                name: action.subreddit,
                items: action.posts,
                lastUpdated: action.receivedAt
            })
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    posts
});

export default rootReducer;
*/