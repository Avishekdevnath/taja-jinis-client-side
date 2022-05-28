import React from 'react';
import niloy from '../../../assets/developer/niloy.jpg';
import avishek from '../../../assets/developer/avishek.png';
import bijon from '../../../assets/developer/bijon.png';
import  './Developer.css'
const Developer = () => {
    return (
     <div className=' mb-20 mx-10 place-items-center grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-20 '>
         <div className="m-5">
            <div className="single_member">
                <div className="image">
                    <img src={niloy} alt=""/>
                </div>
                <div className="content fw-bolder">
                    <h3 className="name fs-2">Niloy Dey</h3>
                    <span className="designation " >Front-End Developer</span>
                </div>
                 <div className="image-border"></div>
              </div>    
      </div>


      <div className="m-5 ">
            <div className="single_member">
                <div className="image">
                    <img className='image-full' src={avishek} alt=""/>
                </div>
                <div className="content fw-bolder">
                <h3 className="name ">Avishek Devnath</h3>
                    <span className="designation ">Back-End Developer</span>
                </div>
                 <div className="image-border"></div>
              </div>    
      </div>


      <div className=" m-5">
            <div className="single_member">
                <div className="image">
                    <img src={bijon} alt=""/>
                </div>
                <div className="content fw-bolder">
                <h3 className="name fs-2">Bijon Talukdar</h3>
                    <span className="designation">Software Developer</span>
                </div>
                 <div className="image-border"></div>
              </div>    
      </div>
     </div>
    );
};

export default Developer;

