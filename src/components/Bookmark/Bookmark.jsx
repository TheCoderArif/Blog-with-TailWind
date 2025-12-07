
const Bookmark = (props) => {
    const bookmark = props.bookmark;
    const {title} = bookmark;
    return (
        <div>
            
            <p className="bg-amber-100 rounded-xl m-1 p-1">{title}</p>
        </div>
    );
};

export default Bookmark;