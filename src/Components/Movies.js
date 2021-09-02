import MovieCard from './MovieCard'

const Movies = ({Movie,ratingSearch,nameSearch}) => {
    return ( 
        <div className="Movies">
          {
            Movie.filter((element) => element.Name.toLowerCase().includes(nameSearch.toLowerCase().trim())
            && element.Rating >= ratingSearch)
            .map((element)=>(<MovieCard Key={element.Id} Movie={element}/>))
          }
        </div>
     );
}
 
export default Movies;