import React, { useEffect, useState } from 'react';
import {useSearchParams} from "react-router-dom"

const FilterSort = () => {
    const [searchParams, setSearchParams]= useSearchParams();

    const initialGenreParams= searchParams.getAll("genre");

    const [category, setCategory] =useState(initialGenreParams || []);

    const initialSortParams= searchParams.get("sortBy")

    const [sortBy, setSortBy] =useState(initialSortParams || "");
    


    const handleGenreChange= (e) =>{
        const option = e.target.value;
        
        let newCategory= [...category];
        if(category.includes(option)){
            newCategory.splice(newCategory.indexOf(option),1);
        }
        else{
            newCategory.push(option);
        }
        setCategory(newCategory)

    };

    const handleSortBy =(e) =>{
        setSortBy(e.target.value)
    };

    useEffect(()=>{
        if(category || sortBy){
            setSearchParams({genre:category, sortBy:sortBy});
        }
    },[category, setSearchParams, sortBy])
    
  return (
    <div>
        <h3>Filter</h3>
        <div>
            <input type="checkbox" defaultChecked={category.includes("K-Pop")} value="K-Pop" onChange={handleGenreChange}/>
            <label>K-Pop</label>
        </div>
        <div>
            <input type="checkbox" defaultChecked={category.includes("Country")} value="Country" onChange={handleGenreChange}/>
            <label>Country</label>
        </div>
        <div>
            <input type="checkbox" defaultChecked={category.includes("Pop")} value="Pop" onChange={handleGenreChange}/>
            <label>Pop</label>
        </div>
        <div>
            <input type="checkbox" defaultChecked={category.includes("Holiday")} value="Holiday" onChange={handleGenreChange}/>
            <label>Holiday</label>
        </div>
        <div>
            <input type="checkbox" defaultChecked={category.includes("Heavy Metal")} value="Heavy Metal" onChange={handleGenreChange}/>
            <label>Heavy Metal</label>
        </div>
        <br />
        <br />
        <h3>SOrt</h3>
        <div onChange={handleSortBy}>
            <div>
                <input name='sortBy' type="radio" value="asc" defaultChecked={sortBy==="asc"} />
                <label >Ascending</label>
            </div>
            <div>
                <input name='sortBy' type="radio" value="desc"  defaultChecked={sortBy==="desc"}/>
                <label >Descending</label>
            </div>
        </div>
    </div>
  )
}

export default FilterSort