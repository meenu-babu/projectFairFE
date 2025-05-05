import React from 'react'
import AddProject from './AddProject'
import { Link } from 'react-router-dom'
import EditPjoject from './EditPjoject'

function MyProject() {
  return (
    <>
    <div className='shadow p-5 mb-5'>
        <div className='d-flex'>
            <h5 className='text-success me-auto'>MY PROJECTS</h5>
            <AddProject/>
        </div>
        <div className='p-3 mt-3 rounded d-flex' style={{backgroundColor:'lightgray'}}>
            <h6>MEDIA PLAYER</h6>
                <div className='d-flex ms-auto align-items-center'>
                    <Link>
                    <i class="fa-brands fa-github fa-lg me-3" style={{color:'blue'}}></i>
                    </Link>
                    <Link>
                    <i class="fa-solid fa-link  fa-lg " style={{color:'blue'}}></i>
                    </Link>
                    <EditPjoject/>
                </div>

        </div>
    </div>
    
    </>
  )
}

export default MyProject