import { AsyncStorage } from 'react-native';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: []
};

export default persistConfig;
