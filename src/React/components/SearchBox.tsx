import * as React from 'react';
//import { connect } from 'react-redux';
import { withStyles, FormControl, Input, InputAdornment, Button } from '@material-ui/core';
import { Search } from '@material-ui/icons';

//import { fetchPostsIfNeeded } from '../../redux/Actions';

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
    classes: any,
    fetch: (search: string) => void
}

interface SearchBoxState {
    value: string
}

class SearchBox extends React.Component<SearchBoxProps, SearchBoxState> {

    constructor(props: SearchBoxProps) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event: any) {
        this.setState({ value: event.target.value });
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
                    <Button className={this.props.classes.button} variant="raised" color="primary" onClick={this.props.fetch.bind(null, this.state.value)}>Search</Button>
                </FormControl>
            </div>
        );
    }
}

/*
const SearchBox = connect(
    (state:any) => ({}),
    dispatch => ({})
)(_SearchBox);
*/
export default withStyles(styles)(SearchBox);