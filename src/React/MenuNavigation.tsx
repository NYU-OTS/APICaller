import * as React from 'react';
import { connect } from 'react-redux';
//import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Paper, Tab, Tabs, Typography, withStyles } from '@material-ui/core';

import Integration from './Integration';

const styles: any = {
    root: {
        flexGrow: 1
    },
    menu: {
        display: 'flex',
        flexDirection: 'row'
    }
};

interface TabProps {
    children: any
}

function TabContainer(props: TabProps) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    )
}


interface MenuProps {
    classes: any
}

interface MenuState {
    value: string
}

class _MenuNavigation extends React.Component<MenuProps, MenuState> {
    constructor(props: MenuProps) {
        super(props);
        this.state = { value: 'subreddit' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event: any, value: string) {
        this.setState({ value });
    }

    render() {
        const { classes } = this.props;
        const { value } = this.state;


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
                {value === "subreddit" && <TabContainer>Subreddit!!!</TabContainer>}
                {value === "integration" && <Integration />}
            </Paper>
        );
    }
}

/*
    <BrowserRouter>
                <Paper className={this.props.classes.menu}>
                    <MenuList>
                        <MenuItem>Home</MenuItem>
                        <MenuItem>Subreddit</MenuItem>
                        <MenuItem>Integration</MenuItem>
                    </MenuList>
                </Paper>


                

            </BrowserRouter>
    <Grid container item xs={7} justify="center">
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/subreddit" component={Subreddit} />
            <Route exact path="/integration" component={Integration} />
        </Switch>
    </Grid>
    
    */

const MenuNavigation = connect(
    (state:any) => ({}),
    dispatch => ({})
)(_MenuNavigation);

export default withStyles(styles)(MenuNavigation);