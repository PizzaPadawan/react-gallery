import { takeLatest, put } from 'redux-saga';
import axios from 'axios';

export default function* gallerySaga() {
    yield takeLatest("FETCH_GALLERY", fetchGallery);
}

function* fetchGallery() {
    const response = yield axios.get('/gallery');
    yield put({ type: "SET_GALLERY", payload: response.data })
}