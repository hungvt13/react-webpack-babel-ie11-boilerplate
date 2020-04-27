import React from 'react';
import {Container, Button, Collapse } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import {addUserToList} from '../actions';
import { connect } from "react-redux";


class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myInput : '',
      currentUser: '',
      alertShow: false,
      errorShow: false,
    }
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmitUser = () => {
    if(this.state.myInput.length === 0) {
      this.setState({
        errorShow: true,
      });
      return;
    };
    this.setState({ 
      currentUser: this.state.myInput,
      alertShow: true,
      errorShow: false,
      myInput: '' ,
    });

    setTimeout(() => {
      this.setState({ 
        alertShow: false,
      });
    }, 2000);
    
    this.props.dispatch(addUserToList(this.state.myInput))
  }

  render () {
    return (
          <form noValidate autoComplete="off">
              <TextField 
                label="Enter input" 
                id="standard-size-small" 
                size="small" 
                name="myInput" 
                onChange={(e) => this.onChange(e)}
                value={this.state.myInput}
                error={this.state.errorShow}
                helperText={this.state.errorShow && 'Incorrect entry!'}
              />
              <Button 
                variant="contained" 
                color="primary" 
                onClick={() => this.handleSubmitUser()}
              >
                Add User
              </Button>
                <Collapse in={this.state.alertShow}>
                  <Alert variant="filled" severity="success"> added user: {this.state.currentUser} </Alert>
                </Collapse>
          </form>
    );
  };
}

export default connect()(AddUser);