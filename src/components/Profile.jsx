import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Profile() {
  const [open, setOpen] = useState(false);
  
  return (
   <>
   <div className='shadow p-4'>
    <div className='d-flex mt-3'>
      <h5>MY PROFILE</h5>
   
    <div className='ms-auto'>
    <button  className='btn btn-primary'  onClick={() => setOpen(!open)}>
    <i class="fa-solid fa-angle-up"></i>
    </button>
    </div>
    </div>
    {/* collapse */}
    <Collapse in={open}>
        <div>
          <div className='d-flex justify-content-between align-items-center'>
            <label htmlFor='profileImg'>
              <input type='file' id='profileImg' style={{display:'none'}}/>
              <img
              width={'100px'}
              height={'100px'}
              style={{borderRadius:'50%'}}
               src='https://www.pngall.com/wp-content/uploads/5/Profile.png'/>
            </label>
          </div>

          <div className='mt-3'>
            <input type='text' placeholder='Github Link' className='form-control'/>
          </div>
          <div className='mt-3'>
            <input type='text' placeholder='Linkedin Link'  className='form-control'/>
          </div>
          <div className='mt-3'>
            <button className='btn btn-primary w-100'>UPDATE PROFILE</button>
          </div>
          
        </div>
      </Collapse>

   </div>
   </>
  )
}

export default Profile