// import React, { useState } from "react";
import React, {useEffect, useState} from "react";


import './Homepage.css'; 
import './../../image/image1.jpeg'
import { deleteUser, fettchUsers } from "../../api/Api";
import { useDispatch,useSelector } from "react-redux";
import { addUser } from "../../redux_storage/userSlice";
import EditUserModal from "../../components/EditUserModal";


//make a arrow funciton(filename)
function Homepage() {
    const [isLogin, setIsLogin] = useState(true);
  
    const toggleForm = () => {
      setIsLogin(!isLogin);

       <></> 
    }

//make a dspatch
const dispatch =useDispatch()
  

//selector (seclect from storage)-list of users
//for editng
const users=useSelector((state)=> state.users.users) //list of users,Array




    // Automatic user fetch(useEffect)
    useEffect(()=>{
      //fetch all users
      fettchUsers().then((res)=>{
        console.log(res.data)

        //adding user to redux 
        dispatch (addUser(res.data));

      }). catch ((error)=>{
        console.log(error)
      })

    },[])
    
const [selectedUser,setSelectedUser]=useState(null)
const [isModalOpen, setModalOpen] =useState(false)

//fucntion for openand clsoe

const handleOpenModal=(user) =>{
  setSelectedUser(user)
  setModalOpen(true)
  


}

const handleClosedModal =() =>{
  setModalOpen(false)
  setSelectedUser(null)
  
}

//delete user 

const handleDelete =(id) =>{
  const confirm = window.confirm("Are you sure you want to delete?")
  if(!confirm){
    return;
  }
  //delete user 
   deleteUser(id).then((res)=>{
  if(res.statusText==='OK'){
      alert('user Deleted!')
      window.location.reload()
    }

  
  }).catch((error)=>{
    console.log(error)
    alert ('server Error')
  })

}
    return (
        <>
        {/* table */}
       <table className="table">
         <thead className="table-dark">
          <tr>
            <th> ID</th>
            <th> firstName</th>
            <th> lastName</th>
            <th> email</th>
            <th> Actions</th>
          </tr>
         </thead>
         <tbody>


{
    users.map((singleUser) => (
        <tr>
            <td>{singleUser.id}</td>
            <td>{singleUser.firstname}</td>
            <td>{singleUser.lastname}</td>
            <td>{singleUser.email}</td>
            <td>
                <div className="btn-group">
                <button onClick={()=> handleOpenModal(singleUser)} className="btn btn-success">Edit</button>
                    <button className="btn btn-danger" onClick={()=>handleDelete(singleUser.id)} >Delete</button>
                </div>
            </td>
        </tr>
    ))
}



</tbody>
       </table>

{/* 
       if user click eidt , then only ahow modal */}

       {
        isModalOpen && <EditUserModal


           selectedUser={selectedUser}
           onClose={handleClosedModal}
        
        
        />
       }
        </>
      );
    }
    
    // function LoginForm({ toggleForm }) {
    //   const [email, setEmail] = useState('');
    //   const [password, setPassword] = useState('');
    
    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Handle login logic here
    //   };
    
    //   return (
    //     <div>
    //       <h2>Login</h2>
    //       <form onSubmit={handleSubmit}>
    //         <div>
    //           <label>Email:</label>
    //           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    //         </div>
    //         <div>
    //           <label>Password:</label>
    //           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    //         </div>
    //         <button type="submit">Login</button>
    //       </form>
    //       <p>
    //         Don't have an account? <button onClick={toggleForm}>Register</button>
    //       </p>
    //     </div>
    //   );
    // }
    
    // function RegisterForm({ toggleForm }) {
    //   const [email, setEmail] = useState('');
    //   const [password, setPassword] = useState('');
    //   const [confirmPassword, setConfirmPassword] = useState('');
    
    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Handle registration logic here
    //   };
    
    //   return (
    //     <div>
    //       <h2>Register</h2>
    //       <form onSubmit={handleSubmit}>
    //         <div>
    //           <label>Email:</label>
    //           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    //         </div>
    //         <div>
    //           <label>Password:</label>
    //           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    //         </div>
    //         <div>
    //           <label>Confirm Password:</label>
    //           <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
    //         </div>
    //         <button type="submit">Register</button>
    //       </form>
    //       <p>
    //         Already have an account? <button onClick={toggleForm}>Login</button>
    //       </p>
    //     </div>
    //   );
    // }

//Export
export default Homepage;

//mapping [{users},{user 2}]
// indexedDB;0,1,2,3;


//logic 
//1. fetch user information
//2. Automatic
//3. Trigger redux Storage(add user)
//4. storage has data 
//5. fetch form storgae
//6. display in UI


//logic for Eedit data

//data = table (row -button-edit)
//select yhat  sepeicific iuser
//oopen the popup model wiyhy that selected data
//fillt he modal

