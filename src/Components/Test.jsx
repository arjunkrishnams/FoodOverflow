import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Test() {
  const [count, setCount] = useState(0)
  const [id, setId] = useState("tt0111161")
  const [movie, setMovie] = useState('')

  var genreDictionary = {};
  var url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
    
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTMzOWUzMWJiN2Y2NWMyMzhiYTg3YTIxNGEzYmZhMCIsInN1YiI6IjY1YmNhYjY4NzY0NmZkMDE2M2JlMmMwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NmZvJlwR5TQmCBRQ7SkU6cpG145CkjXmLEC2a-puGbw'
    }
  };
  
  function getDictionary() {
    fetch(url,options)
    .then(response => {
      return response.json()
    })
    .then(data => {
    
      var userid = data.genres;
      genreDictionary = Object.fromEntries(
        userid.map(({ name, id }) => [name, id])
      );
      console.log(genreDictionary);
      console.log(genreDictionary[id]);
      console.log(id);
      url = `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreDictionary[id]}`;
      fetch(url,options)
      .then(response => {
        return response.json()
      })
      .then(data => {
        var userid = data;
        console.log(userid);
      })
      
    })

  }   
    
  useEffect(() => {

    getDictionary();
  }, [id])

  return (
    <>
      <p>Hi</p>
      <input type="text" value={movie} onChange={(e) => setMovie(e.target.value)} />
      <button onClick={() => setId(movie)}>Search</button>
    </>
  )
}

export default Test
