

export const movieslist = (initialState=[], action) => {
    switch (action.type){
        case "SET_POPULAR_MOVIE_LIST":
           return action.moviesList
        default:
        return initialState
    }

}