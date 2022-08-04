import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getMusicRecords } from '../Redux/AppReducer/action'
import { store } from '../Redux/store';
import {Link, useSearchParams} from "react-router-dom"
import { useLocation } from 'react-router-dom';

const MusicRecords = () => {
    const dispatch= useDispatch();
    const [searchParams] = useSearchParams();
    
    const musicRecords = useSelector((store)=>store.AppReducer.musicRecords);

    const location= useLocation();

    useEffect(() =>{
       if (location || musicRecords.length===0){
        const sortBy = searchParams.get("sortBy")
        const queryParams= {
            params:{
                genre: searchParams.getAll("genre"),
                _sort: sortBy && "year",
                _order: sortBy
            }
        }
        dispatch(getMusicRecords(queryParams))
       }
    },[location.search]);

    console.log(musicRecords)
  return (

    <>
            {musicRecords.length>0 && musicRecords.map((album)=>{
                return (
                    <MusicRecordsWrapper key={album.id}>
                        <Link to={`/music/${album.id}`}>
                        <div>
                            {album.name}
                        </div>
                        <div>
                            <img src={album.img} alt="" />
                        </div>
                        <div>{album.genre}</div>
                        <div>
                            {album.year}
                        </div>
                        </Link>
                    </MusicRecordsWrapper>
                )
            })}
      </>  
    
  )
}

export default MusicRecords

const MusicRecordsWrapper = styled.div`
width:300px;
border: 1px solid red
`;