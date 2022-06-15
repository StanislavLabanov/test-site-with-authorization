import React from 'react';
import { registyNewsMassType } from '../types/types';


const RegistryNews: React.FC<registyNewsMassType> = ({ objectsData }) => {
   return (
      <div className='registry_news_block'>
         <div className='container'>
            <h2>Новости реестра</h2>
            <div className='news'>
               {
                  objectsData.map(el =>
                     <div key={el.id} className='card_news'>
                        <div className='block_image_card_news'>
                           <img src={el.img} className='image_card_news' />
                        </div>
                        <div className='name_card'>{el.name}</div>
                        <div className='data_publication_card'>
                           <img src={el.dataImg} className='data_img' />
                           <div className='data_card'>{el.data}</div>
                        </div>
                        <div className='description_card'>{el.title}</div>
                     </div>
                  )
               }
            </div>
            <div className='button_show_all'>
               Показать все
            </div>
         </div>
      </div>
   )
}

export default RegistryNews;