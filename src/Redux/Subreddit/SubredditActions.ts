import 'cross-fetch';

import keys from '../Base/ActionTypeKeys';

export interface Post { 
    author: string,
    id: string,
    title: string,
    url: string
}

function subredditRequest() {
    return {
        type: keys.SUBREDDIT_REQUEST
    }
}

function subredditReceive(json: any, subreddit: string) {
    return {
        type: keys.SUBREDDIT_RECEIVE,
        json,
        subreddit
    }
}

function subredditInvalidate() {
    return {
        type: keys.SUBREDDIT_INVALIDATE
    }
}

export function subredditFetch(subreddit: string) {
    return (dispatch: any) => {
        dispatch(subredditRequest());

        return fetch(`https://www.reddit.com/r/${subreddit}.json`)
        .then((response: any) => {
            if (response.status >= 400) {
                dispatch(subredditInvalidate());
                throw new Error("Bad response from ");
            }
            return response.json();
        })
        .then(json => dispatch(subredditReceive(json, subreddit)));
    }
}