
import Blogs from "./Components/Blogs/Blogs"
import BookMarks from "./Components/BookMarks/BookMarks"
import Header from "./Components/Header/Header"


function App() {

  return (
    <>
     <Header/>
     <div className="container mx-auto md:flex">
     <Blogs/>
     <BookMarks/>
     </div>
    </>
  )
}

export default App
