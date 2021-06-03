import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { reduxRoot } from './redux.root';
import thunk from 'redux-thunk';

let store;

function initStore(preloadedState = reduxRoot.initialState) {
  return createStore(
    reduxRoot.reducer,
    preloadedState,
    applyMiddleware(thunk)
  )
};

export const initializeStore = (preloadedState?: any) => {

  let _store = store ?? initStore(preloadedState)

  if (preloadedState && store) {

    _store = initStore({
      // ...preloadedState,
      ...store.getState()
    });
    store = undefined;
  }
  if (typeof window === 'undefined') return _store
  if (!store) store = _store

  return _store
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
};