import * as React from 'react';
import { connect } from 'react-redux';
import { withStyles, Paper, Typography } from '@material-ui/core';

const styles:any = {
    title: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '10px',
    },
    post: {
        margin: '10px 10px 10px 10px'
    },
    text: {
        margin: '5px 5px 5px 5px'
    }
}

interface ListProps {
    name?: string,
    posts?: any[],
    classes: any
}

interface ListState {

}

class _List extends React.Component<ListProps, ListState> {
    renderPost(index: number, author: string, url: string, selfText: string) {
        return (
            <div key={index} className={this.props.classes.post}>
                <Paper elevation={3}>
                    <Typography variant="headline" component="h3" className={this.props.classes.text}>
                        Author: {author}
                    </Typography>
                    <Typography variant="subheading" component="h5" className={this.props.classes.text}>
                        URL: {url}
                    </Typography>
                    <Typography variant="caption" component="p" className={this.props.classes.text}>
                        {selfText}
                    </Typography>
                </Paper>
            </div>
        );
    }
    
    render() {
        return (
            <div>
                <div className={this.props.classes.title}>
                    <Typography variant="title" component="h1">
                        { this.props.name ? this.props.name.toUpperCase() : '' }
                    </Typography>
                </div>
                {this.props.posts && this.props.posts.map((post:any, index:number) => {
                    return (this.renderPost(index, post.author, post.url, post.selftext));
                })}
            </div>
        );
    }
}

const List = connect(
    (state: any) => ({
        name: state.posts.name,
        posts: state.posts.items
    }),
    dispatch => ({})
)(_List);

export default withStyles(styles)(List);