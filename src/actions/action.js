//Action to get populat movie
export const getPopularMoviesList = () =>{
    return {
        type: 'POPULAR_MOVIE_LIST',
    }
}

//Action to search movie based on search value
export const getMovieSearchList = (value) => {
return {
    type: 'SEARCHED_MOVIE_LIST',
    data: value
}
}