import keys from '../Base/ActionTypeKeys';
import { Project } from './IntegrationActions';

const initialState: {
    isFetching: boolean,
    didInvalidate: boolean,
    projects: Array<Project>,
} = {
    isFetching: false,
    didInvalidate: false,
    projects: [],
}

function parseData(json: Array<any>) {
    return json.slice(0, 10).map((project: any) => {
        return {
            id: project.ProjectId,
            name: project.Name,
            client: {
                dept: project.ClientDepartment.DeptId,
                name: project.ClientDepartment.Name
            }
        }
    });
}

export default function integrationReducer( state = initialState, action: any) {
    switch (action.type) {
        case keys.INTEGRATION_INVALIDATE:
            return Object.assign({}, state, {
                didInvalidate: true,
                isFetching: false,
            });
        case keys.INTEGRATION_RECEIVE:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                projects: parseData(action.data)
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