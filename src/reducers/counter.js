const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
        return state + 1;
    case 'DECREMENT':
        return state - 1;
    case 'ADD':      
      const value = (!isNaN(action.payload) && action.payload) ?  parseInt(action.payload) : 0;
        return state += value;
    default:
        return state;
  }
}

export default counterReducer;