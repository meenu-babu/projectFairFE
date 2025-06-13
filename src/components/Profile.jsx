import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { toast } from 'react-toastify';
import { addProfileApi } from '../services/allApi';
import { ToastContainer } from "react-toastify"


function Profile() {
  //name,email,password we already stored it in sessionstorage
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState('');
  const [preview, setPreview] = useState('');
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    password: '',
    github: '',
    linkedin: '',
    profileImage: ''
  });
  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem('existingUser'));

    if (userData) {
      setProfile((prev) => ({
        ...prev,
        name: userData.name || '',
        email: userData.email || '',
        password: userData.password || ''
      }));
    }
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      setToken(sessionStorage.getItem('token'));
    }
  }, []);

  useEffect(() => {
    if (profile.profileImage) {
      setPreview(URL.createObjectURL(profile.profileImage));
    }
  }, [profile.profileImage]);

  const addProfile = async () => {
  try {
    const { name, email, password, github, linkedin, profileImage } = profile;

    const reqBody = new FormData();
    reqBody.append('name', name);
    reqBody.append('email', email); 
    reqBody.append('password', password); 
    reqBody.append('github', github);
    reqBody.append('linkedin', linkedin); 
    reqBody.append('profileImage', profileImage); 

    const reqHeader = {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`
    };

    const result = await addProfileApi(reqBody, reqHeader);

    console.log("API result:", result);

    if (result.status === 200) {
      toast.success("Successfully added user data");
      handleClear();
    } else {
      toast.error("Something went wrong");
    }
  } catch (err) {
    console.error("Network or server error:", err);
    toast.error("Network error. Please try again.");
  }
};


  const handleClear = () => {
    setProfile({
      name: '',
      email: '',
      password: '',
      github: '',
      linkedin: '',
      profileImage: ''
    });
    setPreview('');

    console.log("within handle clear function")
  };

  return (
    <>
      <div className="shadow p-4">
        <div className="d-flex mt-3">
          <h5>MY PROFILE</h5>

          <div className="ms-auto">
            <button className="btn btn-primary" onClick={() => setOpen(!open)}>
              <i class="fa-solid fa-angle-up"></i>
            </button>
          </div>
        </div>
        {/* collapse */}
        <Collapse in={open}>
          <div>
            <div className="d-flex justify-content-between align-items-center">
              <label htmlFor="profileImg">
                <input
                  type="file"
                  id="profileImg"
                  style={{ display: 'none' }}
                  onChange={(e) => setProfile({ ...profile, profileImage: e.target.files[0] })}
                />
                <img
                  width={'100px'}
                  height={'100px'}
                  style={{ borderRadius: '50%' }}
                  src={preview ? preview : 'https://www.pngall.com/wp-content/uploads/5/Profile.png'}
                />
              </label>
            </div>

            <div className="mt-3">
              <input
                type="text"
                placeholder="Github Link"
                className="form-control"
                value={profile.github}
                onChange={(e) => setProfile({ ...profile, github: e.target.value })}
              />
            </div>
            <div className="mt-3">
              <input
                type="text"
                placeholder="Linkedin Link"
                className="form-control"
                value={profile.linkedin}
                onChange={(e) => setProfile({ ...profile, linkedin: e.target.value })}
              />
            </div>
            <div className="mt-3">
              <button className="btn btn-primary w-100" onClick={addProfile}>
                UPDATE PROFILE
              </button>
            </div>
          </div>
        </Collapse>
      </div>


      
       <ToastContainer 
        position="top-center" 
        autoClose={1000} 
        closeOnClick 
        pauseOnHover={false} 
      />
    </>
  );
}

export default Profile;
