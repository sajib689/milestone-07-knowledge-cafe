
import PropTypes from 'prop-types';
import BookMarkSignle from '../BookMarkSignle/BookMarkSignle';
const BookMarks = ({ bookmarks }) => {
  return (
    <div className="md:w-1/3">
      <h1>Book Marks: {bookmarks.length}</h1>
      <>
        {bookmarks.map(bookmark => <BookMarkSignle key={bookmark.id} bookmark={bookmark}></BookMarkSignle>)}
      </>
    </div>
  );
};

BookMarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
};

export default BookMarks;
