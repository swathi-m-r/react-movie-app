import {put, takeEvery, call} from "redux-saga/effects"

function* getSearchedMoviesSaga(query){
    const queryData = query?.data
    const baseURL = 'https://api.themoviedb.org/3/search/movie?api_key=14ccdb96456935bbb41591e99697d262&language=en-US&'
    let queryurl = baseURL

    let moviesList = []

    if (queryData && queryData.length > 0) {
        const parsedQuery = queryData.replaceAll(' ', '+');
        queryurl = `${baseURL}query=${parsedQuery}&page=1&include_adult=false`;
    }
    
    const response = yield call(fetch, queryurl);
    if(response?.status===200){
        const responseBody = yield response.json();
         moviesList = responseBody?.results
         yield put({type: 'SET_POPULAR_MOVIE_LIST',moviesList })
    }else{
        throw new Error("Api call failed")
    }
}

function* watchSearchedMoviesSaga (){
yield takeEvery('SEARCHED_MOVIE_LIST', getSearchedMoviesSaga)
}

export default watchSearchedMoviesSaga