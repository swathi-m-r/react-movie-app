import { fork, all } from 'redux-saga/effects';
import watchMoviesSaga from './MoviesSaga';
import watchSearchedMoviesSaga from './getSearchedMoviesSaga';

/**
 * combine all the sagas to watch
 */
export default function* rootSaga() {
    yield all([
        fork(watchMoviesSaga),
        fork(watchSearchedMoviesSaga)
    ]);
}