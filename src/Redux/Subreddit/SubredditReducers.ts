import keys from '../Base/ActionTypeKeys';
import { Post } from './SubredditActions';

const initialState: {
    isFetching: boolean,
    didInvalidate: boolean,
    name: string,
    posts: Array<Post>
} = {
    isFetching: false,
    didInvalidate: false,
    name: '',
    posts: []
}

function parseData(json: Array<any>) {
    return json.map((item: any) => {
        return { 
            author: item.data.author,
            id: item.data.id,
            title: item.data.title,
            url: item.data.url
        }
    });
}

export default function subredditReducer( state = initialState, action: any) {
    switch (action.type) {
        case keys.SUBREDDIT_INVALIDATE:
            return Object.assign({}, state, {
                didInvalidate: true
            });
        case keys.SUBREDDIT_RECEIVE:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                posts: parseData(action.json.data.children.slice(0, 10)),
                name: action.subreddit
            });
        case keys.SUBREDDIT_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false,
            });
        default:
            return state;
    }
}