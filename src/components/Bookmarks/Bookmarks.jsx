import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = (props) => {
    const bookmarks = props.bookmarks;
    return (
        <div className=" md:w-1/3 ml-3 mt-3 bg-gray-300 p-2 rounded-2xl">
            Bookmarks: {bookmarks.length}
            <div className=" ">
                <h2 className="bg-blue-300 text-center m-1 p-1 rounded-xl">Bookmarked Blogs:</h2>
            {
                bookmarks.map(bookmark => <Bookmark 
                    key={bookmark.id} 
                    bookmark= {bookmark}
                    ></Bookmark>)
            }
            </div>
        </div>
    );
};

export default Bookmarks;