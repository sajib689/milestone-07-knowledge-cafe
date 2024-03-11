import PropTypes from "prop-types";

const BookMarkSignle = ({ bookmark }) => {
   
    return (
        <div className="bg-[#fff] text-[18px] font-bold p-3 rounded-lg mt-2">
            <p>{bookmark.title}</p>
        </div>
    );
};

BookMarkSignle.propTypes = {
    bookmark: PropTypes.object.isRequired,
};

export default BookMarkSignle;
