import { configureStore,combineReducers } from '@reduxjs/toolkit'
import {reducer,toogleButton} from './Calculator/calculator.reducer'
import {createStore, AnyAction, Store} from 'redux';
import {createWrapper, Context, HYDRATE} from 'next-redux-wrapper';

  const makeStore = (context: Context) => configureStore({
    reducer: {
        calculator: reducer,
        chooseButton:toogleButton
    }
  });
  
  // export an assembled wrapper
  export const wrapper = createWrapper<Store>(makeStore, {debug: true});
