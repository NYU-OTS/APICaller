import * as React from 'react';
import { Provider } from 'react-redux';
import { withStyles } from '@material-ui/core';

import store from './Redux/Base/Store';
import MenuNavigation from './React/MenuNavigation';
//import SearchBox from './React/SearchBox';
//import List from './React/List';


const styles: any = {
    body: {
        backgroundColor: 'lightblue'
    }
}

interface AppProps {
    classes: any
}

class App extends React.Component<AppProps, {}> {
    render() {
        return (
            <Provider store={store}>
                <div id='app' className={this.props.classes.body}>
                    <MenuNavigation />
                </div>
            </Provider>
        );
    }
}

export default withStyles(styles)(App);