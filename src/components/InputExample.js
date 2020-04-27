import React from 'react';
import {Container, Button, Paper} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';
import {add} from '../actions';

class InputExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      myInput : '',
     }
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() { 
    const {myInput} = this.state;
    const {counter} = this.props;

    return ( 
      <Container maxWidth="md">
        <Paper>
          <Container>
            <form noValidate autoComplete="off">
              <div>
                <TextField label="Enter input" id="standard-size-small" defaultValue={myInput} size="small" name="myInput" onChange={(e) => this.onChange(e)} />
                <Button variant="contained" color="primary" onClick={() => this.props.dispatch(add(this.state.myInput))}>Add</Button>
              </div>
            <p>Input value: {myInput} </p>
            <p>Current counter:  {counter}</p>
            </form>
          </Container>
        </Paper>
      </Container>
     );
  }
}

const mapStatetoProps = state => ({
  counter: state.counter
});
 
export default connect(
  mapStatetoProps,
)(InputExample);