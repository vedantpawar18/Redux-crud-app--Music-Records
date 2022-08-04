import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { getMusicRecords } from '../Redux/AppReducer/action';

const SingleMusicRecord = () => {
  const {id} = useParams();
  const musicRecords = useSelector(store=> store.AppReducer.musicRecords);
  const [currentMusicAlbum, setCurrentMusicAlbum] = useState({});
  const dispatch= useDispatch();

  useEffect(()=>{
    if(musicRecords.length===0){
      dispatch(getMusicRecords());
    }
  },[dispatch, musicRecords.length]);

  useEffect (() =>{
    if(id){
      const currentMusic = musicRecords.find(album=>album.id===id);
      currentMusic && setCurrentMusicAlbum(currentMusic);
    }
  },[id, musicRecords]);

  console.log(currentMusicAlbum)
  return (
    <div>
      <div>
        <h1>{currentMusicAlbum.name}</h1>
      </div>
      <div>
        <img src={currentMusicAlbum.img} alt="" />
      </div>
      <div>
        <h5>{currentMusicAlbum.artist} ||  {currentMusicAlbum.genre}  || {currentMusicAlbum.year}</h5>
      </div>
      <Link to={`/music/${id}/edit`}>Edit</Link>
    </div>
  )
}

export default SingleMusicRecord