import React from 'react';

const MainPhoto: React.FC = () => {
   return (
      <div className='main_photo'>
         <div className='container'>
            <div className='flex_block'>
               <div className='main_photo_left_block'>
                  <h1>РЕЕСТР<br />
                     ПРОГРАММНОГО<br />
                     ОБЕСПЕЧЕНИЯ</h1>
                  <div className='info_main_photo_block'>Единый реестр программ для электронных<br />
                     вычислительных машин и баз данных</div>
                  <div className='info_main_photo_block'>Включено ПО в реестр: <span>13 438</span><br />
                     Правообладателей: <span>4 272</span></div>
                  <div>
                     <div className='flex'>
                        <div className='input_search_main_photo_block'>
                           <img src='./images/Vector3.png' className='Vector3' />
                           <input placeholder='Искать реестр...' />
                        </div>
                        <div className='search_button'>Искать</div>
                     </div>
                  </div>
               </div>
               <div className='main_photo_right_block'>
                  <img src='./images/3d Office Work 1.png' />
               </div>
            </div>
         </div>
      </div>
   )
}

export default MainPhoto