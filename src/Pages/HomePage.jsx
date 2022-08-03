import React from 'react'
import styled from 'styled-components'
import FilterSort from '../Components/FilterSort'
import MusicRecords from './MusicRecords'

const HomePage = () => {
  return (
    <HomePageWrapper>
        <FilterSortWrapper>
        <FilterSort />
        </FilterSortWrapper>
        <MusicRecordWrapper>
        <MusicRecords />
        </MusicRecordWrapper>
    </HomePageWrapper>
  )
}

export default HomePage

const HomePageWrapper = styled.div`
display:flex;
height:100vh
`
const FilterSortWrapper = styled.div`
width: 200px;
border: 1px solid red
`
const MusicRecordWrapper = styled.div`
width: 100%;
border: 1px solid blue;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
justify-content:center;
grid-gap:10px
`