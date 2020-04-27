import React from 'React';
import Axios from 'axios';
import User from './User';
import AddUser from './AddUser';
import {Container, Paper, Button} from '@material-ui/core';
import Spinner from 'react-spinner-material';
import { connect } from "react-redux";
import {fetchUsersBegin, fetchUsersSuccess, fetchUsersFailure, clearUserData} from '../actions';
import { bindActionCreators } from 'redux';

const fetchUsers = () => {
  return dispatch => {
    dispatch(fetchUsersBegin());    
    Axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setTimeout(() => {
          dispatch(fetchUsersSuccess(res.data))
          return res.data;
        }, 3000);
      })
      .catch(error => {
        dispatch(fetchUsersFailure(error.response))
      })
  }
}

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      disableBtnUserFetch: false,
      fetchBtnTxt: 'Fetch',
    };
  }

  handleUserClick() {
    this.props.fetchUsersCalled();
    this.setState({
      disableBtnUserFetch: true,
      fetchBtnTxt : 'Fetching  '
    })
  }

  componentDidMount() {
    document.title = 'web cua Hung ';
  }

  // changes from the outside
  componentWillReceiveProps(nextProps) {
    if(nextProps.users) {
      if(nextProps.users.length > 0) this.setState({
        disableBtnUserFetch: false,
      })
    }
    
  }

  render() {
    const {users, usersLoading, usersError} = this.props;    
    // if(dataError) return <div>Fetched failed</div>
    // else if(userData[0] === undefined) return <div>Loading...</div>;

    return (
      <Container maxWidth="md">
        <Paper elevation={1}>
          <Container>
            <h3>User List</h3>
            <Button disabled={this.state.disableBtnUserFetch} variant="contained" color="primary" onClick={() => this.handleUserClick()}>
              {this.state.fetchBtnTxt}
              {usersLoading && <Spinner radius={20} color={"#fff"} stroke={1} visible={true} />}
            </Button>
            <Button variant="contained" color="secondary" onClick={() => this.props.clearUserData()}>
              Clear 
            </Button>
            <AddUser/>
            {usersError && <div>Fetch error with status code: {usersError.code}</div>}
            {(usersLoading && usersError == null) ? <div>Getting your data..</div> : users.map((user) => <User key={user.id} id={user.id} name={user.name}/>)}
          </Container>
        </Paper>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  users: state.userData.items,
  usersLoading: state.userData.loading,
  usersError: state.userData.error
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUsersCalled: fetchUsers,
  clearUserData: clearUserData
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UserList);