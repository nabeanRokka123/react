import React, {useState} from 'react';
import { updateUser } from '../api/Api';

const EditUserModal = ({selectedUser, onClose}) => {
    
    // state form data
    const [formData, setFormData] = useState({
        "firstname" : selectedUser.firstname,
        "lastname"  : selectedUser.lastname,
        "email" : selectedUser.email
    })

    // onChange value changes
    const handleChange = (e) => {
        // destructure the e - event
        const {id, value} = e.target;

        // set the form data
        setFormData({...formData, [id] : value}) // ...formData is previous values
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // actual api
        updateUser(selectedUser.id, formData).then((res) => {
            if(res.statusText === 'OK'){
                alert('User Updated!')
                window.location.reload()
            }
        }).catch((error) => {
            console.log(error)
            alert('Server Error!')
        })
    }


    
    return (
        <div className="modal" style={{ display: 'block' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5">Edit User for <span className='text-danger'>{selectedUser.firstname}</span></h1>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                       
                           <label>Firstname</label>
                           <input onChange={handleChange} id='firstname' type="text" className='form-control' defaultValue={selectedUser.firstname} />

                           <label>Lastname</label>
                           <input onChange={handleChange} id='lastname' type="text" className='form-control' defaultValue={selectedUser.lastname} />

                           <label>Email Address</label>
                           <input onChange={handleChange} id='email' type="text" className='form-control' defaultValue={selectedUser.email} />
                       
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default EditUserModal;
