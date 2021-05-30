import { useMemo } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reduxRoot } from './redux.root';

let store;

function initStore(preloadedState = reduxRoot.initialState) {
  return createStore(
    reduxRoot.reducer,
    preloadedState
  )
};

export const initializeStore = (preloadedState?: any) => {

  let _store = store ?? initStore(preloadedState)

  if (preloadedState && store) {

    _store = initStore({
      // ...preloadedState,
      ...store.getState()
    });
    console.log('!!!!!!!!!!!');
    console.log(_store.getState());
    console.log('!!!!!!!!!!!');
    store = undefined
  }
  if (typeof window === 'undefined') return _store
  if (!store) store = _store

  return _store
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
};