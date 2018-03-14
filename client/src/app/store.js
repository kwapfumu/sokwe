import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
/** The Store is the object that brings actions (that represent the facts about
* “what happened”) and the reducers (that update the state according to those
* actions) together. The store has the following responsibilities:
* - Holds application state;
* - Allows access to state via getState();
* - Allows state to be updated via dispatch(action);
* - Registers listeners via subscribe(listener);
* - Handles unregistering of listeners via the function returned by subscribe(listener). */
// neat middleware that logs actions
const loggerMiddleware = createLogger();
/** Without middleware, Redux store only supports synchronous data flow. This is
* what you get by default with createStore(). You may enhance createStore() with
* applyMiddleware(). It is not required, but it lets you express asynchronous
* actions in a convenient way. Asynchronous middleware like redux-thunk or
* redux-promise wraps the store's dispatch() method and allows you to dispatch
* something other than actions, for example, functions or Promises. Any
* middleware you use can then interpret anything you dispatch, and in turn, can
* pass actions to the next middleware in the chain. For example, a Promise
* middleware can intercept Promises and dispatch a pair of begin/end actions
* asynchronously in response to each Promise. When the last middleware in the
* chain dispatches an action, it has to be a plain object. This is when the
* synchronous Redux data flow takes place. */
const store = createStore(rootReducer, applyMiddleware(thunk, loggerMiddleware));
export default store;
