import {createContext} from 'react';
import {BaseStore} from './BaseStore';

export const rootStoreContext = createContext({
  baseStore: new BaseStore(),
});
