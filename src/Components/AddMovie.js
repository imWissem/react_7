import { useState } from 'react'
import Button from './Button'

const AddMovie = ({onAdd}) => {
    const [Pic, setPic] = useState('')
    const [Name, setName] = useState('')
    const [Type, setType] = useState('')
    const [Date, setDate] = useState('')
    const [Description, setDescription] = useState('')
    const [Rating, setRating] = useState('')
    const [Trailer, setTrailer] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()
        if (!Name) {
          alert('Please add a Movie')
          return
        }
    onAdd({Pic,Name,Type,Date,Description,Rating,Trailer})
    setPic('')
    setName('')
    setType('')
    setDate('')
    setDescription('')
    setRating('')
    setTrailer('')
    }
    return(
        <form>
          <div className="right">  
            <label>Poster :</label>
            <input 
                Type='url'
                placeholder='poster_link'
                value={Pic}
                onChange={(e) => setPic(e.target.value)}
            />

            <label>Name :</label>
            <input 
                Type='text'
                placeholder='Movie_name'
                value={Name}
                onChange={(e) => setName(e.target.value)}
            />

            <label>Type :</label>
            <input 
                Type='text'
                placeholder='Movie_type'
                value={Type}
                onChange={(e) => setType(e.target.value)}
            />

            <label>Date :</label>
            <input 
                Type='text'
                placeholder='Date'
                value={Date}
                onChange={(e) => setDate(e.target.value)}
            />
</div><div className="left">
            <label>Description :</label>
            <input 
                Type='text'
                placeholder='Movie_Description'
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <label>Rating</label>
            <input 
                Type='text'
                placeholder='Movie_Rating'
                value={Rating}
                onChange={(e) => setRating(e.target.value)}
            />

            <label>Trailer</label>
            <input 
                Type='url'
                placeholder='Trailer_link'
                value={Trailer}
                onChange={(e) => setTrailer(e.target.value)}
            />
            <Button
                text='Submit'
                Color='black'
                onClick={onSubmit}
            />
</div>


        </form>
    )

}
export default AddMovie
