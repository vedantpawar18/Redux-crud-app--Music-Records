import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ReqAuth from '../Components/ReqAuth'
import EditMusicRecord from './EditMusicRecord'
import HomePage from './HomePage'
import Login from './Login'
import MusicRecords from './MusicRecords'
import SingleMusicRecord from './SingleMusicRecord'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/music/:id" element={<ReqAuth><SingleMusicRecord /></ReqAuth>} />
        <Route path="/music/:id/edit" element={<EditMusicRecord />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h3>Page Not Found</h3>} />
    </Routes>
  )
}

export default MainRoutes