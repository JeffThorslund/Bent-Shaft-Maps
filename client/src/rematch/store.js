import immerPlugin from '@rematch/immer';
import { init } from '@rematch/core';
import * as models from './models';

const store = init({
  models,
  plugins: [immerPlugin()],
});

export default store;
