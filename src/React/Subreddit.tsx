import * as React from 'react';
import { connect } from 'react-redux';
import { Paper, Typography, withStyles } from '@material-ui/core';

import SearchBox from './components/SearchBox';
import List from './components/List';
import { Post, subredditFetch } from '../Redux/Subreddit/SubredditActions';

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

interface SubredditProps {
    classes: any,
    fetch: (subreddit: string) => void,
    posts: Array<Post>,
}

interface SubredditState {}

class _Subreddit extends React.Component<SubredditProps, SubredditState> {
    
    constructor(props: SubredditProps) {
        super(props);

        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(subreddit: string) {
        this.props.fetch(subreddit);
    }

    renderPost(item: Post, index: number) {
        return (
            <div onClick={()=>window.open(item.url, '_blank')}>
                <Paper className={this.props.classes.post} elevation={2} key={index}>
                    <Typography variant="headline" component="h3" className={this.props.classes.text}>{"Author: " + item.author}</Typography>
                    <Typography variant="subheading" component="h5" className={this.props.classes.text}>{item.id}</Typography>
                    <Typography variant="caption" component="p" className={this.props.classes.text}>{item.title}</Typography>
                </Paper>
            </div>
        )
    }

    render() {
        return (
            <div className={this.props.classes.root}>
                <SearchBox fetch={this.handleSearch}/>
                {this.props.posts.map((item: Post, index: number) => this.renderPost(item, index))}
            </div>
        )
    }
}

const Subreddit = connect(
    (state: any) => ({
        posts: state.subreddit.posts
    }),
    (dispatch: (action: any) => void) => ({
        fetch: (subreddit: string) => dispatch(subredditFetch(subreddit))
    })
)(_Subreddit);

export default withStyles(styles)(Subreddit);