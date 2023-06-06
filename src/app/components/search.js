"use client"

import 'bootstrap/dist/css/bootstrap.css';
import '../styles.css';
import { useState } from 'react';

export default function Search(){
    // const[authors,setAuthors] = useState({results:[]});
    const[authors,setAuthors] = useState({results:[]});
    const [searchInput,setSearchInput] = useState('');
    const [modal,setModal] = useState(false);
    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        
      }
    //   https://api.openalex.org/authors?search=${searchInput}
    //   https://dummyjson.com/products/search?q=${searchInput}
const findAuthor=()=>{
   
    const url=`https://api.openalex.org/authors?search=${searchInput}`
    fetch(url)
    .then( (response)=> response.json())
    .then((data) => {
        console.log(data)
        setAuthors(data)
        
     })
     .catch((err=>{
        console.log(err)
     }))
}

    return (
        <> 
        <div className='case'>
            <input type="search" className='input' placeholder='Type author name to search' onChange={(e)=> searchItems(e.target.value)}/>
            <button className='searchbtn' onClick={findAuthor}>Search</button>
            </div>
            <div className='max-w-screen-md grid gap-4 grid-cols-1 m-auto md:grid-cols-2 searchdetails'>
                { authors.results.map((result)=>
                <div className="bg-zinc-100 dark:bg-darkOffset dark:text-gray-100 rounded-md p-3 hover:bg-gray-100 transition cursor-copy border-zinc-200 border dark:border-zinc-800"key={result.id}>
                    <p>{result.display_name}</p>
                </div>
                )}
               
               </div>
            </>
    )
}

