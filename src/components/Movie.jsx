import React, {useState} from 'react'
import movieData from './movieData'

const Movie = () => {
    const [movie, setMovie] = useState(movieData)
}
const removeAny = (id) => {
    let result = movie.filter((item) => item.id != id)
    setMovie(result);
}

    const render = movie.map((item, idx) => {
        return(
            <div>
                <img src={"item.imageUrl"} alt="data" width='200px' height='170px'/>
                <h4 style={{ textAlign:'center' }}>{item.category}</h4>
                <div className='btn'>
                <button onClick={()=>removeAny('item.id')}>X</button>
            </div>
        </div>
        )
    })

    const movieCheck = (category) => {
        let movieLink = movie.filter((movie) => 
            item.category === category)
            setMovie(movieLink)
    }


    const allwood = () => {
        setMovie(movieData)
    }

  return (
    <div>
      <h1>{movie.length} MOVIES AVAILABLE</h1>
      <div>
      <button onClick={()=>movieCheck('Hollywood')}>Hollywood</button>
      <button onClick={()=>movieCheck('Bollywood')}>Hollywood</button>
      <button onClick={()=>movieCheck('Nollywood')}>Hollywood</button>
      <button onClick={()=>movieCheck('Chinese')}>Hollywood</button>
      <button onClick={()=>allwood()}>All movies</button>
      </div>
      <div className='container'>
        {render}
        </div>
      </div>

  )


export default Movie
