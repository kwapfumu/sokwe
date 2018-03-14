"use strict";
import {addIgisokozoRequestReducer} from './addIgisokozoRequestReducer';
import {addIgisokozoSucessReducer} from './addIgisokozoSucessReducer';
import {addIgisokozoFailedReducer} from './addIgisokozoFailedReducer';


/**slice reducer: a reducer that is being used to handle updates to one specific slice of the state tree*/
/**a reducer is a pure function. It only computes the next state. It should be completely predictable: 
calling it with the same inputs many times should produce the same outputs. It shouldn't perform any 
side effects like API calls or router transitions. These should happen before an action is dispatched.*/
export function addIgisokozoReducer(tasksState = { 
	isSaving: false,
	backlogTasks: backlogTasks
	}, action) {
	switch(action.type) {
		case 'ADD_IGISOKOZO_REQUEST': return addIgisokozoRequestReducer(tasksState, action);
		case 'ADD_IGISOKOZO_SUCCESS': return addIgisokozoSucessReducer(tasksState, action);
		case 'ADD_IGISOKOZO_ERROR': return addIgisokozoFailedReducer(tasksState, action);				
		default : return tasksState;
	},
};