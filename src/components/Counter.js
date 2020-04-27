import React from 'react';
import {Container, Button, Paper} from '@material-ui/core';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../actions';

function Counter () {
  const counter = useSelector(state => state.counter);
  const userCount = useSelector(state => state.userData.items)
  const dispatch = useDispatch();
  return (
    <Container maxWidth="md">
      <Paper>
        <Container>
          <h3>Counter loaded</h3>
          <p>Current counter: {counter}</p>
          <Button variant="contained" color="primary" onClick={() => dispatch(increment())}>+</Button>
          <Button variant="contained" color="secondary" onClick={() => dispatch(decrement())}>-</Button>
          <p>Number of users: {userCount.length}</p>
        </Container>
      </Paper>
    </Container>
  )
}

export default Counter;