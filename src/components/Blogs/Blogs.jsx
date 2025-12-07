import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookmark, handleReadingTime}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[]);
// console.log(blogs)
    // const handleBookmark = props.handleBookmark;
    // console.log(handleBookmark)
    return (
        <div className="  md:w-2/3">
            <p>Blogs: {blogs.length}</p>
            <div>
                {
                    blogs.map(blog => <Blog handleBookmark = {handleBookmark} handleReadingTime={handleReadingTime} key={blog.id} data={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;