import { takeLatest, put } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { Item } from '../../Item';

export default function* gallerySaga() {
    yield takeLatest("FETCH_GALLERY", fetchGallery);
}

function* fetchGallery() {
    try {
        const response: AxiosResponse<Item> = yield axios.get('/gallery');;
        yield put({ type: "SET_GALLERY", payload: response.data })
    } catch (error) {
        console.log("Error on fetchGallery saga", error);
    }
}