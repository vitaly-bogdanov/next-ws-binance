import { combineReducers } from 'redux';
import { depthStore } from '../../core/depth';

export const reduxRoot = { reducer: combineReducers({
    [depthStore.name]: depthStore.reducer
}), initialState: {
    [depthStore.name]: depthStore.initialState
}};