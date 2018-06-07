import * as React from 'react';
import { connect } from 'react-redux';
//import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Paper, Tab, Tabs, Typography, withStyles } from '@material-ui/core';

import Integration from './Integration';
import Subreddit from './Subreddit';

const styles: any = {
    root: {
        flexGrow: 1
    },
    menu: {
        display: 'flex',
        flexDirection: 'row'
    }
};

interface MenuProps { 
    classes: any,
}
interface MenuState { 
    value: string, 
    APIs: { [index: string]: { component: JSX.Element } } 
}
class _MenuNavigation extends React.Component<MenuProps, MenuState> {
    constructor(props: MenuProps) {
        super(props);
        this.state = { 
            value: 'subreddit',
            APIs: {
                'integration': {
                    component: <Integration />,
                },
                'subreddit': {
                    component: <Subreddit />,
                }
            }
         };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event: any, value: string) {
        this.setState({ value });
    }

    render() {
        const { classes } = this.props;
        const { value, APIs } = this.state;

        return (
            <Paper className={classes.root}>
                <Tabs
                    value={value}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered>
                    <Tab value="subreddit" label="Subreddit" />
                    <Tab value="integration" label="Integration" />
                </Tabs>
                {APIs[value].component}
            </Paper>
        );
    }
}

const MenuNavigation = connect(
    (state:any) => ({}),
    (dispatch: (action: any) => void)  => ({})
)(_MenuNavigation);

export default withStyles(styles)(MenuNavigation);