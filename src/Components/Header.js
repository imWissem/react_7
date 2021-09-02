import propTypes from "prop-types";
import Search from "./Search";
import Button from "./Button"
import {Link} from 'react-router-dom';
import {FaHome} from 'react-icons/fa'

const Header = ({title,onAdd,showAdd,setNameSearch,ratingSearch, setRatingSearch}) => {
    
    return ( 
        <div className="Header">
            <h1>{title}</h1>

            <Search
        setNameSearch={setNameSearch}
        ratingSearch={ratingSearch}
        setRatingSearch={setRatingSearch}
      />

            <Button
                color={showAdd ? 'red' : 'green'}
                text={showAdd ? 'Close' : 'add'}
                onClick={onAdd} 
            />
            <Link to={`/`}>
             <FaHome color="White"/>
            </Link>
        </div>
     );
}
Header.defaultProps = {
    title: 'MovieApp'
}

Header.propTypes  = {
    title: propTypes.string.isRequired ,
}
export default Header;