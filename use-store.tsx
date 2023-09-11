import {useContext} from 'react';
import {rootStoreContext} from './src/app/store';

export const useStores = () => useContext(rootStoreContext);
