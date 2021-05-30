import { AnyAction } from 'redux';
import { ThunkDispatch } from "redux-thunk";
import { reduxRoot } from './redux.root';

export type RootState = ReturnType<typeof reduxRoot.reducer>;
export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;