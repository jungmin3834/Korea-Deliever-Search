import React from 'react';
import Background from '../../logo.jpg';


//메인 이미지 로고
function ButtonSubmit(){
    return (
        <div style={{width: "100%" , height:"10%",marginBottom:"5%" ,marginTop:"50px"}}> 
        <div style={{width:"100%",height:"10%"}}>
          <img style={{width:"10%",height:"10%",margin:"0 auto"}} src={Background} alt="backGround"></img>
          <label style={{fontSize:"400%",margin:"0 auto"}}>
             The-Gifting-Co.
          </label>    
        </div>
         </div>
    );
}

export default ButtonSubmit