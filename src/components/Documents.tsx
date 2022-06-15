import React from 'react';
import { DocumentsPropsType } from '../types/types';


const Documents: React.FC<DocumentsPropsType> = ({ documentsMass }) => {
   return (
      <div className='documents_block'>
         <div className='container'>
            <h2>Документы</h2>
            <div className='info_main_photo_block'>Всего документов: <span>5</span></div>
            <table>
               <thead>
                  <tr className='nav_table'>
                     <th className='category_el'>Категория</th>
                     <th className='title_el'>Наименование </th>
                     <th className='data_el'>Дата</th>
                     <th className='page_el'>Номер</th>
                     <th>
                        <img src='./images/Vector6.png' />
                        Содержание
                     </th>
                  </tr>
               </thead>
               {
                  documentsMass.map(el =>
                     <tbody key={el.size} >
                        <tr>
                           <th className='category_el'>{el.category}</th>
                           <th className='title_el'>{el.title}</th>
                           <th className='data_el'>{el.data}</th>
                           <th className='page_el'>{el.page}</th>
                           <th>
                              <div className='flex_download'>
                                 <img src={el.img} />
                                 <div className='text_download'>Скачать<br />{el.size}</div>
                              </div>
                           </th>
                        </tr>
                     </tbody>
                  )
               }
            </table>
         </div>
      </div>
   )
}

export default Documents;