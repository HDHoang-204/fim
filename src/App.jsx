
import './App.css'
import Header from './component/header/header'
import Banner from './component/mian/banner/banner'
import Movie from './component/mian/contact/movie'
import Movie1 from './component/mian/contact/movie1'
import { useState } from 'react'
import SearchMovie from './component/mian/contact/movielist'

function App() {

  const [search, setSearch] = useState([])
  const [ip, setIP] = useState('')

  async function handleSearch() {
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${ip}&include_adult=false&language=vi&page=1`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY} `
        }
      }
      const movie = await fetch(url, options)
      const data = await movie.json()
      setSearch(data.results)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (

    <div className='app'>
      <Header onsearch={handleSearch} ip={ip} setIP={setIP} />
      <Banner />
      {search.length > 0 ? <SearchMovie title={'Kết quả tìm kiếm'} search={search} /> : (
        <>
          <Movie title={'Phim hot'} />
          <Movie1 title={'Phim đề cử'} />
        </>
      )}

    </div>
  )
}

export default App
