
import { useState } from "react"
import Blogs from "./Components/Blogs/Blogs"
import BookMarks from "./Components/BookMarks/BookMarks"
import Header from "./Components/Header/Header"


function App() {
const [bookmarks, setBookmarks] = useState([])
const handleBookmarks = blog => {
  const newBookmarks = [...bookmarks, blog]
  setBookmarks(newBookmarks)
}

  return (
    <>
     <Header/>
     <div className="container mx-auto md:flex mt-[64px]">
     <Blogs handleBookmarks={handleBookmarks}/>
     <BookMarks bookmarks={bookmarks}/>
     </div>
    </>
  )
}

export default App
