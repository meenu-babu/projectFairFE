import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (

    <>
    <div className='d-flex justify-content-center align-items-center bg-primary p-3'
     style={{height:'260px',width:'100%'}}>
        <div className='d-flex justify-content-center align-items-evenly p-3'>
{/* firstdivision */}

        <div className='overview m-3' style={{width:'400px'}} >
    <h5><i class="fa-brands fa-stack-overflow me-3 text-warning"></i> 
    <span style={{color:'white',fontWeight:'700'}}>PROJECT FAIR

      </span> </h5>
      {/* <i class="fa-solid fa-video fa-beat" style="color: #FFD43B;"></i> */}
      {/* */}
      <p style={{color:'white',textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut optio laudantium, ullam perspiciatis numquam consectetur corrupti. Saepe aspernatur recusandae at quo eaque dolores rerum numquam officiis blanditiis, modi consectetur laboriosam?</p>

    </div>


{/* seconddivision */}
<div className='links d-flex flex-column m-3' style={{color:'white'}}>
      <h4>
        LINKS
      </h4>
   
      <Link to={'/'} style={{textDecoration:'none' ,color:'white'}}>HOME</Link>
      <Link to={'/wishlist'}style={{textDecoration:'none' ,color:'white'}}>WISHLIST</Link>
     <Link to={'/cart'}style={{textDecoration:'none' ,color:'white'}}>
     CART</Link>

    </div>

   {/* third division  */}

   <div className='links d-flex flex-column m-3' style={{color:'white'}}>
    <h4>
        GUIDES
      </h4>
        REACT<br/>
        REACT BOOTSTRAP<br/>
        FONT AWESOME<br/> 
        BOOTSWATCH  
    </div>

    {/* FOURTH DIVISION */}

    <div className='contact us d-flex flex-column m-3' style={{color:'white'}}>
  <h4>CONTACT US</h4>
  <div className='d-flex '>
    <input type="text" name="" placeholder="Enter  your Email" className='form-control'/> 
    <button className='btn btn-warning ms-4'>SUBSCRIBE</button> 
    </div>
    <div className="d-flex justify-content-evenly align-items-center mt-5">
    <i class="fa-brands fa-instagram fa-xl"></i>
    <i class="fa-brands fa-twitter fa-xl"></i>
    <i class="fa-brands fa-facebook fa-xl"></i>
    <i class="fa-brands fa-reddit fa-xl"></i>
    <i class="fa-brands fa-whatsapp fa-xl"></i>

    </div>

</div>

        </div>
     </div>
    </>
  
  )
}

export default Footer