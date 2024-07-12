import React, { useEffect, useState } from 'react'
import { fettchUsers } from '../../api/Api'

const Search = () => {

    const[searchQuery, setSearchQuery]= useState('')

    //state for all data and searched data
    const[user,setUser]=useState([])
    const[searchresult,setsearchResult]= useState([])

    //data fetch

    useEffect(()=> {
        fettchUsers().then((res)=>{

            //Adding to the state
            if(res.statusText==='ok'){
                setUser(res.data)
                setsearchResult(res.data)
            }

        }).catch((error)=>{
            console.log(error)
        })
    },[])


  return (
    <>
    <div className='container'>
        <div className='mt-3'>
            <h3>Searching </h3>
            <input onChange={(e)=> e.target.value} type="text"  className='form-control' placeholder='Search'></input>
            
        </div>
        <hr/>
        <h5><i><u>Search Result :</u></i></h5>{
            searchresult.length>0? (
             <div></div>   
            ):(
            <p>No user found!</p>)
        }
    </div>

       </>
  )
}

export default Search
