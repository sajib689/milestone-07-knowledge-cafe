import { useState } from "react";
import { useEffect } from "react";


const Blogs = () => {
    const [data, setData] = useState([])
    useEffect( () => {
        fetch('blogs.json')
        .then( res => res.json())
        .then( data => setData(data) );
    }, []);
    console.log(data);
    return (
        <div>
            
        </div>
    );
};

export default Blogs;