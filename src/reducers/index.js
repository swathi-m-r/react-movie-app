

export const movieslist = (initialState=[], action) => {
    switch (action.type){
        case "SET_POPULAR_MOVIE_LIST":
            console.log("inside set reducer", action)
           return action.moviesList
        default:
        return initialState
    }

}