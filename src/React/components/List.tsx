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

interface Post {
    head: string,
    subhead: string,
    caption: string
}

interface ListProps {
    classes: any,
    title: string,
    posts: Array<Post>
}

interface ListState {

}

class _List extends React.Component<ListProps, ListState> {
    renderPost(index: number, head: string, subhead: string, caption: string) {
        return (
            <div key={index} className={this.props.classes.post}>
                <Paper elevation={3}>
                    <Typography variant="headline" component="h3" className={this.props.classes.text}>{head}</Typography>
                    <Typography variant="subheading" component="h5" className={this.props.classes.text}>{subhead}</Typography>
                    <Typography variant="caption" component="p" className={this.props.classes.text}>{caption}</Typography>
                </Paper>
            </div>
        );
    }
    
    render() {
        console.log(this.props.title);
        return (
            <div>
                <div className={this.props.classes.title}>
                    <Typography variant="title" component="h1">
                        { this.props.title ? this.props.title.toUpperCase() : '' }
                    </Typography>
                </div>
                {this.props.posts && this.props.posts.map((post: Post, index:number) => {
                    return (this.renderPost(index, post.head, post.subhead, post.caption));
                })}
            </div>
        );
    }
}

const List = connect(
    (state: any) => ({}),
    dispatch => ({})
)(_List);

export default withStyles(styles)(List);