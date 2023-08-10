import { combineReducers } from 'redux';
import gallery from './gallery.reducer';

const rootReducer = combineReducers({
    gallery,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

