import * as React from 'react';
import { connect } from 'react-redux';
import { IconButton, Paper, Typography, withStyles } from '@material-ui/core';
import { Refresh } from '@material-ui/icons';

import { integrationFetch, Project } from '../Redux/Integration/IntegrationActions'

const styles = {
    title: {
        display: 'flex',
        justifyContent: 'center',
        margin: '10px 0px 10px 0px',
    },
    post: {
        margin: '10px 10px 10px 10px'
    },
    text: {
        margin: '5px 5px 5px 5px'
    }
}

interface IntegrationProps {
    classes: any,
    fetch: () => void,
    integration: {
        isFetching: boolean,
        projects: Array<any>
    }
}

class _Integration extends React.Component<IntegrationProps> {

    constructor(props: IntegrationProps) {
        super(props);
        
        this.refresh = this.refresh.bind(this);
        this.refresh();
    }

    refresh() {
        if (!this.props.integration.isFetching) {
            this.props.fetch();
        }
    }

    renderItem(item: Project, index: number) {
        return (
            <Paper className={this.props.classes.post} elevation={2} key={index}>
                <Typography variant="headline" component="h3" className={this.props.classes.text}>{item.name}</Typography>
                <Typography variant="subheading" component="h5" className={this.props.classes.text}>{item.id}</Typography>
                <Typography variant="caption" component="p" className={this.props.classes.text}>{"Client: " + item.client.dept + " : " + item.client.name}</Typography>
            </Paper>
        )
    }

    render() {
        const { projects } = this.props.integration;


        return (
            <div>
                <Typography variant="display1" className={this.props.classes.title}>PROJECTS<IconButton onClick={this.refresh}><Refresh /></IconButton></Typography>
                {projects.map((item: Project, index: number) => this.renderItem(item, index))}
            </div>
        )
    }
}

const Integration = connect(
    (state: any) => ({
        integration: state.integration
    }),
    (dispatch: (action: any) => void) => ({
        fetch: () => dispatch(integrationFetch())
    })
)(_Integration);

export default withStyles(styles)(Integration);
