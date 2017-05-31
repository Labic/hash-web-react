import { fromJS } from 'immutable';


const initialState = fromJS({
  currentUser: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default appReducer;
