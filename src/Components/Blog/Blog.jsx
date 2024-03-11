import { CiBookmark } from "react-icons/ci";
import PropTypes from 'prop-types';

const Blog = ({ blog, handleBookmarks }) => {
  const { cover, title, author, author_img, posted_date, reading_time, hashtags } = blog;

  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl m-4">
        <figure>
          <img className="w-full" src={cover} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center">
            <div className="flex">
              {/* details */}
              <img className="w-12 h-12" src={author_img} alt="" />
              <div className="ms-3">
                <p>{author}</p>
                <p>{posted_date}</p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              {/* another */}
              <p>0{reading_time} min read</p>
              <button onClick={handleBookmarks}><CiBookmark /></button>
            </div>
          </div>
          <h2 className="card-title text-4xl">{title}</h2>
          <div className="flex ">
            <span>#{hashtags[0]}</span>
            <span className="ms-2">#{hashtags[1]}</span>
          </div>
          <div className="card-actions justify-start">
            <button className="btn btn-primary">Mark as read</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmarks: PropTypes.func,
};

export default Blog;
