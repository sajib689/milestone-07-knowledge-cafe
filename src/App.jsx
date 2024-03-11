
import { useState } from "react"
import Blogs from "./Components/Blogs/Blogs"
import BookMarks from "./Components/BookMarks/BookMarks"
import Header from "./Components/Header/Header"


function App() {
const [bookmarks, setBookmarks] = useState([])
const [readingTime, setReadingTime] = useState(0)
const handleBookmarks = blog => {
  const newBookmarks = [...bookmarks, blog]
  setBookmarks(newBookmarks)
}
const handleMarkAsRead = time => {
  const totalTime = readingTime + parseFloat(time)
  setReadingTime(totalTime)
}
console.log(readingTime)
  return (
    <>
     <Header/>
     <div className="container mx-auto md:flex mt-[64px]">
     <Blogs  handleMarkAsRead={handleMarkAsRead} handleBookmarks={handleBookmarks}/>
     <BookMarks readingTime={readingTime} bookmarks={bookmarks}/>
     </div>
    </>
  )
}

export default App
