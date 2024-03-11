
import PropTypes from 'prop-types';
import BookMarkSignle from '../BookMarkSignle/BookMarkSignle';
const BookMarks = ({ bookmarks,readingTime }) => {

  return (
    <div className="md:w-1/3 ms-10">
      <button className="bg-[#6047EC1A] btn text-[#6047EC]">Spent time on read : {readingTime} min</button>
      <div className='bg-[#1111110D] p-1 mt-10 rounded-lg'>
      <h1 className='text-[#111111] text-[24px] mt-3'>Bookmarked Blogs : {bookmarks.length}</h1>
      
        {bookmarks.map(bookmark => <BookMarkSignle key={bookmark.title} bookmark={bookmark}></BookMarkSignle>)}
        </div>
    </div>
  );
};

BookMarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.func.isRequired,
};

export default BookMarks;
