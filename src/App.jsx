
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const handleBookmark = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks);
  }

  return (
    <>
      <div>
        <Header></Header>
        <div className='mx-auto max-w-5xl  md:flex justify-center'>
          <Blogs handleBookmark = {handleBookmark}></Blogs>
          <Bookmarks bookmarks = {bookmarks}></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
