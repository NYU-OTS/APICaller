import keys from '../Base/ActionTypeKeys';

const initialState: any = {
    isFetching: false,
    didInvalidate: false,
    items: [],
    json: {}
}

export default function integrationReducer( state = initialState, action: any) {
    switch (action.type) {
        case keys.INTEGRATION_INVALIDATE:
            return Object.assign({}, state, {
                didInvalidate: true
            });
        case keys.INTEGRATION_RECEIVE:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                json: action.json
            });
        case keys.INTEGRATION_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false,
            });
        default:
            return state;
    }
}