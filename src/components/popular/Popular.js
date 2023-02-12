
import "./popular.css"

// Component to Display List of movies

export const Popular = ({movieList})=>{
    return (
        <div className="container-fluid row">
        {movieList?.map((movie,index) => (
            <div key={index} className="col-sm-3 movie-card">
               <h3 className="title">{movie.original_title}</h3>
               <hr></hr>
               <img className="image" src={"http://image.tmdb.org/t/p/w500"+movie.poster_path}/>
                <h5 className="releaseDate">Release Date : {movie.release_date}</h5>   
            </div>
        ))}
        </div>
    )
        
}