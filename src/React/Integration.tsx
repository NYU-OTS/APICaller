import * as React from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

interface IntegrationProps {}
interface IntegrationState {}

class _Integration extends React.Component<IntegrationProps, IntegrationState> {
    render() {
        return (
            <div>
                <Typography variant="headline"> 
                    Fudge
                </Typography>
            </div>
        )
    }
}

const Integration = connect(
    (state: any) => ({}),
    dispatch => ({})
)(_Integration);

export default Integration;