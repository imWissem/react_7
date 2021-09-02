import Rating from "./Rating";
import {Link} from 'react-router-dom';
const MovieCard = ({Movie}) => {
    return ( 
    <div className="MovieCard Mv">
        <img className='Face front' src={Movie.Pic} alt={Movie.Name}/>
        <div className="Face back">
        <h3 className="nm">{Movie.Name}</h3>
        <p className="info">{Movie.Type} / {Movie.Date} / <Rating Rating={Movie.Rating} /></p>
        <Link to={`/${Movie.Id}`}>see Details</Link>
        </div>
    </div> 
    );
}
 
export default MovieCard;