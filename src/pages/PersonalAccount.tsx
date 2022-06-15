import React from "react"
import CreateAccaunt from "../components/CreateAccaunt"
import PersAccountDopBlock from "../components/PersAccountDopBlock"
import MainLayout from "../Layout/MainLayout"
import { useAppSelector } from "../redusers/rootReduser"


const PersonalAccount: React.FC = () => {
   const selector = useAppSelector(state => state.user.userMassData)

   return (
      <MainLayout>
         <div className="personal_account_block">
            <div className="container">
               <h2>Личный кабинет</h2>
               <div className="flex_account_block">
                  <div className="nav_elements_account">
                     <div className="element_nav">
                        &#128386; &nbsp;Мои данные
                     </div>
                     <div className="element_nav">
                        &#128386; &nbsp;Уведомления
                     </div>
                     <div className="element_nav">
                        &#128386; &nbsp;Реестры
                     </div>
                     <div className="element_nav">
                        &#128386; &nbsp;Метаданные
                     </div>
                     <div className="element_nav">
                        &#128386; &nbsp;Безопасность
                     </div>
                     <div className="element_nav">
                        &#128386; &nbsp;Мои загрузки
                     </div>
                     <div className="element_nav exit">
                        &#128386; &nbsp;Выход
                     </div>
                  </div>
                  <div className="account_bottom_block">
                     <div className='user_block'>
                        <div className='user_block_image'>
                           <img src='./images/Vector4.png' />
                        </div>
                        <div className="hello_block">Здравствуй, {selector.name}!</div>
                     </div>

                     <h2>Основные данные</h2>
                     <PersAccountDopBlock selectorProps={selector} />
                  </div>
               </div>
            </div>
         </div>
      </MainLayout>
   )
}

export default PersonalAccount