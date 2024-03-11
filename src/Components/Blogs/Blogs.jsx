import { useState } from "react";
import { useEffect } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";


const Blogs = ({handleBookmarks}) => {
    const [blogs, setBlogs] = useState([])
    useEffect( () => {
        fetch('blogs.json')
        .then( res => res.json())
        .then( data => setBlogs(data) );
    }, []);
    return (
        <div className="md:w-2/3">
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleBookmarks={() =>handleBookmarks(blog)}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    handleBookmarks: PropTypes.func.isRequired,
  };
  
export default Blogs;