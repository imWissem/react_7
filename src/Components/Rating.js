import {FaStar} from 'react-icons/fa'
const Rating = ({Rating,setRatingSearch}) => {
    const stars = (x) => {
        let starsArray = [];
        for (let i = 1; i <= 5; i++) {
          if (i <= x) {
            starsArray.push(
              <span key={i} onClick={() => setRatingSearch(i)}>
                <FaStar color="yellow"/>
              </span>
            );
          } else {
            starsArray.push(
              <span key={i} onClick={() => setRatingSearch(i)}>
                <FaStar color="White"/>
              </span>
            );
          }
        }
        return starsArray;
      };
      return <div>{stars(Rating)}</div>;
    };
    
    Rating.defaultProps = {
     setRatingSearch: () => {},
      Rating: 1,
    };
 
export default Rating;