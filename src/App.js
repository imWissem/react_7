import {useState} from 'react'
import Header from "./Components/Header"
import Movies from "./Components/Movies"
import AddMovie from './Components/AddMovie'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieDetails from './Components/MovieDetails'
function App() {
  const [ratingSearch, setRatingSearch] = useState(1);
  const [nameSearch, setNameSearch] = useState('');
  const [showAddMv, setShowAddMv] = useState(false)
  const [Movie, setMovie]= useState(
    [
      {
        Id: 1,
        Name: 'Over The Moon',
        Pic: 'https://th.bing.com/th/id/OIP.LFoLqzkcDbjK02GI0wCOIgHaJN?w=124&h=180&c=7&o=5&dpr=2.19&pid=1.7',
        Date: '2020',
        Type: 'Animation',
        Rating: 4,
        Description:'In this animated musical, a girl builds a rocket ship and blasts off, hoping to meet a mythical moon goddess.', 
        Trailer: 'https://www.youtube.com/embed/26DIABx44Tw', 
      },
      {
        Id: 2,
        Name: 'The Suicide Squad',
        Pic: 'https://th.bing.com/th/id/OIF.U8SybaNBAmmOIDTTCLkaKg?w=115&h=180&c=7&o=5&dpr=2.19&pid=1.7',
        Date: '2021',
        Type: 'Action',
        Rating: 5,
        Description: "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.", 
        Trailer: 'https://www.youtube.com/embed/JuDLepNa7hw'
      },
      {
        Id: 3,
        Name: 'Loki',
        Pic: 'https://th.bing.com/th/id/OIP.QGbAX401hhlW3OZiorPZDwHaHa?w=157&h=180&c=7&o=5&dpr=2.19&pid=1.7',
        Date: '2021',
        Type: 'Fantasy',
        Rating: 3,
        Description: 'The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of “Avengers: Endgame.', 
        Trailer: 'https://www.youtube.com/embed/nW948Va-l10'
      },
      {
        Id: 4,
        Name: 'What if ?',
        Pic: 'https://th.bing.com/th?id=OIF.wn4ME80DfRCxZhmwNY%2fuAw&w=115&h=180&c=7&o=5&dpr=2.19&pid=1.7',
        Date: '2021',
        Type: 'Animation',
        Rating: 2,
        Description:'Exploring pivotal moments from the Marvel Cinematic Universe and turning them on their head, leading the audience into uncharted territory.', 
        Trailer: 'https://www.youtube.com/embed//x9D0uUKJ5KI'
      },
      {
        Id: 5,
        Name: 'Jurassic Park',
        Pic: 'https://th.bing.com/th/id/OIP.O0w5yuma7vJlt4eJLIsgIwHaLH?w=123&h=185&c=7&o=5&dpr=2.19&pid=1.7',
        Date: '1993',
        Type: 'Adventure',
        Rating: 5,
        Description: 'A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the parks cloned dinosaurs to run loose.', 
        Trailer: 'https://www.youtube.com/embed/QWBKEmWWL38'
      },
      {
        Id: 6,
        Name:'Black Widow',
        Pic: 'https://th.bing.com/th/id/OIP.0wxmdLQ5v_x-MEwuwpL47AHaKe?w=182&h=257&c=7&o=5&dpr=2.19&pid=1.7',
        Date: '2021',
        Type: 'Action',
        Rating: 3,
        Description: 'Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.', 
        Trailer: 'https://www.youtube.com/embed/Fp9pNPdNwjI'
      },
    ])

  const addMovie = (Movies) => {
    const id = Math.floor(Math.random()*10000)+1
    const newMovie = {id,...Movies}
    setMovie([...Movie,newMovie]) 
  }

  return (
    <div className="App">
      <Router>
      <Header 
      setNameSearch={setNameSearch}
      ratingSearch={ratingSearch}
      setRatingSearch={setRatingSearch}
    
      onAdd={() => setShowAddMv(!showAddMv)} showAdd={showAddMv}/>
      {showAddMv && <AddMovie onAdd={addMovie}/>}
      <Route
        exact
        path='/'
        render={(props) => (
      <Movies {...props} 
        Movie={Movie}
        nameSearch={nameSearch}
        ratingSearch={ratingSearch}
      /> 
      )}/>

      <Route path='/:ID' >
        <MovieDetails   
         Movie={Movie}
        />
      </Route>

      </Router>
    </div>
  );
}

export default App;
