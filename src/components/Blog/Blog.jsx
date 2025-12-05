
const Blog = (props) => {
    const blog = props.data;
    const {author,posted_date,reading_time_minutes,hashtags,author_img,title, cover} = blog;
    return (
        <div >

            <img  className="mb-2 rounded-2xl" src={cover} alt={`The picture of title ${title}`} />
            <div className="flex justify-between items-center">
                <div className="flex items-center"> 
                    <img className="w-16 h-16 rounded-full" src={author_img} alt="" />
                    <div className="ml-2">
                        <h3>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div>
                    <span>{reading_time_minutes} Min read</span>
                </div>
            </div>
            <h2 className="text-xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash , idx) => <span key={idx}> <a>#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

export default Blog;