import fetch from 'cross-fetch';

import keys from '../Base/ActionTypeKeys';

const integrationServer = 'http://localhost:3000/projects';

export interface Project {
    id: string,
    name: string,
    client: {
        dept: string,
        name: string
    }
}

function integrationRequest() {
    return {
        type: keys.INTEGRATION_REQUEST
    };
}

function integrationReceive(json: any) {
    return {
        type: keys.INTEGRATION_RECEIVE,
        data: json
    };
}

function integrationInvalidate() {
    return { 
        type: keys.INTEGRATION_INVALIDATE
    };
}

export function integrationFetch() {
    return (dispatch: any) => {
        dispatch(integrationRequest());

        return fetch(integrationServer, {
            mode: 'no-cors'
        })
        .then((response: any) => {
            if (response.status >= 400) {
                dispatch(integrationInvalidate());
                throw new Error("Bad response from server");
            }            
            return response.json();
        })
        .then(json => dispatch(integrationReceive(json)));
    }
}