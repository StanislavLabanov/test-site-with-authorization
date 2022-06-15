import React from 'react';
import { useAppSelector } from '../redusers/rootReduser';
import { RegistriesPropsType } from '../types/types';
import BrowsingRegistries from './BrowsingRegistries';


const Registries: React.FC<RegistriesPropsType> = ({ registriesMass }) => {

   const selector = useAppSelector(state => state.user.numb)

   return (
      <div className='registries_block'>
         <div className='container'>
            <div className='flex_registries_block'>
               <h2>Реестры</h2>
               <div className='flex_img'>
                  <img src="./images/Vector5.png" className='one_image' />
                  <img src="./images/Group.png" className='two_image' />
               </div>
            </div>

            <table>
               <thead>
                  <tr className='nav_table'>
                     <th>
                        <div className='registr number_registr'>
                           <span>&harr;</span>
                           Регистрационный<br />
                           номер
                        </div>
                     </th>
                     <th>
                        <div className='registr name_programm'>
                           <span>&harr;</span>
                           Наименование<br />
                           программного обеспечения
                        </div>
                     </th>
                     <th>Код<br />класса</th>
                     <th><div className='class_registr'>Класс программного<br />обеспечения</div></th>
                     <th>Дата<br />регистраци</th>
                     <th>Адрес<br />сайта</th>
                  </tr>
               </thead>
               {
                  registriesMass.map(el =>
                     <tbody key={el.id} >
                        <tr>
                           <th>#{el.id + (selector - 1) * 10}</th>
                           <th dangerouslySetInnerHTML={{ __html: `${el.name}` }}></th>
                           <th>{el.cod}</th>
                           <th><div className='class_registr' dangerouslySetInnerHTML={{ __html: `${el.class}` }}></div></th>
                           <th>{el.data}</th>
                           <th>{el.from}</th>
                        </tr>
                     </tbody>
                  )
               }
            </table>
            <BrowsingRegistries />
         </div>
      </div>
   )
}

export default Registries;