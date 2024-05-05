import { NextPage } from 'next'
import axios from 'axios'
import { useState } from 'react'

const About: NextPage = () => {
  const [movies, setMovies] = useState(
    [] as { id: string; title_long: string }[],
  )

  const onClick = () => {
    axios
      .get('https://yts.mx/api/v2/list_movies.json')
      .then((res) => {
        setMovies(res.data.data.movies)

        console.log(movies)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <h2>영화 목록</h2>
      <button onClick={onClick}>검색</button>
      {movies.map((movie) => {
        return (
          <>
            <div key={movie?.id}></div>
            <h4>{movie?.title_long}</h4>
          </>
        )
      })}
    </>
  )
}

export default About
