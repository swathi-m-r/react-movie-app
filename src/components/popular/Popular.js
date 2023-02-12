
import "./popular.css"

export const Popular = ({movieList})=>{
    
    console.log("popularMovieData", movieList)

    return (
        <div className="container-fluid row">
        {movieList?.map(movie => (
            <div className="col-sm-3 movie-card">
               <h3 className="title">{movie.original_title}</h3>
               <hr></hr>
               <img className="image" src={"http://image.tmdb.org/t/p/w500"+movie.poster_path}/>
                <h5 className="review">Review : {movie.vote_average}</h5>
            {/* <p>{movie.overview}</p> */}
            </div>
        ))}
        </div>
    )
        
}