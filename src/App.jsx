import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const [readingTime, setReadingTime] = useState(0);


  const handleBookmark = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks);
  }

  const handleReadingTime = (id, time) => {
    const newReadingTime = readingTime + time ;
    setReadingTime(newReadingTime);

    const newBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(newBookmarks)
  }

  return (
    <>
      <div>
        <Header></Header>
        <div className='mx-auto max-w-5xl  md:flex justify-center'>
          <Blogs handleBookmark = {handleBookmark} handleReadingTime={handleReadingTime}
          ></Blogs>
          <Bookmarks readingTime = {readingTime} bookmarks = {bookmarks}></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
