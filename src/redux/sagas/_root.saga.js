import { all } from 'redux-saga/effects';
import { gallerySaga as gallery } from './gallery.saga';

export default function* rootSaga() {
    yield all({
        gallery,
    })
}