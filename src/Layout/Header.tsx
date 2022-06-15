import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
   return (
      <div className='header'>
         <div className='container_header'>
            <div className='header_left_block'>
               <Link to={'/'}><img src='./images/mainlogo.png' className='mainlogo' /></Link>
               <div className='search'>
                  <img src='./images/Vector3.png' className='Vector3' />
                  <input placeholder='Поиск' />
               </div>
            </div>
            <div className='header_right_block'>
               <div className='images_block'>
                  <img src='./images/Vector.png' className='Vector' />
                  <img src='./images/Vector1.png' className='Vector1' />
               </div>
               <div className='user_block'>
                  <div className='user_block_image'>
                     <img src='./images/Vector4.png' />
                  </div>
                  <div className='user_block_name'><Link to={'/login'}>Вход в аккаунт</Link></div>
                  <img src='./images/Vector2.png' />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Header;