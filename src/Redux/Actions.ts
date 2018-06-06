import 'cross-fetch';

interface subredditJSON {
    data: {
        children: Array<any>
    } 
}

export const REQUEST_POSTS = 'REQUEST_POSTS';
function requestPosts(subreddit: string) {
    return {
        type: REQUEST_POSTS,
        subreddit
    }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
function receivePosts(subreddit: string, json: subredditJSON) {
    return {
        type: RECEIVE_POSTS,
        subreddit,
        posts: json.data.children.slice(0, 10).map(child => child.data),
        receivedAt: Date.now()
    }
}

export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';
export function invalidateSubreddit(subreddit: string) {
    return {
        type: INVALIDATE_SUBREDDIT,
        subreddit
    }
}

export function fetchPosts(subreddit: string) {
    return (dispatch: any) => {
        dispatch(requestPosts(subreddit));

        return fetch(`https://www.reddit.com/r/${subreddit}.json`)
        .then(response => response.json())
        .then(json => dispatch(receivePosts(subreddit, json)));
    }
}

function shouldFetchPosts(state: any, subreddit: string) {
    const posts = state.items;
    if (!posts) {
        return true;
    } else if (posts.isFetching) {
        return false;
    } else {
        return posts.didInvalidate;
    }
}

export function fetchPostsIfNeeded(subreddit: string): any {
    return (dispatch: (action: any) => void, getState: any) => {
        if (shouldFetchPosts(getState(), subreddit)) {
            console.log("Fetching")
            return dispatch(fetchPosts(subreddit));
        } else {
            console.log("NOPE");
            return Promise.resolve();
        }
    }
}