import Rating from "./Rating";
const Search = ({setNameSearch,ratingSearch, setRatingSearch}) => {
    return (
    <div className="Search">
        <div className="SchByName">
            <input 
                type="text" 
                placeholder="enter Name"
                onChange={(e) => setNameSearch(e.target.value)}
            />
        </div>
        <div ClassName="SchByRate"> 
        <Rating Rating={ratingSearch} setRatingSearch={setRatingSearch} />
        </div>
    </div>

      );
}
 
export default Search;