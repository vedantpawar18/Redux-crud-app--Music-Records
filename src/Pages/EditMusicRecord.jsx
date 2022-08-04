import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { getMusicRecords, updateMusicRecords } from '../Redux/AppReducer/action';

const EditMusicRecord = () => {
  const musicRecords = useSelector(store=> store.AppReducer.musicRecords);
  const {id} = useParams();
  const [musicName, setMusicName]= useState("");
  const [artistName, setArtistName] = useState("");
  const dispatch= useDispatch();

  useEffect (() =>{
    if(id){
      const currentMusic = musicRecords.find(album=>album.id===id);
      if(currentMusic){
        setMusicName(currentMusic.name)
        setArtistName(currentMusic.artist)
      }
    }
  },[id, musicRecords]);

  const handleSubmit= (e) =>{
    e.preventDefault();
    const payload={
      name:musicName,
      artist: artistName
    }
    dispatch(updateMusicRecords(id,payload))
    .then(() => {
      dispatch(getMusicRecords());
    })
  };

  console.log(musicName, artistName)
  return (
    <div>
      <h1>Edit Page</h1>
      <form onSubmit={handleSubmit}>
      <div>
        <label>Edit Music Name</label>
        <input onChange={(e)=>setMusicName(e.target.value)} value={musicName}  />
      </div>
      <div>
        <label>Edit Artist Name</label>
        <input onChange={(e)=>setArtistName(e.target.value)} value={artistName} />
      </div>
      <div>
        <button type='submit'>Submit</button>
      </div>
      </form>
      <div>
        
        <Link to="/">Home</Link>
      </div>
    </div>
  )
}

export default EditMusicRecord