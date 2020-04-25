import React from 'React';
import Axios from 'axios';

const userList = data => data.map((data) => <li key={data.id} >{data.name}</li>);

class UserList extends React.Component {
  state = {
    userData: []
  };

  componentDidMount() {
    document.title = 'web cua Hung';
    Axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        const userData = res.data;
        this.setState({userData});
      })
  }

  render() {
    return (
      <ul>
        {userList(this.state.userData)}
      </ul>
    )
  }
}

export default UserList;