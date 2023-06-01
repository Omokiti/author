"use client"

import 'bootstrap/dist/css/bootstrap.css';
import '../styles.css';
import { useState } from 'react';

export default function Search(){
    // const[authors,setAuthors] = useState({results:[]});
    const[authors,setAuthors] = useState({products:[] });
    const [searchInput,setSearchInput] = useState('');
    const [modal,setModal] = useState(false);
    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
      }
    //   https://api.openalex.org/authors?search=${searchInput}
    //   https://dummyjson.com/products/search?q=${searchInput}
const findAuthor=()=>{
    const url=`https://dummyjson.com/products/search?q=${searchInput}`
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
                { authors.products.map((product)=>
                <div key={product.id}>
                    <p>{product.title}</p>
                </div>
                )}
               
               </div>
            </>
    )
}