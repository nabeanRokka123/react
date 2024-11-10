import React, { useEffect, useState } from "react";
import { fettchUsers } from "../../api/Api";
import { FaUserNurse } from "react-icons/fa6";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  //state for all data and searched data
  const [users, setUser] = useState([]);
  const [searchresult, setsearchResult] = useState([]);

  //data fetch

  useEffect(() => {
    fettchUsers()
      .then((res) => {
        //Adding to the state
        if (res.statusText === "OK") {
          setUser(res.data);
          setsearchResult(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


//searching user

const handleSearchChange=(e)=>{
   
    //take a search query

    const query = e.target.value;

    //filtering usrs and updating searchREsult
    const filteredUser= users.filter((singleUser)=>

    //first, we get single user
    //chnage it to lowercase
    //'test' -typed value



   singleUser.firstname.toLowerCase().includes(query.toLowerCase()) || 
   singleUser.lastname.toLowerCase().includes(query.toLowerCase())

    )
    //set as search result
    setsearchResult(filteredUser)
}


  return (
    <>
      <div className="container">
        <div className="mt-3">
          <h3>Searching </h3>
          <input
            onChange={handleSearchChange}
            type="text"
            className="form-control"
            placeholder="Search"
          ></input>
        </div>
        <hr />
                <h5><i><u>Search Result:</u></i></h5>
                {
                    searchresult.length > 0 ? (
                        searchresult.map((user) => (
                            <div key={user.id} className='card mt-2'>
                                <div className='card-body'>
                                    <div className='d-flex'>
                                        <FaUserNurse size={'30px'} />
                                        <div className='ms-3'>
                                            <h5 className='card-title'>{user.firstname} {user.lastname}</h5>
                                            <p><u>{user.email}</u></p>
                                        </div>

                                    </div>
                                </div>
                            </div>
          ))
        ) : (
          <p>No user found!</p>
        )}
      </div>
    </>
  );
};

export default Search;
