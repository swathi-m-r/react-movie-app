
import { useDispatch, useSelector } from 'react-redux';
import { useEffect , useState} from 'react';
import './App.css';
import {getPopularMoviesList, getMovieSearchList} from './actions/action'
import { Popular } from './components/popular/Popular';


function App() {
  const dispatch = useDispatch()
  const movieList = useSelector(state=>state?.movieData)
  const [searchData, setSearchData]= useState('');

  useEffect(()=>{
  dispatch(getPopularMoviesList())
  },[])

  const handleSearch = () =>{
    dispatch(getMovieSearchList(searchData))
  }

  return (
    <div className="App">
      <div className="search-bar">
      Search: <input type="search" id="moviesearch" onChange={(e)=>setSearchData(e.target.value)} value={searchData}/>
      <button id="search" name="search" onClick={handleSearch}>Search</button>
      </div>
      <Popular movieList={movieList} />
    </div>
  );
}

export default App;
