import gallerySaga from './gallery.saga';

export default function* rootSaga() {
    yield gallerySaga();
}