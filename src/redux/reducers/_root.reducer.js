import { combineReducers } from 'redux';
import galleryReducer from './gallery.reducer';

const rootReducer = combineReducers({
    galleryReducer,
});

export default rootReducer;

