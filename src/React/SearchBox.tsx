import * as React from 'react';
import { connect } from 'react-redux';
import { withStyles, FormControl, Input, InputAdornment, Button } from '@material-ui/core';
import { Search } from '@material-ui/icons';

import { fetchPostsIfNeeded } from '../redux/Actions';

const styles:any = {
    form: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: '10px',
        paddingTop: '15px'
    },
    button: {
        marginLeft: '10px'
    }
};

interface SearchBoxProps {
    searchReddit: (subreddit: string) => void,
    classes: any
}

interface SearchBoxState {
    value: string
}

class _SearchBox extends React.Component<SearchBoxProps, SearchBoxState> {

    constructor(props: SearchBoxProps) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event: any) {
        event.preventDefault();
        console.log("Searching");
        console.log(this.props.searchReddit);
        this.props.searchReddit(this.state.value);
        this.setState({ value: '' });
    }

    render() {
        return (
            <div>
                <FormControl className={this.props.classes.form}>
                    <Input
                        startAdornment={
                            <InputAdornment position="start">
                                <Search />
                            </InputAdornment>
                        }
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <Button className={this.props.classes.button} variant="raised" color="primary" onClick={this.handleSubmit}>Search</Button>
                </FormControl>
            </div>
        );
    }
}

const SearchBox = connect(
    (state:any) => ({}),
    dispatch => ({
        searchReddit: (subreddit: string) => dispatch(fetchPostsIfNeeded(subreddit))
    })
)(_SearchBox);

export default withStyles(styles)(SearchBox);