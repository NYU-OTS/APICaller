import fetch from 'cross-fetch';

import keys from '../Base/ActionTypeKeys';

const integrationAPI = 'integration.api.otss.admin.nyu.edu/cpacsweb/v1/projects/';

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

        return fetch(integrationAPI)
        .then(response => {
            if (response.status >= 400) {
                dispatch(integrationInvalidate());
                throw new Error("Bad response from server");
            }
            return response.json();
        })
        .then(json => dispatch(integrationReceive(json)));
    }
}