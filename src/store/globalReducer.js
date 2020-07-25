import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import loginReducer from '../reducers/loginReducer';
import exampleReducer from '../reducers/sampleexampleReducer'

const containersReducer = {
  containers: combineReducers({
    loginReducer,
    exampleReducer
    // NOTE: put other app reducers here
  }),
};

const createGlobalReducer = () => (
  combineReducers({
    ...containersReducer,
    route: routerReducer,
  })
);

export default createGlobalReducer;
