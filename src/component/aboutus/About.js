import React from 'react';
import user from '../user.jpg'
import style from './aboutus.module.css';


const About = () => (
  <>
   <div className={style.abt1}>
     <h3>About us</h3>
    <div className={style.secDiv}>
       <div>
      </div>
    </div>
  
   <div className={style.outer}>
                <div><h1>About Us</h1></div>
                <div className={style.para}>
                    <img className={style.im} src={user} alt='About'/>
                    </div>
              
                <div className={style.box}>
                    <div className={style.dv}></div>
                    <div className={style.dv}></div>
                    <div className={style.dv}></div>
                </div>
            </div>
            </div>
  </>
);

export default About;
