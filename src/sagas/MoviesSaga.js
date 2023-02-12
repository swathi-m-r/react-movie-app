import {put, takeEvery, call} from "redux-saga/effects"

function* getMoviesSaga(){

    let moviesList = []

    const response = yield call(fetch, 'https://api.themoviedb.org/3/movie/popular?api_key=14ccdb96456935bbb41591e99697d262&language=en-US&page=1');
    if(response?.status===200){
        const responseBody = yield response.json();
         moviesList = responseBody?.results
         yield put({type: 'SET_POPULAR_MOVIE_LIST',moviesList })
    }else{
        throw new Error("Api call failed")
    }
}

function* watchMoviesSaga (){
yield takeEvery('POPULAR_MOVIE_LIST', getMoviesSaga)
}

export default watchMoviesSaga