import React from 'react';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

const MovieDetails = ({Movie}) => {
    const {ID}=useParams();
    return ( 
        <div className="MovieDetails"> 
        <div>
            <img src={Movie.find(movies=> movies.Id==ID).Pic} />
        </div><div className="DETAIL">
            <h1>{Movie.find(movies=> movies.Id==ID).Name}</h1>
            <p> This {Movie.find(movies=> movies.Id==ID).Type} Movie Was Made in " 
            {Movie.find(movies=> movies.Id==ID).Date}" </p>
            {Movie.find(movies=> movies.Id==ID).Description}
            <iframe 
                src={Movie.find(movies=> movies.Id==ID).Trailer} 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
            <Link to={`/`}>
            <h3 className="gohome">Go To Home Page !!</h3>
            </Link>
         </div>
        </div>
     );
}
 
export default MovieDetails;